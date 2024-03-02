"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import Confetti from "./Confetti";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/formatCurrency";
import { redirect } from 'next/navigation'
import { useOrderContext } from '@/context/OrderContext';

function OrderConfirmation() {
  const { formattedCartItems, totalSum, clearCart } = useCart();
  const [savedCartItems, setSavedCartItems] = useState<string>("");
  const [savedTotalSum, setSavedTotalSum] = useState<number>(0);
  //const { isOrderPlaced } = useOrderContext();

  useEffect(() => {
    //if (!isOrderPlaced) {
      //redirect('/');
    //}
    // Save the cart items and total sum before clearing the cart
    setSavedCartItems(formattedCartItems);
    setSavedTotalSum(totalSum());

    // Clear the cart when the component mounts
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <p>{savedCartItems}</p>
        <p className="">Total Sum: {formatCurrency(savedTotalSum)}</p>
      </div>
      <Confetti />
    </div>
  );
}

export default OrderConfirmation;
