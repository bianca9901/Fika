"use client";
import { Icon } from "@iconify/react";

  export default function Cart() {
    return (
      <div className="relative">
        <Icon
          icon="solar:cart-2-line-duotone"
          className="w-10 h-auto text-blue-400 mr-4 ml-11"
        />
        <div className="rounded-full bg-yellow-300 flex justify-center
        items-center w-6 h-6 absolute bottom-0 right-0 transform
         text-black">
          20
        </div>
      </div>
    );
    } 