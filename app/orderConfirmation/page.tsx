import React from 'react'
import OrderConfirmation from '@/components/OrderConfirmation'
import ContainerMaxWidth from '@/components/ContainerMaxWidth'

export default function OrderConfirmationPage() {
  return (
    <main>
      <ContainerMaxWidth>
        <OrderConfirmation/>
      </ContainerMaxWidth>     
    </main>
  )
}