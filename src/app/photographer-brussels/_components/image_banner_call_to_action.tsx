import { PlayfairDisplay, poppins } from "@/app/fonts/fonts";
import Link from "next/link";
import { useIsVisible } from "./utils/element-visibility";
import { useRef } from "react";
import Image from "next/image";

export default function ImageCallToAction(params: { title: string, subtitle: string, url: string }) {
    const ref1 = useRef<HTMLInputElement>(null);
    const isVisible1 = useIsVisible(ref1);
    return (
        <div ref={ref1} className="flex justify-center overflow-hidden  relative h-96">
            <Image height={500} width={500} className="object-cover w-full h-full blur-sm" src="jpg/family-photoshoot.webp" alt=""></Image>
            <div className="absolute top-0 bg-midpink-extra w-full h-full ">
                <div className={`flex flex-col h-full items-center justify-center sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8 
                transition-all  duration-1000 ${isVisible1 ? "  opacity-100 " : "opacity-0 -translate-x-10"}`}>

                    <h2 style={PlayfairDisplay.style} className=" text-2xl text-white uppercase">{params.title}</h2>
                    <p className="text-center text-white pt-4">{params.subtitle}</p>
                    <div className={`my-8  delay-1000 transition-all duration-1000  text-center ${isVisible1 ? " opacity-100 " : "opacity-0 -translate-x-10"}`}>
                        <Link href={params.url} style={poppins.style}
                            className=" py-2 px-2 relative border-2 overflow-hidden font-medium  border-white  shadow-2xl transition-all  before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white hover:text-midpink before:transition-all before:duration-500 text-white hover:shadow-midpink shadow-midpink hover:before:left-0 hover:before:w-full rounded-md uppercase"><span className="relative z-10">Get In Touch</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}