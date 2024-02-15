"use client"
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import MenuItem from "./MenuItem";
import { fika } from "@/lib/data";

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
      style={{ scale: scaleProgress }}
      className="py-4 sm:py-6 px-6 w-full max-w-screen-xl flex flex-wrap gap-10
      justify-center"
    >
      {fika.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          cartItems={cartItems}
          addToCart={addToCart}
          decreaseCartQuantity={decreaseCartQuantity}
          increaseCartQuantity={increaseCartQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
    </motion.div>
  );
}
