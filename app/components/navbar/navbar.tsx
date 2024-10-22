import React from "react";
import NavDropdown from "../nav-dropdown/nav-dropdown";



export default function Navbar({ navLinks }: { navLinks: { navTitle: string; links: { title: string; link: string }[] }[] }) {
    return (
      <div>
        <NavDropdown navLinksProps={navLinks} />
      </div>
    );
  }