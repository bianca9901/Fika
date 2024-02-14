"use client"
import Image from "next/image";
import { fika } from "@/lib/data";
import AddToCartBtn from "./AddToCartBtn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { formatCurrency } from "@/lib/formatCurrency";
import CartBtnGroup from "./CartBtnGroup";

export default function Menu() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const quantity = 2;

  const decreaseCartQuantity = (id: number) => {
    
  };

  const increaseCartQuantity = (id: number) => {
    
  };

  const removeFromCart = (id: number) => {
    
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
          {quantity === 0 ? (
            <AddToCartBtn />
          ) : (
            <CartBtnGroup 
              quantity={quantity}
              decreaseCartQuantity={() => decreaseCartQuantity(item.id)}
              increaseCartQuantity={() => increaseCartQuantity(item.id)}
              removeFromCart={() => removeFromCart(item.id)}
            />
          )}
        </div>
      ))}
    </motion.div>
  );
}