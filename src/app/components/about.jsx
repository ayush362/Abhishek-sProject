import React from "react";

const About = () => {
    return (
        // About section
        <section className="bg-purple-800 text-white py-10 px-4 md:px-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">
                        ABOUT US
                    </h3>
                    <p className="text-sm leading-relaxed">
                        Elements Kids is administered by IIM alumni who strive
                        to impart high standards of early childhood education
                        and care to children. Deep expertise in Montessori
                        pedagogy of the founding team and the teaching faculty
                        helps the children blossom to their potential.
                    </p>
                    <div className="mt-6">
                        <img
                            src="/path/to/elements-logo.png"
                            alt="Elements Kids Logo"
                            className="w-32"
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">
                        CENTERS
                    </h3>
                    <ul>
                        <li className="mb-2">
                            <a
                                href="#"
                                className="text-blue-300 hover:underline"
                            >
                                Kasavanahalli
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-blue-300 hover:underline"
                            >
                                Doddakannelli
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">
                        ARCHIVES
                    </h3>
                    <ul>
                        <li className="mb-2">
                            <a
                                href="#"
                                className="text-blue-300 hover:underline"
                            >
                                March 2020
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="#"
                                className="text-blue-300 hover:underline"
                            >
                                March 2019
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="#"
                                className="text-blue-300 hover:underline"
                            >
                                February 2019
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-blue-300 hover:underline"
                            >
                                March 2018
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
