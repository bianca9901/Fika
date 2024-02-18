"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import AddToCartBtn from "./AddToCartBtn";
import CartBtnGroup from "./CartBtnGroup";
import { formatCurrency } from "@/lib/formatCurrency";
import { fika } from "@/lib/data";

export default function Menu() {
  //const { scrollYProgress } = useScroll({
  //target: useRef<HTMLDivElement>(null),
  //offset: ['0 1', '1.33 1'],
  //});
  //const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <motion.div
      //ref={ref}
      //style={{ scale: scaleProgress }}
      className="py-4 sm:py-6 px-6 w-full max-w-screen-xl flex flex-wrap gap-10
      justify-center"
    >
      {fika.map((item) => (
        <div
          key={item.id}
          className="mb-6 border border-gray-300 rounded-lg p-4 bg-black-50"
        >
          <h2 className="text-xl font-bold mb-2 uppercase">{item.title}</h2>
          <p className="text-gray-600 mb-2">{item.description}</p>
          <p className="text-blue-400 font-bold">
            {formatCurrency(item.price)}
          </p>
          <div className="flex mb-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-200 text-gray-700 px-2 py-1 rounded-full
                text-sm mr-2"
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
                cartItems.find((cartItem) => cartItem.id === item.id)
                  ?.quantity || 0
              }
              decreaseCartQuantity={() => decreaseQuantity(item.id)}
              increaseCartQuantity={() => increaseQuantity(item.id)}
              removeFromCart={() => removeFromCart(item.id)}
            />
          ) : (
            <AddToCartBtn
            onClick={() => addToCart({ id: item.id, quantity: 1,
            title: item.title, price: item.price, image: item.image.src })}
            />
          )}
        </div>
      ))}
    </motion.div>
  );
}
