import React from 'react'
import { ReactTyped } from "react-typed"
function Hero() {
  return (
    <header  className="text-white ">

      <div className='max-w-[800px] mx-auto text-center w-full h-screen flex flex-col justify-center mt-[-6rem] font-bold'> {/*6rem the height of navbar*/ }
        <p className='text-[#00df9a]  p-2'> 
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className=' text-4xl md:text-7xl sm:text-6xl py-6'>
          Grow with data.
        </h1>
        <div className='flex items-center justify-center'>
          <p className='md:text-5xl sm:text-4xl text-xl  md:pl-4 pl-2'>
            Fast, flexible financing for
          </p>
          <ReactTyped 
            className='md:text-4xl sm:text-3xl text-l text-gray-500 pl-2'
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl sm:text-xl text-lg py-4 text-gray-500 md:w-full w-[80%] mx-auto'>
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
        </p>
        <button className='bg-[#00df9a] font-medium w-[200px] mx-auto p-4 my-6 rounded-md text-black hover:bg-white transition-bg ease-in-out duration-300'>
          Get Started
        </button>
      </div>
    </header>
  )
}

export default Hero