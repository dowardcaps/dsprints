"use client";
import React, { useEffect, useState } from "react";
import {
  Printer,
  Copy,
  Layers,
  Image as ImageIcon,
  Palette,
  Smartphone,
  Mail,
  Contact,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import RushIDPackage from "@/public/components/RushIDPackage";
import LaminateAndPhotoPrint from "@/public/components/LaminateAndPhotoPrint";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const services = [
    { title: "Document Print", icon: <Printer size={32} /> },
    { title: "Xerox & Scan", icon: <Copy size={32} /> },
    { title: "Laminate", icon: <Layers size={32} /> },
    { title: "Photo & Sticker", icon: <ImageIcon size={32} /> },
    { title: "Layout & Design", icon: <Palette size={32} /> },
    { title: "Load & GCash", icon: <Smartphone size={32} /> },
    { title: "RUSH ID", icon: <Contact size={32} /> },
  ];

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-blue-950 h-20 flex justify-between items-center px-6 md:px-12 text-white sticky top-0 z-50 shadow-lg">
        {/* Mobile Menu Button (Left Side) */}
        <button
          className="md:hidden p-2 hover:bg-blue-900 rounded-lg transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <Menu className="cursor-pointer" size={28} />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-10 h-10">
            <img src="/images/icon.png" alt="logo" width={40} height={40} />
          </div>
          <h1 className="font-bold text-lg md:text-2xl tracking-tight">
            DS PRINTS & SUPPLIES
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="flex items-center gap-8 max-md:hidden font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-300 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Side Drawer Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-60 md:hidden"
            onClick={toggleMenu}
          />
        )}

        {/* Mobile Side Drawer (Slides from Left) */}
        <div
          className={`fixed top-0 left-0 h-full w-70 bg-blue-950 z-70 transform transition-transform duration-300 ease-in-out md:hidden 
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-10">
              <span className="font-bold text-xl">MENU</span>
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-blue-900 rounded-full"
              >
                <X size={28} />
              </button>
            </div>
            <ul className="flex flex-col gap-6 text-lg">
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

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/heroBG.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tighter">
            Your One-Stop Print Shop
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            High-quality printing, digital services, and school supplies located
            in the heart of Tanza.
          </p>
          <a href="#services" className="cursor-pointer">
            <button
              className="mt-8 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-xl
            cursor-pointer"
              aria-label="services button"
            >
              View Our Services
            </button>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 uppercase">
            Our Services
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center text-center group"
            >
              <div className="text-blue-600 mb-4 bg-blue-50 p-4 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Professional and quick service for all your personal or business
                needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RUSH ID Section */}
      <RushIDPackage />

      {/* Laminate and Photo Print section */}
      <LaminateAndPhotoPrint />

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-blue-950 text-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-blue-900 pb-12">
          <div data-aos="fade-right">
            <h3 className="text-white text-xl font-bold mb-4">
              DS PRINTS & SUPPLIES
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Providing Amaya 1 with quality printing, design layouts, and
              essential school supplies. We make your digital needs a reality.
            </p>
          </div>

          <div data-aos="fade-up">
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-blue-500" />
                <span className="text-sm">Amaya 1, Tanza, Cavite</span>
              </li>
              <li>
                <a
                  href="mailto:dsprints27@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition-colors text-sm"
                >
                  <Mail size={20} className="text-blue-500" />
                  <span className="hover:underline">dsprints27@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/18DXPJnLCa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook-icon lucide-facebook text-blue-500"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="hover:underline">DS Prints and Supplies</span>
                </a>
              </li>
            </ul>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-white text-xl font-bold mb-4">
              Business Hours
            </h3>
            <div className="text-sm space-y-2 text-slate-400">
              <p className="flex justify-between">
                <span>Mon - Sat:</span> <span>6:00 AM - 8:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span> <span>Closed</span>
              </p>
            </div>
            <p className="text-sm mt-6 text-blue-400 italic font-medium">
              "Quality prints for every purpose."
            </p>
          </div>
        </div>

        <div className="text-center mt-8 text-xs tracking-widest text-white">
          © {new Date().getFullYear()} DS Prints & Supplies. All Rights
          Reserved.
        </div>
      </footer>
    </main>
  );
}
