import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import {  FaInstagram, FaSquareXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";


function Footer() {
    
    const icons = [FaFacebookSquare, FaInstagram, FaSquareXTwitter, FaGithub, FaLinkedin]
    const iconsElemnt = icons.map((Icon, index) => 
        <a className='cursor-pointer' key={index}>
            <Icon size={30} className='hover:text-[#00df9a] custom-transition-colors'/>
        </a>
    )
    return (
        <footer className='w-full py-24  text-white'>
            
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
                <div className="pb-6">
                    <h3 className="w-full text-3xl font-bold text-[#00df9a] mb-4">REACT.</h3>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Molestiae earum tempora culpa modi vel ullam facere
                        ab dolor reiciendis. Illum sapiente expedita accusamus.
                    </p>
                    <div className=' mt-6 flex gap-8 md:gap-4 lg:gap-8'>
                        {iconsElemnt}
                    </div>
                </div>
                <div className="md:col-span-2 flex justify-between">
                    <div>
                        <h6 className='font-medium text-gray-400'>Solutions</h6>
                        <ul className='list-none'>
                            <li className='py-2 text-sm'>Analytics</li>
                            <li className='py-2 text-sm'>Marketing</li>
                            <li className='py-2 text-sm'>Commerce</li>
                            <li className='py-2 text-sm'>Insights</li>
                        </ul>                        
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-400'>Support</h6>
                        <ul className='list-none'>
                            <li className='py-2 text-sm'>Pricing</li>
                            <li className='py-2 text-sm'>Documentation</li>
                            <li className='py-2 text-sm'>Guides</li>
                            <li className='py-2 text-sm'>API Status</li>
                        </ul>                        
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-400'>Company</h6>
                        <ul>
                            <li className='py-2 text-sm'>About</li>
                            <li className='py-2 text-sm'>Blog</li>
                            <li className='py-2 text-sm'>Jobs</li>
                            <li className='py-2 text-sm'>Press</li>
                            <li className='py-2 text-sm'>Careers</li>
                        </ul>                     
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer