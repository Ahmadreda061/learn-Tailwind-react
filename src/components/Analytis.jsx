import React from 'react'
import Laptop from '../assets/laptop.jpg'
function Analytis() {
    return (
        <section className='bg-white py-16 px-4 w-full '>
            <div className='container grid md:grid-cols-2 mx-auto'>
                <img className='w-[500px] mx-auto my-3'src={Laptop} alt="" />
                <div className='flex flex-col justify-center pl-6 font-bold'>
                    <p className='text-[#00df9a] md:text-2xl sm:text-xl text-lg pb-2'>
                        DATA ANALYTICS DASHBOARD
                    </p>
                    <h3 className='md:text-4xl sm:text-3xl text-2xl pb-4'>
                        Manage Data Analytics Centrally
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Est quod, maiores, fugiat, et soluta illum praesentium repell
                        at assumenda mollitia a optio temporibus nulla adipisci? Reprehenderi
                        t sunt minima similique corrupti a!
                    </p>
                    <button className='bg-black text-[#00df9a] custom-btn mx-auto md:mx-0 hover:bg-[#00df9a] hover:text-black'>Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default Analytis