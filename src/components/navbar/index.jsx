import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()


    const handleLogout = () => {
        localStorage.clear()
        window.location.replace('/')
    }

    const navigateTo = (path) => {
        navigate(path)
        window.location.reload(true)
    }

    return (
        <div className='flex justify-between bg-blue-700 min-w[525px]'  >
            <Link to='/' className="logo">
                <img className='w-10 h-10 m-3 cursor-pointer' src={logo} alt="Logo" />
            </Link>
            <div className='flex'>
                <Link to='/' className='no-underline m-5 text-[#fff8dc] hover:text-[#A52A2A] text-lg font-semibold'>Home</Link>
                <Link to='/intro' className='no-underline m-5 text-[#fff8dc] hover:text-[#A52A2A] text-lg font-semibold'>Introduce</Link>
                <Link to='/contact' className='no-underline m-5 text-[#fff8dc] hover:text-[#A52A2A] text-lg font-semibold'>Contact</Link>
                {localStorage.getItem('name') &&
                    <Link onClick={() => navigateTo('/my-cart')} className='no-underline m-5 text-[#fff8dc] hover:text-[#A52A2A] text-lg font-semibold'>My Cart</Link>
                }
                {localStorage.getItem('name') &&
                    <Link onClick={() => navigateTo('/purchase-history')} className='no-underline m-5 text-[#fff8dc] hover:text-[#A52A2A] text-lg font-semibold'>Purchase History</Link>

                }
                {localStorage.getItem('isAdmin') === "true" &&
                    <Link className='no-underline m-5 text-[#fff8dc] hover:text-[#A52A2A] text-lg font-semibold'
                        onClick={() => navigateTo('/orders')}
                    >Orders</Link>
                }
                {localStorage.getItem('name') ?
                    <Link
                        onClick={() => handleLogout()}
                        to='/'
                        className='no-underline m-5 text-[#fff8dc] hover:text-[#A52A2A] text-lg font-semibold'>
                        Logout
                    </Link>
                    :
                    <Link to='/login' className='no-underline m-5 text-[#fff8dc] hover:text-[#A52A2A] text-lg font-semibold'>Login</Link>
                }
            </div>
        </div>
    )
}

export default Navbar