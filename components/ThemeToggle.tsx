"use client"

import { useTheme } from '@/context/ThemeContext'
import React from 'react'
import { Icon } from "@iconify/react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem]
    bg-opacity-80 border border-white
    border-opacity-40 shadow-2xl rounded-full flex items-center
    justify-center hover:scale-[1.15] active:scale-105 transition-all'
    onClick={toggleTheme}>
          {
            theme === "light" ? (
              <Icon
              icon="ph:sun-thin"
              className='w-[2rem] h-[2rem] text-sky-600'
            />        
            ) : (
              <Icon
              icon="ph:moon-thin"
              className='w-[2rem] h-[2rem] text-sky-600'
            />     
            )
        }  
    </button>
  )
}