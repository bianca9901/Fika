"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import Confetti from "./Confetti";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/formatCurrency";

function OrderConfirmation() {
  const { formattedCartItems, totalSum } = useCart();

  return (
    <div className="flex flex-col items-center justify-center h-screen dark:text-white">
      <div className="mt-[7.2rem] text-center">
        <SectionHeading
          headingText1="Hooray!"
          headingText2="Your order has been confirmed!"
        />
        <p className="text-lg">
          Congratulations! Your order has successfully been placed and is now
          being prepared with love and care. It will be ready for pick-up in
          just 24 hours, unless you&apos;ve provided additional information.
          Thank you immensely for choosing us! We can&apos;t wait for you to
          enjoy your purchase!
        </p>
        <p className="mt-10 font-bold">Order Details:</p>
        <p>{formattedCartItems}</p>
        <p className="">Total Sum: {formatCurrency(totalSum())}</p>
      </div>
      <Confetti />
    </div>
  );
}

export default OrderConfirmation;
