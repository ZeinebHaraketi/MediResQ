"use client";  // Ensure this is present to mark it as a Client Component

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import {  FaPhoneAlt, FaUserPlus, FaSignInAlt } from 'react-icons/fa'; // Icons for buttons
import { FaTruckMedical } from 'react-icons/fa6';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-blue-500 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <Link href="/" className="text-white text-lg font-bold flex items-center space-x-2">
                    <FaTruckMedical />
                    <span>MediResQ</span>
                </Link>

                {/* Menu Button for small screens */}
                <button className="text-white md:hidden" onClick={toggleMenu}>
                    {isOpen ? 'Close' : 'Menu'}
                </button>

                {/* Links for large screens */}
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:justify-end space-x-6`}>
                    <Link href="/" className="text-white hover:text-gray-200 transition duration-300 px-4 py-2">
                        Accueil
                    </Link>
                    <Link href="/services" className="text-white hover:text-gray-200 transition duration-300 px-4 py-2">
                        Nos Services
                    </Link>
                    <Link href="/about" className="text-white hover:text-gray-200 transition duration-300 px-4 py-2">
                        A propos de nous
                    </Link>
                    <Link href="/contact" className="text-white hover:text-gray-200 transition duration-300 px-4 py-2">
                        Contactez Nous
                    </Link>
                    
                    {/* Emergency Call Button */}
                    <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition duration-300 shadow-md flex items-center space-x-2">
                        <FaPhoneAlt />
                        <span>Emergency Call</span>
                    </Button>

                    {/* Login Button */}
                    <Link href="/auth/login" className="text-white hover:text-gray-200 transition duration-300 px-4 py-2 flex items-center space-x-2">
                        <FaSignInAlt />
                        <span>Login</span>
                    </Link>

                    {/* Register Button */}
                    <Link href="/auth/register">
                    <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition duration-300 shadow-md flex items-center space-x-2">
                            <FaUserPlus />
                            <span>Register</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
