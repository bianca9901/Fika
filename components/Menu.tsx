"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import CartBtnGroup from "./CartBtnGroup";
import { formatCurrency } from "@/lib/formatCurrency";
import { fika } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import Btn from "./Btn";

export default function Menu() {
  const { ref } = useSectionInView("MENU");

  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <section ref={ref} id="menu" className="scroll-mt-28">
      <SectionHeading
        headingText1="Only traditional Fika on our "
        headingText2="Menu"
      />

      <div
        className="py-4 sm:py-6 px-6 w-full max-w-screen-xl flex flex-wrap
        gap-10 justify-center"
      >
        {fika.map((item) => (
          <div
            key={item.id}
            className="mb-6 border border-gray-300 rounded-lg p-4"
          >
            <h2 className="text-xl mb-2 uppercase text-white">{item.title}</h2>
            <p className="text-yellow-300 mb-2">{formatCurrency(item.price)}</p>
            <div className="flex mb-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-sky-500 dark:bg-sky-900 text-white px-2
                  py-1 rounded-full text-sm mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              className="relative flex justify-center items-center mx-auto
            mb-4 rounded-full shadow-image"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={150}
                height={150}
                quality={70}
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
              <Btn
                onClick={() =>
                  addToCart({
                    id: item.id,
                    quantity: 1,
                    title: item.title,
                    price: item.price,
                    image: item.image.src,
                  })
                }
              >
                ADD TO CART +
              </Btn>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
