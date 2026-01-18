import React from "react";
import Logo from "./Logo";
import NavLinks from "../buttons/NavLinks";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    const navLinks = (
        <>
            <li>
                <NavLinks href="/">Home</NavLinks>
            </li>
            <li>
                <NavLinks href="/products">Products</NavLinks>
            </li>
            <li>
                <NavLinks href="/services">Services</NavLinks>
            </li>
            <li>
                <NavLinks href="/my-bookings">My Bookings</NavLinks>
            </li>
            <li>
                <NavLinks href="/contact">Contact Us</NavLinks>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm px-4">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Mobile Menu */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks}
                    </ul>
                </div>

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Logo />
                    <h2 className="text-xl font-bold">Care<span className='text-primary'> .IO </span></h2>
                </div>

            </div>

            {/* Navbar Center (Desktop Menu) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLinks}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end gap-2">
                <Link href="/cart" className="btn  rounded-xl  bg-primary hover:border-primary text-white">
                    <FaShoppingCart />
                </Link>
                <Link href="/login" >

                    <button className="btn border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white">
                        Login
                    </button>

                </Link>

            </div>
        </div>
    );
};

export default Navbar;
