"use client";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
  { name: "Price Lists", href: "/pricelists" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Navigation */}
      <nav className="max-w-8xl mx-auto px-6 md:px-20 container_padding h-20 flex justify-between items-center top-0 z-50">
        {/* Mobile Menu Button (Left Side) */}
        <button
          className="lg:hidden p-2 hover:bg-blue-900 rounded-lg transition-colors hover:text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <Menu className="cursor-pointer" size={28} />
        </button>

        <a href="/" className="flex items-center gap-2" aria-label="home button">
          <div className="w-10 h-10">
            <img src="/images/icon.png" alt="logo" width={40} height={40} />
          </div>
          <h1 className="font-bold text-lg lg:text-2xl tracking-tight">
            DS PRINTS & SUPPLIES
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="flex items-center gap-8 max-lg:hidden font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-500 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Side Drawer Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-60 lg:hidden"
            onClick={toggleMenu}
          />
        )}

        {/* Mobile Side Drawer (Slides from Left) */}
        <div
          className={`fixed top-0 left-0 h-full w-70 bg-blue-950 z-70 transform transition-transform duration-300 ease-in-out lg:hidden 
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-10 text-white">
              <span className="font-bold text-xl">MENU</span>
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-blue-900 rounded-full"
              >
                <X size={28} />
              </button>
            </div>
            <ul className="flex flex-col gap-6 text-lg text-white">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block w-full py-2 hover:text-blue-300 transition-colors border-b border-blue-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-20 text-xs text-blue-400">
              <p>Amaya 1, Tanza, Cavite</p>
              <p className="mt-2">dsprints27@gmail.com</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
