import React from 'react'

export default function Header() {
  return (
    <>
        <div className='navbar'>
            <a href='/'><img src='https://theomdevelopment.com/img/TheomDevelopmentIcon.ico'></img></a>
            <a href='/#checkout' className='right'>Checkout</a>
            <a href='/#cart' className='right'>Cart</a>
            <a href='/' className='right'>Home</a>
        </div>

        <div className='header'>
            <h1>Game Store</h1>
            <p>Everything video games</p>
        </div>

        <span className='space'>
        </span>
    </>
  )
}
