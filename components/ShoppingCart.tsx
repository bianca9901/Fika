"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

type ShoppingCartProps = {
  onClose: () => void;
};

function ShoppingCart({ onClose }: ShoppingCartProps) {
  const { cartItems } = useCart();

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-start">
      <div
        className="w-96 bg-white h-full overflow-y-auto p-4 rounded-l-lg
      shadow-lg"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            Close
          </button>
        </div>
        <div className="border-b border-gray-300 mb-4"></div>
        {cartItems.map((item) => (
          <div key={item.id} className="mb-4">
            <Image
              src={item.image}
              alt={item.title}
              className="rounded-md mr-2
            w-auto h-auto"
              width={60}
              height={60}
            />
            <div className="flex justify-between">
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="fixed inset-0 z-40" onClick={onClose}></div>
    </div>
  );
}

export default ShoppingCart;
