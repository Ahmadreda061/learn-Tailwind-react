import React from 'react'
import './style/globle.css'
function Card({image, alt, userType, price, features, cardPos }) {
    return (
        <div 
            className='card w-full font-bold flex flex-col items-center cursor-pointer gap-8 rounded-lg pb-12 hover:scale-110 duration-300'
            style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}
        >
            <img className='w-20 -mt-8' src={image} alt={alt} />
            <h2 className='capitalize md:text-4xl sm:text-3xl text-xl'>
                {userType} User
            </h2>
            <p className='custom-text-md'>${price}</p>
            <div className='text-center font-medium w-full px-12 lg:px-24'>
                {
                    features .map((feat, index) => 
                        <p className='py-4 border-b-2 border-gray-300' key={index}>{feat}</p>
                    )
                }
            </div>
            <button className={`custom-btn 
                                ${(cardPos  % 2 != 0 ? "bg-black text-[#00df9a] hover:bg-[#00df9a] hover:text-black" : 
                                "bg-[#00df9a] hover:bg-black hover:text-[#00df9a]")} `
                            }
            >
                Start Trail
            </button>
        </div>
    )
}

export default Card