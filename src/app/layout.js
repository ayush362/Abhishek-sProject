import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Footer from "./components/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Kidzee kasavanahalli",
    description: "Kidzee Kasavanahalli is a preschool in Bangalore, India.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/logo.png" />
            </Head>
            <body className={inter.className}>
                <Navbar />
                {children}
                <About />
                <Footer />
            </body>
        </html>
    );
}
