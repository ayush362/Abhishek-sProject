"use client";
import React from "react";
import { Fade } from "react-slideshow-image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "react-slideshow-image/dist/styles.css";
import { contactDetails } from "@/data/contactDetails";
import { slideImages } from "@/data/slideImages";
import { fadeImages } from "@/data/fadeImages";
import { programs } from "@/data/programs";
import { features } from "@/data/features";
import { hoursDetails } from "@/data/hoursDetails";
const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
};

export default function Home() {
    return (
        <>
            {/* Image slider Section of the Home page */}
            <section>
                <div className="slide-container">
                    <Fade>
                        {fadeImages.map((fadeImage, index) => (
                            <div key={index}>
                                <img
                                    style={{ width: "100%", height: 500 }}
                                    src={fadeImage.url}
                                />
                                {/* <h2>{fadeImage.caption}</h2> */}
                            </div>
                        ))}
                    </Fade>
                </div>
            </section>

            {/* Learn More Section */}
            <section className="bgOne text-white py-20">
                <div className="container mx-auto flex justify-center items-center">
                    <div className="w-2/3">
                        <p className="text-4xl">
                            Consistently among Top Preschools in India since
                            2015 Outstanding Educator in Early Years in India -
                            Dec 2020
                        </p>
                    </div>
                    <div className="w-1/3">
                        <a
                            href="#"
                            className="border-white border-2 p-5 hover:bg-white  hover:text-black"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* Elements kids section */}
            <section className="container mx-auto py-10">
                <h2 className="text-center text-5xl">
                    Welcome to Elements Kids
                </h2>
                <div className="flex justify-center gap-10 py-10">
                    <div className="slide-container w-1/3">
                        <h2 className="text-center mb-5">Kasavahalli Center</h2>
                        <div className="flex gap-5 justify-center items-center mb-5">
                            <a
                                href="#"
                                className="bg-orange-600 text-white hover:bg-purple-700 rounded-2xl py-1 px-2"
                            >
                                SEE MAP{" "}
                            </a>
                            <a
                                href="#"
                                className="bg-orange-600 text-white hover:bg-purple-700 rounded-2xl py-1 px-2"
                            >
                                VIRTUAL TOUR
                            </a>
                        </div>
                        <Slide>
                            {slideImages.map((slideImage, index) => (
                                <div key={index}>
                                    <div
                                        style={{
                                            ...divStyle,
                                            backgroundImage: `url(${slideImage.url})`,
                                        }}
                                        className="rounded-2xl"
                                    ></div>
                                </div>
                            ))}
                        </Slide>
                    </div>
                    <div className="slide-container w-1/3">
                        <h2 className="text-center mb-5">
                            Doddakanneli Center
                        </h2>
                        <div className="flex gap-5 justify-center items-center mb-5">
                            <a
                                href="#"
                                className="bg-orange-600 text-white hover:bg-purple-700 rounded-2xl py-1 px-2"
                            >
                                SEE MAP{" "}
                            </a>
                            <a
                                href="#"
                                className="bg-orange-600 text-white hover:bg-purple-700 rounded-2xl py-1 px-2"
                            >
                                VIRTUAL TOUR
                            </a>
                        </div>
                        <Slide>
                            {slideImages.map((slideImage, index) => (
                                <div key={index}>
                                    <div
                                        style={{
                                            ...divStyle,
                                            backgroundImage: `url(${slideImage.url})`,
                                        }}
                                        className="rounded-2xl"
                                    ></div>
                                </div>
                            ))}
                        </Slide>
                    </div>
                </div>
            </section>

            <section className="bgOne py-5">
                <div className="flex gap-5 justify-center items-center">
                    <a
                        href="#"
                        className="text-white bg-orange-600 hover:bg-purple-500 py-5 px-3"
                    >
                        BOOK VIRTUAL/CAMPUS APPOINTMENT
                    </a>
                    <a
                        href="#"
                        className="text-white bg-orange-600 hover:bg-purple-500 py-5 px-3"
                    >
                        BOOK VIRTUAL/CAMPUS APPOINTMENT
                    </a>
                </div>
            </section>

            {/* Enquiry Form */}
            <section>
                <div>
                    <div className="text-center py-5">
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

            {/* Our Programs */}
            <section className="container mx-auto">
                <div className="text-center py-12 bg-white">
                    <h2 className="text-4xl font-bold text-gray-700">
                        Our Programs
                    </h2>
                    <div className="flex flex-wrap justify-center mt-8">
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                className="w-full md:w-1/4 p-4 flex flex-col justify-center items-center gap-4"
                            >
                                <div
                                    className={`rounded-full ${program.color} text-white py-3 px-6 inline-block mb-4`}
                                >
                                    {program.title}
                                </div>
                                <div
                                    className={`text-4xl ${program.color}  mb-2 w-20 rounded-full h-20 flex justify-center items-center`}
                                >
                                    {program.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                    {program.description}
                                </h3>
                                <p className="text-gray-500">
                                    {program.details}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy section */}
            <section className="container mx-auto py-10">
                <h2 className="text-center text-5xl text-purple-800 mb-10">
                    Elements Kids' Philosophy
                </h2>
                <div className="flex flex-col md:flex-row justify-around items-start md:items-center gap-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center mb-4 text-2xl">
                            🕒
                        </div>
                        <h3 className="text-xl font-semibold text-purple-800 mb-2">
                            Self-Respect
                        </h3>
                        <p className="text-gray-700">
                            Throughout the various sessions in the classroom the
                            children are treated with respect and understanding,
                            which goes a long way in developing the required
                            self confidence to negotiate oneself in life
                            situations and in social and peer interactions.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center mb-4 text-2xl">
                            📚
                        </div>
                        <h3 className="text-xl font-semibold text-purple-800 mb-2">
                            Growth Oriented Environment
                        </h3>
                        <p className="text-gray-700">
                            Children at Elements Kids follow a regimen which
                            inculcates discipline in them while at the same time
                            providing them with enough freedom of imagination
                            and expression; freedom which is within the
                            boundaries of discipline.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center mb-4 text-2xl">
                            🧠
                        </div>
                        <h3 className="text-xl font-semibold text-purple-800 mb-2">
                            Emotional Intelligence
                        </h3>
                        <p className="text-gray-700">
                            Interactions across Pre-School, Day Care & Activity
                            Club focus on developing emotionally intelligent
                            children with the skill to identify, assess and
                            control emotions of oneself, of others and of
                            groups. It encompasses self-awareness,
                            self-management, social awareness and relationship
                            management.
                        </p>
                    </div>
                </div>
            </section>

            {/* Designing is left */}
            {/* Offered Programs */}
            <section className="container mx-auto">
                <div>
                    <h3>Programs Offered</h3>
                    <p>
                        We have dedicated programs which cater to the learning
                        and care needs of children in the age group of 6 months
                        to 12 years
                    </p>
                    <div className="grid grid-cols-2">
                        <div className="bg-purple-500 flex justify-between">
                            <div>
                                <h3>Pre-Montessori</h3>
                                <p>(Equivalent to playgroup)</p>
                                <div>
                                    <div>
                                        <span>12</span>
                                        <span>Class Size</span>
                                        <span>6-8</span>
                                        <span>Covid Class</span>
                                        <span>Size</span>
                                    </div>
                                    <div>
                                        <span>1.5 - 3</span>
                                        <span>Years Old</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="./logo.jpg" alt="" />
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tick mark section */}
            <section className="bg-gray-50 py-10">
                <div className="container mx-auto flex flex-col justify-center items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {features
                            .slice(0, Math.ceil(features.length / 2))
                            .map((feature, index) => (
                                <div key={index} className="space-y-4">
                                    <div className="flex items-start">
                                        <svg
                                            className="h-6 w-6 text-orange-500 border border-orange-500 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        <span className="text-gray-700">
                                            {feature}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        {features
                            .slice(Math.ceil(features.length / 2))
                            .map((feature, index) => (
                                <div
                                    key={index + Math.ceil(features.length / 2)}
                                    className="space-y-4"
                                >
                                    <div className="flex items-start">
                                        <svg
                                            className="h-6 w-6 text-orange-500 border border-orange-500 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        <span className="text-gray-700">
                                            {feature}
                                        </span>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Contact Us */}
            <section className="bg-gray-50 py-10">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-purple-600">
                        Bulletin Board
                    </h2>
                    <h3 className="text-xl font-light text-purple-500 mt-4">
                        Contact Us
                    </h3>
                    <p className="text-sm text-gray-400 mb-10">
                        (A unit of Elements Educare Private Limited)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                        {contactDetails.map((detail, index) => (
                            <div key={index} className="space-y-2 text-left">
                                <div className="flex items-center justify-center md:justify-start mb-2">
                                    {detail.icon}
                                    <h4 className="ml-2 text-xl font-semibold text-purple-600">
                                        {detail.title}
                                    </h4>
                                </div>
                                <p className="text-gray-700">
                                    {detail.address}
                                </p>
                                <p className="text-gray-700">
                                    Email:{" "}
                                    <a
                                        href={`mailto:${detail.email}`}
                                        className="text-purple-500 underline"
                                    >
                                        {detail.email}
                                    </a>
                                </p>
                                <p className="text-gray-700">
                                    Phone:{" "}
                                    <a
                                        href={`tel:${detail.phone}`}
                                        className="text-purple-500 underline"
                                    >
                                        {detail.phone}
                                    </a>
                                </p>
                                <p className="text-gray-700">
                                    Map:{" "}
                                    <a
                                        href="#"
                                        className="text-purple-500 underline"
                                    >
                                        {detail.map}
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                        {hoursDetails.map((detail, index) => (
                            <div key={index} className="space-y-2 text-center">
                                <div className="flex items-center justify-center mb-2">
                                    {detail.icon}
                                    <h4 className="ml-2 text-xl font-semibold text-purple-600">
                                        {detail.title}
                                    </h4>
                                </div>
                                <p className="text-gray-700 whitespace-pre-line">
                                    {detail.details}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
        </>
    );
}
