import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">

                <aside className="flex flex-col items-center justify-center text-center gap-2">
                    <Logo />

                    <h2 className="text-xl font-bold">
                        Care<span className="text-primary"> .IO </span>
                    </h2>

                    <p className="max-w-xs">
                        Trusted care for children, elders, and families
                    </p>
                </aside>


                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>

                <nav className="flex flex-col items-center justify-center text-center gap-2">
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <Link
                            href="/" className="btn bg-primary rounded-full w-12 h-12 p-0 flex items-center justify-center text-white text-xl"
                        >
                            <FaTwitter />
                        </Link>

                        <Link
                            href="/" className="btn bg-primary rounded-full w-12 h-12 p-0 flex items-center justify-center text-white text-xl"
                        >
                            <IoLogoYoutube />
                        </Link>
                        <Link
                            href="/" className="btn bg-primary rounded-full w-12 h-12 p-0 flex items-center justify-center text-white text-xl"
                        >
                            <FaFacebook />
                        </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;