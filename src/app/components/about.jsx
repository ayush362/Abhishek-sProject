import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold leading-tight">
                        About Kidzee Kasavanahalli
                    </h2>
                    <p className="text-lg mt-4 max-w-lg mx-auto">
                        Explore our mission, locations, and historical
                        milestones.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:center gap-10">
                    <div className="flex-1 bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                        <div className="mb-6">
                            <h3 className="text-3xl font-semibold text-purple-700 mb-4">
                                Our Mission
                            </h3>
                            <p className="text-lg leading-relaxed">
                                We are committed to instilling skills,
                                knowledge, and values in our children in order
                                to give them an inner voice for the twenty-first
                                century. Our learning environment allows each
                                child to nurture the learning minds namely the
                                Focused Mind, Analytical Mind, Inventive Mind,
                                Empathetic Mind, and Conscientious Mind.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/logo.png"
                                alt="Kidzee Kasavanahalli Kids Logo"
                                width={300}
                                height={150}
                                className="rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
