import React from "react"
import { useState } from "react";
import styles from "./nav-dropdown.module.css";

export default function NavDropdown({ navLinksProps }: { navLinksProps: { navTitle: string; links: { title: string; link: string }[] }[] }) {
    // Ensure navLinksProps is defined before using map
  if (!navLinksProps || navLinksProps.length === 0) {
    return <p>No navigation links available</p>;
  }

  return (
    <div className = {`${styles['background-wrapper']} flex justify-start px-3`}>
        {navLinksProps.map((navItem, index) => (
            <div key={index} >
                <div className = "flex mx-1">
                    <div className = "text-base font-medium mx-5" >{navItem.navTitle}</div>
                    <svg className = "-translate-x-2" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 9L12 15L18 9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </div>
                {/* {navItem.links.map((linkItem, linkIndex) => (
                    <div key={linkIndex}>
                        <a href={linkItem.link}>{linkItem.title}</a>
                    </div>
                ))} */}
            </div>
        ))}
    </div>
    );
}