import React, { Suspense } from 'react'
import OrderPage from './comp/orderPage';

const page = () => {
  return (
    <Suspense fallback={<div>Loading order...</div>}>
      <OrderPage />
    </Suspense>

  )
}

export default page