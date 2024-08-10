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
            <section>
                <div>
                    <div className="text-center p-5">
                        <h2 className="text-3xl">Enquiry Form</h2>
                        <p className="mt-2 mb-5">
                            Fill the form for any Queries
                        </p>
                        <form style={{ maxWidth: "600px", margin: "0 auto" }}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: "1rem",
                                }}
                            >
                                <input
                                    className="border border-gray-200"
                                    type="text"
                                    placeholder="Your Name *"
                                    style={{ width: "48%", padding: "0.5rem" }}
                                />
                                <input
                                    className="border border-gray-200"
                                    type="text"
                                    placeholder="Phone Number *"
                                    style={{ width: "48%", padding: "0.5rem" }}
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: "1rem",
                                }}
                            >
                                <input
                                    className="border border-gray-200"
                                    type="email"
                                    placeholder="Your E-mail *"
                                    style={{ width: "48%", padding: "0.5rem" }}
                                />
                                <input
                                    className="border border-gray-200"
                                    type="text"
                                    placeholder="Subject"
                                    style={{ width: "48%", padding: "0.5rem" }}
                                />
                            </div>
                            <div style={{ marginBottom: "1rem" }}>
                                <textarea
                                    className="border border-gray-200"
                                    placeholder="Your Message *"
                                    style={{ width: "100%", padding: "0.5rem" }}
                                    rows="4"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="hover:bg-purple-500 bg-orange-500 text-white border-none pointer p-5"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="container mx-auto flex justify-center items-center py-20">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0744142371386!2d77.6760606!3d12.9029365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae136b681d1aff%3A0x994d339f68434e7d!2sKidzee%20Kasavanahalli!5e0!3m2!1sen!2sin!4v1723465063668!5m2!1sen!2sin"
                    width="1200"
                    height="800"
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
