"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { formatCurrency } from "@/lib/formatCurrency";
import Link from "next/link";
import Btn from "./Btn";

type ShoppingCartProps = {
  onClose: () => void;
};

function ShoppingCart({ onClose }: ShoppingCartProps) {
  const { cartItems, totalSum } = useCart();

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div
        className="absolute right-0 top-0 w-full max-w-md p-4 rounded-lg
      shadow-lg bg-white dark:bg-sky-900 dark:text-white"
      >
        <div
          className="sticky top-0 flex justify-between bg-white
         dark:bg-sky-900 dark:text-white z-50 py-3 px-4 rounded-t-lg"
        >
          <h2 className="text-xl">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-white hover:text-gray-700
           dark:hover:text-gray-300"
          >
            Close
          </button>
        </div>
        <div className="border-b border-slate-200 mb-4"></div>
        <div className="overflow-y-auto max-h-[calc(100vh-216px)]">
          {cartItems.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 py-4 px-4">
              You have nothing in your cart yet
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="mb-4 px-4">
                <div className="flex items-center justify-between">
                  <div className="flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="rounded-md"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p
                      className="text-sm font-medium text-gray-900
                     dark:text-white"
                    >
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Price: {formatCurrency(item.price)}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p
                    className="text-sm font-medium text-gray-900
                   dark:text-white"
                  >
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="mt-4 px-4">
            <p className="text-lg mb-2">
              Total Sum: {formatCurrency(totalSum())}
            </p>
            <Link href="/order">
              <Btn onClick={onClose}>PLACE ORDER</Btn>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
