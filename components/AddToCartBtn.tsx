"use client"
import React from 'react';
import { motion } from 'framer-motion';

function AddToCartBtn() {
  return (
    <div className="flex justify-center">
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: '#34D399' }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-400 focus:outline-none focus:ring-2
       focus:ring-green-500 focus:ring-opacity-50 text-white py-1 px-6
       rounded-full shadow-md"
      >
        ADD TO CART +
      </motion.button>
    </div>
  );
}

export default AddToCartBtn;
