import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
const navItems = ["Home", "Company", "Resources", "About", "Contact"];

function Navbar() {
    const [activeMenu, setActiveMenu] = useState(false);
    const navItemElements = (btm) => navItems.map((item, index) => 
        <li key={index} className={`p-4 pl-8 cursor-pointer border-b-${btm} border-b-gray-600`}>{item}</li>
    )
    return (
        <div className="text-white flex justify-between items-center max-w-[1240px] mx-auto px-4 h-24">
            <h1 className="w-full text-3xl font-bold text-[#00df9a] ">REACT.</h1>
            <ul className="hidden sm:flex">
                {navItemElements(0)}
            </ul>
            <div className='cursor-pointer block sm:hidden' onClick={() => setActiveMenu(prevNav => !prevNav)} >
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
                    {navItemElements(2)}
                </ul>
            </div>
        </div>
    )
}

export default Navbar