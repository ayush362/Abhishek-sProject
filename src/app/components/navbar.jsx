"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

//Completed
const Navbar = () => {
    const currentPath = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="bg-white shadow-lg">
                <div className="container mx-auto flex justify-between items-center p-5">
                    <Image
                        src="/logo.jpg"
                        alt="logo"
                        width={200}
                        height={50}
                        className="cursor-pointer"
                    />
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-900 focus:outline-none"
                        >
                            {menuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="hidden md:flex gap-10">
                        <a
                            href="/"
                            className={`p-5 ${
                                currentPath === "/"
                                    ? "bg-orange-500 rounded-lg text-white"
                                    : ""
                            }`}
                        >
                            Home
                        </a>
                        <a
                            href="/programs"
                            className={`p-5 ${
                                currentPath === "/programs"
                                    ? "bg-orange-500 rounded-lg text-white"
                                    : ""
                            }`}
                        >
                            Programs
                        </a>
                        <a
                            href="/contact"
                            className={`p-5 ${
                                currentPath === "/contact"
                                    ? "bg-orange-500 rounded-lg text-white"
                                    : ""
                            }`}
                        >
                            Contact
                        </a>
                    </div>
                </div>
                {menuOpen && (
                    <div className="md:hidden">
                        <a
                            href="/"
                            className={`block p-4 ${
                                currentPath === "/"
                                    ? "bg-orange-500 text-white"
                                    : ""
                            }`}
                        >
                            Home
                        </a>
                        <a
                            href="/programs"
                            className={`block p-4 ${
                                currentPath === "/programs"
                                    ? "bg-orange-500 text-white"
                                    : ""
                            }`}
                        >
                            Programs
                        </a>
                        <a
                            href="/contact"
                            className={`block p-4 ${
                                currentPath === "/contact"
                                    ? "bg-orange-500 text-white"
                                    : ""
                            }`}
                        >
                            Contact
                        </a>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
