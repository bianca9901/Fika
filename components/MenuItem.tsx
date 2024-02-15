"use client";
import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";
import CartBtnGroup from "./CartBtnGroup";
import { formatCurrency } from "@/lib/formatCurrency";

type MenuItemProps = {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    tags: string[];
    image: string;
  };
  cartItems: { id: number; quantity: number }[];
  addToCart: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  increaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

export default function MenuItem({
  item,
  cartItems,
  addToCart,
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
}: MenuItemProps) {
  return (
    <div
      key={item.id}
      className="mb-6 border border-gray-300 rounded-lg p-4
    bg-black-50"
    >
      <h2 className="text-xl font-bold mb-2 uppercase">{item.title}</h2>
      <p className="text-gray-600 mb-2">{item.description}</p>
      <p className="text-blue-400 font-bold">{formatCurrency(item.price)}</p>
      <div className="flex mb-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-200 text-gray-700 px-2 py-1
          rounded-full text-sm mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        className="relative w-40 h-40 mx-auto mb-4 overflow-hidden
      rounded-full shadow-image"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 400px"
        />
      </div>
      {cartItems.find((cartItem) => cartItem.id === item.id) ? (
        <CartBtnGroup
          quantity={
            cartItems.find((cartItem) => cartItem.id === item.id)?.quantity || 0
          }
          decreaseCartQuantity={() => decreaseCartQuantity(item.id)}
          increaseCartQuantity={() => increaseCartQuantity(item.id)}
          removeFromCart={() => removeFromCart(item.id)}
        />
      ) : (
        <AddToCartBtn onClick={() => addToCart(item.id)} />
      )}
    </div>
  );
}
