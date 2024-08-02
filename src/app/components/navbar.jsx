"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
    const currentPath = usePathname();

    return (
        <>
            <nav>
                <div className="container mx-auto flex justify-center items-center gap-20">
                    <Image
                        src="/logo.jpg"
                        alt="logo"
                        width={200}
                        height={50}
                        className=""
                    />
                    <a
                        href="/"
                        className={
                            currentPath === "/"
                                ? "bg-orange-500 p-5 rounded-lg text-white"
                                : ""
                        }
                    >
                        Home
                    </a>
                    <a
                        href="/programs"
                        className={
                            currentPath === "/programs"
                                ? "bg-orange-500 p-5 rounded-lg text-white"
                                : ""
                        }
                    >
                        Programs
                    </a>
                    <a
                        href="/contact"
                        className={
                            currentPath === "/contact"
                                ? "bg-orange-500 p-5 rounded-lg text-white"
                                : ""
                        }
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
