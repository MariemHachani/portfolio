import { PlayfairDisplay, poppins } from "@/app/fonts/fonts";
import Link from "next/link";
import { useRef } from "react";
import { useIsVisible } from "../_components/utils/element-visibility";
import Image from "next/image";

export default function Wedding() {
    const ref1 = useRef<HTMLInputElement>(null);
    const isVisible1 = useIsVisible(ref1);
    return (
        <div ref={ref1} className={`flex flex-col md:flex-row my-2 py-4 h-fit transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            <div className="flex-1 ">
                <div className="md:pr-16 mt-4 md:mt-0">
                    <h1 style={PlayfairDisplay.style} className="font-bold text-2xl text-midpink">Wedding Photography</h1>
                    <p style={poppins.style} className="my-8  text-justify">Your special day deserves special care and attention to details. I will be doing all what&apos;s needed to capture the magic moments of one of the happiest days of your life. <br /><br />
                        The details are as important for me as the big steps in your wedding timeline, from accessories to decoration and family interactions to your first look and ceremony. <br /> I offer you a way to relive your special day&apos;s memories with the same feelings for years after.</p>
                    <Link href={"/photographer-brussels/portfolio/wedding-photography"}
                        className="my-8 py-2 px-2 relative border-2 overflow-hidden font-medium  border-midpink text-midpink  shadow-2xl transition-all  before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-midpink before:transition-all before:duration-500 hover:text-white hover:shadow-midpink shadow-midpink hover:before:left-0 hover:before:w-full rounded-md uppercase"><span className="relative z-10">See More</span></Link>

                </div>
            </div>
            <div className="flex-1 h-96 order-first md:order-last">
                <Image height={500} width={500} className="object-cover h-full w-full" src="jpg/wedding-photoshoot2.jpg" alt=""></Image>
            </div>
        </div>
    )

};
