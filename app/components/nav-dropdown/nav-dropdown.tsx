"use client";
import React from "react"
import { useState } from "react";
import styles from "./nav-dropdown.module.css";

export default function NavDropdown({ navLinksProps }: { navLinksProps: { navTitle: string; links: { title: string; link: string }[] }[] }) {
    // Ensure navLinksProps is defined before using map
    if (!navLinksProps || navLinksProps.length === 0) {
        return <p>No navigation links available</p>;
    }
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

    const toggleMenu = (index: number) => {
        // Toggle the menu open/close on click
        setOpenMenuIndex(openMenuIndex === index ? null : index);
    };


    return (
        <div className={`${styles['background-wrapper']} flex justify-start px-3`}>
        {navLinksProps.map((navItem, index) => (
            <div key={index} className="relative"> {/* Use relative for positioning */}
            <div className="flex mx-1" onClick={() => toggleMenu(index)}>
                <div className="text-base font-medium mx-5 cursor-pointer">{navItem.navTitle}</div>
                <svg className="-translate-x-5" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M6 9L12 15L18 9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
                </svg>
            </div>

            {/* Conditionally render the dropdown menu */}
            {openMenuIndex === index && (
                <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md p-2 z-10">
                <ul>
                    {navItem.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="py-1">
                        <a href={link.link} className="text-gray-700 hover:text-black">{link.title}</a>
                    </li>
                    ))}
                </ul>
                </div>
            )}
            </div>
        ))}
        </div>
    );
    }