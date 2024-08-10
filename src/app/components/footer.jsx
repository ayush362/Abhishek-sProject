import React from "react";
import Image from "next/image";

// Completed
const Footer = () => {
    return (
        <footer className="container mx-auto overflow-hidden py-10 px-5">
            <div className="flex gap-10 py-4 flex-col md:flex-row justify-center items-center">
                <a href="https://www.facebook.com/KidzeeKasavanahalli/">
                    <Image
                        src="/Facebook.png"
                        alt="image"
                        width={50}
                        height={50}
                    />
                </a>
                <a href="https://www.instagram.com/kidzee.kasavanahalli/">
                    <Image
                        src="/instagram.svg"
                        alt="image"
                        width={50}
                        height={50}
                    />
                </a>
                <a href="https://www.youtube.com/@KidzeeKasavanahalli/">
                    <Image
                        src="/youtube.svg"
                        alt="image"
                        width={50}
                        height={50}
                    />
                </a>
            </div>
            <div>
                <p className="text-center">
                    {" "}
                    Copyrights © 2020 Kidzee Kasavanahalli Kids, All Rights Reserved.{" "}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
