import React from 'react'
import './style/globle.css'
function Newsletter() {
    return (
        <section className='text-white py-16 px-6 '>
            <div className='container mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h2 className='custom-text-lg '>
                        Want tips & tricks to optimize your flow?
                    </h2>
                    <p className='py-2'>
                        Sign up to our newsletter and stay up to date.
                    </p>
                </div>
                <div className='flex flex-col my-4'>
                    <form className='flex gap-4 items-center flex-col sm:flex-row text-black'>
                        <input 
                            type="email" 
                            placeholder='Enter Email'
                            className='flex-grow w-full rounded-md px-3 py-3'    
                        />
                        <button 
                            type='submit' 
                            className='bg-[#00df9a]  text-black hover:bg-white custom-btn my-0 py-3 max-w-fit '
                            style={{margin: "0", padding:"13px 16px"}}
                            >
                            Notify Me
                        </button>
                    </form>
                    <div className='my-4'>
                        <p>
                            We care bout the protection of your data. Read our {' '}
                            <span className='block text-[#00df9a] underline cursor-pointer'>Privacy Policy.</span>
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Newsletter