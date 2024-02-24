"use client";
import { Icon } from "@iconify/react";
import { useCart } from "@/context/CartContext";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";

export default function Cart() {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItemsInCart = cartItems.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  );

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };


  return (
    <div className="relative">
      <Icon
        icon="solar:cart-2-line-duotone"
        className="w-10 h-auto text-blue-400 mr-4 ml-11"
        onClick={handleOpenCart}
      />
      <div
        className="rounded-full bg-yellow-300 flex justify-center
      items-center w-6 h-6 absolute bottom-0 right-0 transform text-black"
      >
        { totalItemsInCart }
      </div>
      {isCartOpen && <ShoppingCart onClose={handleCloseCart} />}
    </div>
  );
}
