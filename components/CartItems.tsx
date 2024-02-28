import React from "react";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/formatCurrency";
import Image from "next/image";

function CartItems() {
  const { cartItems } = useCart();
  return (
    <>
      {cartItems.map((item) => (
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
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {item.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Price: {formatCurrency(item.price)}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Quantity: {item.quantity}
              </p>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {formatCurrency(item.price * item.quantity)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartItems;
