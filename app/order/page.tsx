"use client"
import ContainerMaxWidth from '@/components/ContainerMaxWidth'
import Order from '@/components/Order'
import React from 'react'
import { redirect } from 'next/navigation'
import { useCart } from '@/context/CartContext'

export default function OrderPage() {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    redirect('/'); // Redirects to home page if cart is empty
  }
  return (
    <main>
      <ContainerMaxWidth>
         <Order/>
      </ContainerMaxWidth> 
    </main>
  )
}