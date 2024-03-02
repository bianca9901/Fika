"use client";

import React from "react";
import OrderText from "./OrderText";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { SendEmail } from "@/actions/SendEmail";
import { useCart } from "@/context/CartContext";
import { redirect } from 'next/navigation'
import { useOrderContext } from '@/context/OrderContext';

export default function Order() {
  const { formattedCartItems } = useCart();
  //const { markOrderPlaced } = useOrderContext();

    const handleOrderSummaryClick = () => {
      toast("To make changes to your order, please return to the menu.", {
        icon: "ℹ️",
      });
    };

  return (
    <section className="mt-40 mb-40">
      <OrderText />
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await SendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Order sent successfully");
          //markOrderPlaced();
          redirect('/orderConfirmation');
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/10"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-20 my-3 rounded-lg border-black/10 p-4 bg-sky-300 dark:bg-black dark:text-gray-300"
          name="orderSummary"
          value={`I am ordering: ${formattedCartItems}`}
          onClick={handleOrderSummaryClick}
          readOnly
          aria-label={`Your order is ${formattedCartItems}`}
        />
        <textarea
          className="h-52 my-3 rounded-lg border-black/10 p-4"
          name="message"
          required
          maxLength={5000}
          placeholder="Additional information"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, backgroundColor: "#FFD700" }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-300 focus:outline-none focus:ring-2
             focus:ring-yellow-400 focus:ring-opacity-50 text-black py-1 px-6
             rounded shadow-md"
        >
          PLACE ORDER
        </motion.button>
      </form>
    </section>
  );
}
