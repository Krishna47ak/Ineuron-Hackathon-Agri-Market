import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className="bg-white flex px-5 md:px-20 py-2 items-center shadow-xl">
                <Link to="/" className="md:text-2xl font-bold font-Poppins flex items-center"><img className='h-12 md:h-20 mx-3 pb-3' src={require('../../img/harvest.png')} />Agri Market</Link>

                <nav className="hidden md:inline space-x-6 mx-auto">
                    <Link className='text-gray-600 text-lg font-Poppins hover:text-green-400' to="#home">Home</Link>
                    <Link className='text-gray-600 text-lg font-Poppins hover:text-green-400' to="#features">Features</Link>
                    <Link className='text-gray-600 text-lg font-Poppins hover:text-green-400' to="#products">Products</Link>
                    <Link className='text-gray-600 text-lg font-Poppins hover:text-green-400' to="#categories">Categories</Link>
                    <Link className='text-gray-600 text-lg font-Poppins hover:text-green-400' to="#review">Review</Link>
                </nav>

                <div className="space-x-2 md:space-x-5 ml-auto md:ml-0">
                    <div className="fas fa-bars bg-slate-200 md:hidden p-2 md:p-3 rounded-md hover:bg-green-400" id="menu-btn"></div>
                    <div className="fas fa-search bg-slate-200 p-2 md:p-3 rounded-md hover:bg-green-400" id="search-btn"></div>
                    <div className="fas fa-shopping-cart bg-slate-200 p-2 md:p-3 rounded-md hover:bg-green-400" id="cart-btn"></div>
                    <div className="fas fa-user bg-slate-200 p-2 md:p-3 rounded-md hover:bg-green-400" id="login-btn"></div>
                </div>
            </ header>
        </>
    )
}

export default Navbar