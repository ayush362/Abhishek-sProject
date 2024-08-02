import React from "react";

const page = () => {
    return (
        <>
            {/* Contact us */}
            <section className="bgOne py-20">
                <p className="text-center text-6xl text-white text-bold">
                    Contact Us
                </p>
            </section>
            {/* Form */}
            <section className="container mx-auto py-16 px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-purple-900">
                        We Would Love To Hear From You
                    </h2>
                    <div className="flex justify-center mt-2">
                        <div className="border-t-4 border-orange-500 w-20"></div>
                    </div>
                </div>

                <div className="flex justify-between">
                    {/* Left Side - Form */}
                    <div className="w-1/2 pr-8">
                        <p className="text-gray-700 mb-8">
                            We are now accepting admissions for students across
                            ages (starting from 6 months). We conduct regular
                            in-house events and information sessions. Please
                            submit the form to help us keep you posted. We are
                            also keen to partner with young and mid-career
                            professionals interested in exploring a new career
                            in teaching.
                        </p>
                        <form>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-600"
                                    htmlFor="name"
                                >
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-1"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-600"
                                    htmlFor="email"
                                >
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-1"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-600"
                                    htmlFor="message"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-1 h-32"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side - Contact Information */}
                    <div className="w-1/3 bg-purple-100 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">
                            Contact Information
                        </h3>
                        <div className="mb-4">
                            <h4 className="text-purple-900 font-semibold">
                                Email Us :
                            </h4>
                            <p className="text-gray-700">
                                info01@elementskids.com
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-purple-900 font-semibold">
                                Call Us :
                            </h4>
                            <p className="text-gray-700">099028 74928</p>
                        </div>
                        <div>
                            <h4 className="text-purple-900 font-semibold">
                                Map:
                            </h4>
                            <a
                                href="#"
                                className="text-orange-500 hover:underline"
                            >
                                View Map
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto flex justify-center items-center py-20">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124367.10064066313!2d77.51924425928952!3d13.069251869694387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae21be4ad63a55%3A0x1008adb771c3d236!2sPresidency%20University!5e0!3m2!1sen!2sin!4v1722603747107!5m2!1sen!2sin"
                    width="1200"
                    height="450"
                    // style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </>
    );
};

export default page;
