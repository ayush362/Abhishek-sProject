"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
    const currentPath = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
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
                    <div className="hidden md:flex gap-10 items-center">
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
                        <div
                            className="relative"
                            onMouseEnter={toggleSubMenu}
                            onMouseLeave={toggleSubMenu}
                        >
                            <a
                                href="/playgroup"
                                className={`p-5 ${
                                    ["/playgroup", "/kindergarten", "/nursery"].includes(
                                        currentPath
                                    )
                                        ? "bg-orange-500 rounded-lg text-white"
                                        : ""
                                }`}
                            >
                                Programs
                            </a>
                            {subMenuOpen && (
                                <div
                                    className="absolute left-0 mt-4 pt-5 w-48 bg-gray-300 shadow-lg rounded-lg z-10"
                                    onMouseEnter={() => setSubMenuOpen(true)}
                                    onMouseLeave={() => setSubMenuOpen(false)}
                                >
                                    <a
                                        href="/playgroup"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                    >
                                        Playgroup
                                    </a>
                                    <a
                                        href="/nursery"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                    >
                                        Nursery
                                    </a>
                                    <a
                                        href="/kindergarten"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                    >
                                        Kindergarten
                                    </a>
                                </div>
                            )}
                        </div>
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
                        <div className="relative">
                            <button
                                onClick={toggleSubMenu}
                                className={`block p-4 text-left w-full ${
                                    ["/playgroup", "/kindergarten", "/nursery"].includes(
                                        currentPath
                                    )
                                        ? "bg-orange-500 text-white"
                                        : ""
                                }`}
                            >
                                Programs
                            </button>
                            {subMenuOpen && (
                                <div className="pl-4">
                                    <a
                                        href="/playgroup"
                                        className="block p-4"
                                    >
                                        Playgroup
                                    </a>
                                    <a
                                        href="/nursery"
                                        className="block p-4"
                                    >
                                        Nursery
                                    </a>
                                    <a
                                        href="/kindergarten"
                                        className="block p-4"
                                    >
                                        Kindergarten
                                    </a>
                                </div>
                            )}
                        </div>
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
