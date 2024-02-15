"use client"
import React, { useState, useRef } from 'react';
import Image from "next/image";
import { fika } from "@/lib/data";
import AddToCartBtn from "./AddToCartBtn";
import { motion, useScroll, useTransform } from "framer-motion";
import { formatCurrency } from "@/lib/formatCurrency";
import CartBtnGroup from "./CartBtnGroup";

export default function Menu() {
  const [cartItems, setCartItems] = useState<{ id: number; quantity: number }[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const addToCart = (id: number) => {
    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem) {
      setCartItems(prevCartItems => prevCartItems.map(item => item.id === id ?
        { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartItems(prevCartItems => [...prevCartItems, { id, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id));
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems(prevCartItems => prevCartItems.map(item => item.id === id ?
      { ...item, quantity: item.quantity - 1 } :
      item).filter(item => item.quantity > 0));
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems(prevCartItems => prevCartItems.map(item => item.id === id ?
      { ...item, quantity: item.quantity + 1 } : item));
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
      }}
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
          <p className="text-blue-400 font-bold">{formatCurrency(item.price)}
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
          <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden
          rounded-full shadow-image">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          {cartItems.find(cartItem => cartItem.id === item.id) ? (
            <CartBtnGroup
              quantity={cartItems.find(cartItem => cartItem.id === item.id)
              ?.quantity || 0}
              decreaseCartQuantity={() => decreaseCartQuantity(item.id)}
              increaseCartQuantity={() => increaseCartQuantity(item.id)}
              removeFromCart={() => removeFromCart(item.id)}
            />
          ) : (
            <AddToCartBtn onClick={() => addToCart(item.id)} />
          )}
        </div>
      ))}
    </motion.div>
  );
}