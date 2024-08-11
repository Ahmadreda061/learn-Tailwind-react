import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import './style/globle.css'
const navItems = ["Home", "Company", "Resources", "About", "Contact"];

function Navbar() {
    const [activeMenu, setActiveMenu] = useState(false);
    const navItemElements = navItems.map((item, index) => 
        <li 
            key={index} 
            className={`p-4  cursor-pointer border-b-2 sm:border-b-0 border-b-gray-600
                        hover:bg-[#426c91] sm:hover:bg-[#000] hover:text-[#00df9a] 
                        custom-transition-colors rounded-sm`}
        >
            {item}
        </li>
    )
    return (
        <div className="text-white flex justify-between items-center container  mx-auto px-4 h-24">
            <h1 className="w-full text-3xl font-bold text-[#00df9a] ">REACT.</h1>
            <ul className="hidden sm:flex">
                {navItemElements}
            </ul>
            <div className='cursor-pointer block sm:hidden hover:text-[#00df9a] custom-transition-colors' onClick={() => setActiveMenu(prevNav => !prevNav)} >
                {activeMenu ? 
                    <AiOutlineClose 
                        size={20}
                        
                    /> 
                    :
                    <AiOutlineMenu 
                        size={20} 
                    />                
                }
            </div>
            
            <div className={`${!activeMenu && "left-[-100%]" } fixed left-0 top-0 w-[60%]  h-full transition-all duration-300 bg-[#111] sm:hidden`}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-6">REACT.</h1>
                <ul className="pt-6 uppercase ">
                    {navItemElements} 
                </ul>
            </div>
        </div>
    )
}

export default Navbar