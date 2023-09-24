'use client'

import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'

const page = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center py-8'>
      <h1 className='font-bold text-2xl text-[--text-200] text-center'>
        Lo sentimos, tu compra no se pudo completar
      </h1>
    </div>
  )
}

export default withPageAuthRequired(page)