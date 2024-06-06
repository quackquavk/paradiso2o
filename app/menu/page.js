'use'
import Header from '@/components/Header'
import Menus from '@/components/Menus'
import React from 'react'

const Menu = () => {
  return (
    <>
    <Header />
    <section className=' bg-black flex flex-col justify-center items-center py-[10vh] menusection' >
    <h1 className='h2-bold text-white animate-bounce1  z-10'>Delve into our tempting menu, a symphony of flavors awaits.</h1>
    <Menus />
    </section></>
  )
}

export default Menu