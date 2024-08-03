import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold leading-tight">
                        About Elements Kids
                    </h2>
                    <p className="text-lg mt-4 max-w-lg mx-auto">
                        Explore our mission, locations, and historical milestones.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-10">
                    <div className="flex-1 bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                        <div className="mb-6">
                            <h3 className="text-3xl font-semibold text-purple-700 mb-4">
                                Our Mission
                            </h3>
                            <p className="text-lg leading-relaxed">
                                At Elements Kids, our mission is to provide high standards of early childhood education and care. Our team of IIM alumni and experienced educators are dedicated to nurturing the potential in every child.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/logo.jpg"
                                alt="Elements Kids Logo"
                                width={300}
                                height={150}
                                className="rounded-md"
                            />
                        </div>
                    </div>

                    <div className="flex-1 bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-semibold text-purple-700 mb-6">
                            Our Centers
                        </h3>
                        <ul className="list-disc list-inside space-y-4">
                            <li>
                                <a href="#" className="text-purple-600 hover:text-purple-800">
                                    Kasavanahalli
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-purple-600 hover:text-purple-800">
                                    Doddakannelli
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16">
                    <h3 className="text-3xl font-semibold text-white text-center mb-6">
                        Archives
                    </h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
                            <h4 className="text-2xl font-semibold text-purple-700 mb-2">
                                March 2020
                            </h4>
                            <p className="text-lg">
                                Highlights and key events from March 2020.
                            </p>
                            <a href="#" className="text-purple-600 hover:text-purple-800">
                                Read More
                            </a>
                        </div>
                        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
                            <h4 className="text-2xl font-semibold text-purple-700 mb-2">
                                March 2019
                            </h4>
                            <p className="text-lg">
                                Highlights and key events from March 2019.
                            </p>
                            <a href="#" className="text-purple-600 hover:text-purple-800">
                                Read More
                            </a>
                        </div>
                        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
                            <h4 className="text-2xl font-semibold text-purple-700 mb-2">
                                February 2019
                            </h4>
                            <p className="text-lg">
                                Highlights and key events from February 2019.
                            </p>
                            <a href="#" className="text-purple-600 hover:text-purple-800">
                                Read More
                            </a>
                        </div>
                        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
                            <h4 className="text-2xl font-semibold text-purple-700 mb-2">
                                March 2018
                            </h4>
                            <p className="text-lg">
                                Highlights and key events from March 2018.
                            </p>
                            <a href="#" className="text-purple-600 hover:text-purple-800">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
