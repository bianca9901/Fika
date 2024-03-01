"use server";
/**
 * SendEmail function sends an email using Resend API based on the provided form data.
 * It performs server-side validation on sender email, message, and order summary.
 * If successful, it sends the email with the provided data using Resend.
 * If an error occurs during sending, it returns the error message.
 **/

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import OrderFormEmail from "@/email/OrderFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const orderSummary = formData.get("orderSummary");

  // Server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(orderSummary, 500)) {
    return {
      error: "Invalid order",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Order Form <onboarding@resend.dev>",
      to: "biancawikberg99@yahoo.com",
      subject: "Message from order form",
      reply_to: senderEmail,
      react: React.createElement(OrderFormEmail, {
        message: message,
        senderEmail: senderEmail,
        orderSummary: orderSummary,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
