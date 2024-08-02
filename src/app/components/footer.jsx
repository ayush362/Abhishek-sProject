import React from "react";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="container mx-auto overflow-hidden py-10">
            <div className="flex justify-center items-center">
                <Image src="/logo.jpg" alt="image" width={20} height={20} />
                <Image src="/logo.jpg" alt="image" width={20} height={20} />
                <Image src="/logo.jpg" alt="image" width={20} height={20} />
                <Image src="/logo.jpg" alt="image" width={20} height={20} />
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
