import React from "react";
import {Link} from 'react-router-dom'
import logo from '../../assets/image/logo.png'

const Navbar = () => {
    return(
        <div className='flex justify-between bg-blue-700'  >
            <Link to='/' className="logo">
                <img className='w-10 h-10 m-3 cursor-pointer' src={logo} alt="Logo" />
            </Link>
            <div className='flex'>
                <Link to='/' className='no-underline m-5 text-[#fff8dc] hover:text-[#A52A2A] '>Home</Link>
                <Link to='/intro' className='no-underline m-5 text-[#fff8dc] hover:text-[#A52A2A] '>Introduce</Link>
                <Link to='/contact' className='no-underline m-5 text-[#fff8dc] hover:text-[#A52A2A] '>Contact</Link>
                <Link to='/' className='no-underline m-5 text-[#fff8dc] hover:text-[#A52A2A] '>Login</Link>
            </div>
        </div>
    )
}

export default Navbar