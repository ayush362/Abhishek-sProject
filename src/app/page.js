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
import Image from "next/image";
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
            {/* 1.Finished */}
            {/* Image slider Section of the Home page */}
            <section>
                <div className="slide-container">
                    <Fade>
                        {fadeImages.map((fadeImage, index) => (
                            <div key={index}>
                                <Image
                                    height={600}
                                    width={1000}
                                    style={{ width: "100%", height: 600 }}
                                    src={fadeImage.url}
                                    alt="image"
                                />
                                {/* <h2>{fadeImage.caption}</h2> */}
                            </div>
                        ))}
                    </Fade>
                </div>
            </section>
            {/* 2.Finished */}
            {/* Learn More Section */}
            {/* <section className="bgOne text-white py-20 px-5">
                <div className="container mx-auto flex flex-col md:flex-row justify-center gap-10 items-center">
                    <div className="md:w-2/3">
                        <p className="text-4xl">
                            Consistently among Top Preschools in India since
                            2015 Outstanding Educator in Early Years in India -
                            Dec 2020
                        </p>
                    </div>
                    <div className="md:w-1/3">
                        <a
                            href="#"
                            className="border-white border-2 p-5 hover:bg-white  hover:text-black"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section> */}
            {/* 3.completed */}
            {/* Elements kids section */}
            {/* <section className="container mx-auto py-10">
                <h2 className="text-center text-5xl">
                    Welcome to Elements Kids
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-10 py-10 px-5">
                    <div className="slide-container md:w-1/3">
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
                    <div className="slide-container md:w-1/3">
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
            </section> */}
            {/* 4.completed */}
            {/* <section className="bgOne p-5">
                <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
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
            </section> */}
            {/* 5.completed */}
            {/* Enquiry Form */}
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
            {/* 6.completed */}
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
                                    className={`rounded-full bg-orange-500 text-white py-3 px-6 inline-block mb-4`}
                                >
                                    {program.title}
                                </div>
                                <div
                                    className={`text-4xl bg-orange-500  mb-2 w-20 rounded-full h-20 flex justify-center items-center`}
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
            {/* 7.completed */}
            {/* Philosophy section */}
            <section className="container mx-auto py-10 px-5">
                <h2 className="text-center text-5xl text-purple-800 mb-10">
                    Kidzee Kasavanahalli’s Philosophy
                </h2>
                <div className="flex flex-col md:flex-row justify-around items-start md:items-center gap-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center mb-4 text-2xl">
                            🕒
                        </div>
                        <h3 className="text-xl font-semibold text-purple-800 mb-2">
                            Widely spread preschool chain in India.
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
                            Focus on What is Right for the Child
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
                            Integrated Curriculum
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
            {/* 8.Completed */}
            {/* Offered Programs */}
            <section className="container mx-auto p-6">
                <div>
                    <h3 className="text-[#56509f] text-3xl sm:text-6xl text-center my-5 ">
                        Programs Offered
                    </h3>
                    <p className="text-center text-gray-400 my-5">
                        We have dedicated programs which cater to the learning
                        and care needs of children in the age group of 6 months
                        to 12 years
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Pre-Montessori Card */}
                        <div className="bg-[#56509f] rounded-lg shadow-lg text-white flex flex-col md:flex-row py-10 pl-5 max-w-[600px]">
                            <div className="md:w-1/2 mx-10">
                                <h4>Pre-Montessori</h4>
                                <p className="text-gray-400">
                                    (Equivalent to laygroup)
                                </p>
                                <div className="flex py-5">
                                    <div className="border-r-2 border-gray-400 pr-5 mr-5">
                                        <h4>12</h4>
                                        <p className="text-gray-400">
                                            Class Size
                                        </p>
                                        <h4>6 - 8</h4>
                                        <p className="text-gray-400">
                                            Covid Class Size
                                        </p>
                                    </div>
                                    <div>
                                        <h4>1.5 - 3</h4>
                                        <p className="text-gray-400">
                                            Years Olds
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <img src="/logo.jpg" alt="photo" />
                                <div className="flex justify-end items-end">
                                    <a
                                        href="#"
                                        className="bg-orange-500 py-4 px-3"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#56509f] rounded-lg shadow-lg text-white flex flex-col md:flex-row py-10 pl-5 max-w-[600px]">
                            <div className="md:w-1/2 mx-10">
                                <h4>Pre-Montessori</h4>
                                <p className="text-gray-400">
                                    (Equivalent to laygroup)
                                </p>
                                <div className="flex py-5">
                                    <div className="border-r-2 border-gray-400 pr-5 mr-5">
                                        <h4>12</h4>
                                        <p className="text-gray-400">
                                            Class Size
                                        </p>
                                        <h4>6 - 8</h4>
                                        <p className="text-gray-400">
                                            Covid Class Size
                                        </p>
                                    </div>
                                    <div>
                                        <h4>1.5 - 3</h4>
                                        <p className="text-gray-400">
                                            Years Olds
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <img src="/logo.jpg" alt="photo" />
                                <div className="flex justify-end items-end">
                                    <a
                                        href="#"
                                        className="bg-orange-500 py-4 px-3"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="bg-[#56509f] rounded-lg shadow-lg text-white flex flex-col md:flex-row py-10 pl-5 max-w-[600px]">
                            <div className="md:w-1/2 mx-10">
                                <h4>Pre-Montessori</h4>
                                <p className="text-gray-400">
                                    (Equivalent to laygroup)
                                </p>
                                <div className="flex py-5">
                                    <div className="border-r-2 border-gray-400 pr-5 mr-5">
                                        <h4>12</h4>
                                        <p className="text-gray-400">
                                            Class Size
                                        </p>
                                        <h4>6 - 8</h4>
                                        <p className="text-gray-400">
                                            Covid Class Size
                                        </p>
                                    </div>
                                    <div>
                                        <h4>1.5 - 3</h4>
                                        <p className="text-gray-400">
                                            Years Olds
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <img src="/logo.jpg" alt="photo" />
                                <div className="flex justify-end items-end">
                                    <a
                                        href="#"
                                        className="bg-orange-500 py-4 px-3"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="bg-[#56509f] rounded-lg shadow-lg text-white flex flex-col md:flex-row py-10 pl-5 max-w-[600px]">
                            <div className="md:w-1/2 mx-10">
                                <h4>Pre-Montessori</h4>
                                <p className="text-gray-400">
                                    (Equivalent to laygroup)
                                </p>
                                <div className="flex py-5">
                                    <div className="border-r-2 border-gray-400 pr-5 mr-5">
                                        <h4>12</h4>
                                        <p className="text-gray-400">
                                            Class Size
                                        </p>
                                        <h4>6 - 8</h4>
                                        <p className="text-gray-400">
                                            Covid Class Size
                                        </p>
                                    </div>
                                    <div>
                                        <h4>1.5 - 3</h4>
                                        <p className="text-gray-400">
                                            Years Olds
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <img src="/logo.jpg" alt="photo" />
                                <div className="flex justify-end items-end">
                                    <a
                                        href="#"
                                        className="bg-orange-500 py-4 px-3"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="bg-[#56509f] col-span-2 rounded-lg shadow-lg text-white flex flex-col md:flex-row py-10 pl-5">
                            <div className="md:w-1/2 mx-10">
                                <h4>Pre-Montessori</h4>
                                <p className="text-gray-400">
                                    (Equivalent to laygroup)
                                </p>
                                <div className="flex py-5">
                                    <div className="border-r-2 border-gray-400 pr-5 mr-5">
                                        <h4>12</h4>
                                        <p className="text-gray-400">
                                            Class Size
                                        </p>
                                        <h4>6 - 8</h4>
                                        <p className="text-gray-400">
                                            Covid Class Size
                                        </p>
                                    </div>
                                    <div>
                                        <h4>1.5 - 3</h4>
                                        <p className="text-gray-400">
                                            Years Olds
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex flex-col justify-end items-end">
                                <img src="/logo.jpg" alt="photo" />
                                <div className="flex justify-end items-end">
                                    <a
                                        href="#"
                                        className="bg-orange-500 py-4 px-3"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9.completed */}
            {/* Tick mark section */}
            <section className="bg-gray-50 p-10">
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

            {/* 10.completed */}
            {/* Contact Us */}
            <section className="bg-gray-50 py-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-purple-600">
                            Bulletin Board
                        </h2>
                        <h3 className="text-2xl font-light text-purple-500 mt-4">
                            Contact Us
                        </h3>
                        <p className="text-base text-gray-400 mt-2">
                            (A unit of Elements Educare Private Limited)
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-10 mb-12">
                        {contactDetails.map((detail, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg space-y-4"
                            >
                                <div className="flex items-center justify-center lg:justify-start mb-2">
                                    {detail.icon}
                                    <h4 className="ml-4 text-2xl font-semibold text-purple-600">
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
                                        href={detail.map}
                                        className="text-purple-500 underline"
                                    >
                                        {detail.map}
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {hoursDetails.map((detail, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4"
                            >
                                <div className="flex items-center justify-center mb-2">
                                    {detail.icon}
                                    <h4 className="ml-4 text-2xl font-semibold text-purple-600">
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
        </>
    );
}
