import { PlayfairDisplay, dancingscript, poppins } from "@/app/fonts/fonts";
import Link from "next/link";
import Card from "../_components/card";
import PageBanner from "../_components/page_banner";
import PortfolioCards from "../_components/portfolio-cards";

export default function Page() {

    return (
        <div className="flex flex-col ">

            <PageBanner title="My portfolio as a photographer"
                subtitle="My services are aimed at both private and professional clients. Here is an overview in my portfolio."
                imgUrl="/jpg/portfolio-banner.jpg" />

            <div className="mt-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8  flex flex-col items-center">
                <h1 style={PlayfairDisplay.style} className="text-green font-bold text-2xl uppercase">Let's discover</h1>
                <h2 style={dancingscript.style} className="text-green text-center font-bold text-2xl ">A very deliberate and stylised images for each session type</h2>
                <PortfolioCards />
            </div >
            <div className="bg-lightpink ">
                <div className=" flex flex-col items-center justify-center sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8 ">
                    <h2 style={PlayfairDisplay.style} className="text-2xl text-green uppercase">Need a photograher?</h2>
                    <p className="text-center pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolore quo soluta ullam earum maiores ipsa ad voluptates tempora incidunt! Ut pariatur labore commodi delectus corrupti molestias optio tenetur beatae?</p>
                    <button style={poppins.style} className="mt-4 py-2 px-2 text-sm bg-green text-white rounded-md uppercase">Get in touch</button>
                </div>
            </div>
        </div >
    )
}
