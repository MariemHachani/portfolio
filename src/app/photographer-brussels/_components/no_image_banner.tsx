import { PlayfairDisplay, poppins } from "@/app/fonts/fonts"
import Link from "next/link"

export default function NoImageBanner(params: { title: string, subtitle: string }) {
    return (
        <div className="bg-lightpink ">
            <div className="flex flex-col items-center justify-center sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8 ">
                <h2 style={PlayfairDisplay.style} className="text-2xl text-green uppercase">{params.title}</h2>
                <p className="text-center pt-4">{params.subtitle}</p>
                <Link style={poppins.style} href={"/photographer-brussels/contact"}
                    className="my-8 py-2 px-2 relative border-2 overflow-hidden font-medium  border-green text-green  shadow-md transition-all  before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green before:transition-all before:duration-500 hover:text-white  shadow-green-transparent hover:before:left-0 hover:before:w-full rounded-md uppercase"><span className="relative z-10">Get In Touch</span></Link>
            </div>
        </div>
    )
}