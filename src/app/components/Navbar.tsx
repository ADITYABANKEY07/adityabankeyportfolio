"use client";
import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  const menuItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "tech", label: "Tech Stack" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold font-space-grotesk gradient-text">
          AdityaBankey.
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={100}
              offset={-80} // adjust for fixed navbar height
              spy={true}
              activeClass="active-link"
              className="relative cursor-pointer text-foreground transition-colors pb-1 font-medium
                         after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px]
                         after:w-0 after:bg-accent after:transition-all after:duration-300 after:ease-in-out
                         hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
