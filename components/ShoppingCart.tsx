"use client";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { formatCurrency } from "@/lib/formatCurrency";

type ShoppingCartProps = {
  onClose: () => void;
};

function ShoppingCart({ onClose }: ShoppingCartProps) {
  const { cartItems } = useCart();

  const totalSum = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    // Closes the shopping cart when clicking outside of it
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest(".shopping-cart")) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-center
    bg-black bg-opacity-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md p-4
      rounded-lg shadow-lg bg-white overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-slate-500"
          >
            Close
          </button>
        </div>
        <div className="border-b border-slate-200 mb-4"></div>
        {cartItems.length === 0 ? (
          <p>You have nothing in your cart yet</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="mb-4">
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-md mr-2"
                width={60}
                height={60}
              />
              <div className="flex justify-between">
                <p>{item.title}</p>
                <p>{formatCurrency(item.price * item.quantity)}</p>
              </div>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <div className="mt-4">
            <p className="text-lg font-semibold">
              Total Sum: {formatCurrency(totalSum)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
