"use client"
import { PlayfairDisplay, poppins } from "@/app/fonts/fonts"
import Link from "next/link"
import { useRef } from "react";
import { useIsVisible } from "./utils/element-visibility";

export default function NoImageBanner(params: { title: string, subtitle: string }) {
    const ref1 = useRef<HTMLInputElement>(null);
    const isVisible1 = useIsVisible(ref1);
    return (
        <div ref={ref1} className="bg-lightpink ">
            <div className={`flex flex-col items-center justify-center sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8 
                transition-all  duration-1000 ${isVisible1 ? "  opacity-100 " : "opacity-0 -translate-x-10"}`}>
                <h2 style={PlayfairDisplay.style} className="text-2xl mt-4 md:mt-0 text-green uppercase">{params.title}</h2>
                <p className="text-center pt-4">{params.subtitle}</p>

                <div className={`my-8  delay-1000 duration-1000 transition-all text-center  ${isVisible1 ? " opacity-100 " : "opacity-0  -translate-x-10"}`}>
                    <Link style={poppins.style} href={"/photographer-brussels/contact"}
                        className="py-2 px-2 relative border-2 overflow-hidden font-medium  border-green  text-green  shadow-md transition-all  before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green before:transition-all before:duration-500 hover:text-white  shadow-green-transparent hover:before:left-0 hover:before:w-full rounded-md uppercase"><span className="relative z-10">Get In Touch</span></Link>
                </div>
            </div>
        </div>
    )
}