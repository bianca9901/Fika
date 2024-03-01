"use client";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import shapedivider from "@/public/shape-divider.svg";
import Image from "next/image";

export default function CustomShapeDividerBottom() {
  const { theme } = useTheme();

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 transform rotate-180">
        {theme === "light" && (
          <Image
            src={shapedivider}
            alt="Custom Shape Divider"
            width={2000}
            height={220}
          />
        )}
      </div>
    </div>
  );
}
