import React from "react";
import Image from "next/image";

// Completed
const Footer = () => {
    return (
        <footer className="container mx-auto overflow-hidden py-10 px-5">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <Image src="/logo.jpg" alt="image" width={150} height={150} />
                <Image src="/logo.jpg" alt="image" width={150} height={150} />
                <Image src="/logo.jpg" alt="image" width={150} height={150} />
                <Image src="/logo.jpg" alt="image" width={150} height={150} />
            </div>
            <div>
                <p className="text-center">
                    {" "}
                    Copyrights © 2020 Elements Kids, All Rights Reserved.{" "}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
