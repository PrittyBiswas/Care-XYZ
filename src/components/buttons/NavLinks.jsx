"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ href, children }) => {
    const path = usePathname();
    const isActive = path.startsWith(href);

    return (
        <Link
            href={href}
            className={`font-medium transition-colors ${isActive ? "text-primary" : "text-neutral rounded-xl hover:text-primary "
                }`}
        >
            {children}
        </Link>
    );
};

export default NavLinks;
