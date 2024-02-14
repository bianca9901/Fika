"use client"
import { motion } from 'framer-motion';

function HeroBtn() {
  return (
    <div className="flex justify-center">
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: '#FFD700' }}
        whileTap={{ scale: 0.95 }}
        className="bg-yellow-300 focus:outline-none focus:ring-2
       focus:ring-yellow-400 focus:ring-opacity-50 text-black py-1 px-6
       rounded shadow-md"
      >
        SEE OPEN TIMES
      </motion.button>
    </div>
  );
}

export default HeroBtn;