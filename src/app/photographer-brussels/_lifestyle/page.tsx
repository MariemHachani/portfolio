import { PlayfairDisplay, poppins } from "@/app/fonts/fonts";
import Link from "next/link";
import { useIsVisible } from "../_components/utils/element-visibility";
import { useRef } from "react";

export default function Lifestyle() {
    const ref1 = useRef<HTMLInputElement>(null);
    const isVisible1 = useIsVisible(ref1);
    return (
        <div ref={ref1} className={`flex flex-col md:flex-row my-2 py-4 h-fit transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            <div className="flex-1 h-96">
                <img className="object-cover h-full w-full" src="/jpg/lifestyle-photoshoot.jpg" alt="lifestyle-photograhy"></img>
            </div>
            <div className="flex-1">
                <div className="md:pl-16 mt-4 md:mt-0">
                    <h1 style={PlayfairDisplay.style} className="font-bold text-2xl text-midpink">Lifestyle Photography</h1>
                    <p style={poppins.style} className="my-8 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur asperiores optio est voluptates expedita sint minus dolore qui, sed cum laboriosam, ratione temporibus? Necessitatibus eveniet natus nihil dolore accusamus quia.</p>
                    <Link href={"/photographer-brussels/portfolio/lifestyle-photography"}
                        className="my-8 py-2 px-2 relative border-2 overflow-hidden font-medium  border-midpink text-midpink  shadow-2xl transition-all  before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-midpink before:transition-all before:duration-500 hover:text-white hover:shadow-midpink shadow-midpink hover:before:left-0 hover:before:w-full rounded-md uppercase"><span className="relative z-10">See More</span></Link>
                </div>
            </div>
        </div>
    )

};
