import { PlayfairDisplay, dancingscript, poppins } from "@/app/fonts/fonts";
import Link from "next/link";
import Card from "../_components/card";
import PageBanner from "../_components/page_banner";
import PortfolioCards from "../_components/portfolio-cards";
import NoImageBanner from "../_components/no_image_banner";

export default function Page() {

    return (
        <div className="flex flex-col ">

            <PageBanner title="My portfolio as a photographer"
                subtitle="My services are aimed at both private and professional clients. Here is an overview of my portfolio."
                imgUrl="/jpg/portfolio-banner.jpg" />

            <div className="mt-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8  flex flex-col items-center">
                <h1 style={PlayfairDisplay.style} className="text-green font-bold text-2xl uppercase">Let&apos;s discover</h1>
                <h2 style={dancingscript.style} className="text-green text-center font-bold text-2xl ">A very deliberate and stylised images for each session type</h2>
                <PortfolioCards />
            </div >
            <NoImageBanner title="Need a photograher?" subtitle="I'm here to help you out! Being part of your project for me would mean dedicating all the ressources needed to fulfill your exectations, to share your values and be fully involved in your event. From weddings, portrait sessions, product commercials to events, with a touch of my own character I will love to showcase your story." />
            
        </div >
    )
}
