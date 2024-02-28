"use client";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/formatCurrency";
import Link from "next/link";
import Btn from "./Btn";
import CartItems from "./CartItems";

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
          <CartItems />
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
