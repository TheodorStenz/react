import React from 'react'
import Product from './Product'

export default function Main({ products }) {
  return (
    <>
        <div className='main'>
            {products.map(product => {
                return <Product key={Math.floor((Math.random() * 9999) + 1)}/>
            })}
        </div>
    </>
  )
}
