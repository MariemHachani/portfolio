import { PlayfairDisplay, poppins } from "@/app/fonts/fonts";
import Link from "next/link";

export default function ImageCallToAction(params: { title: string, subtitle: string, url: string }) {
    return (
        <div className="flex justify-center overflow-hidden  relative h-96">
            <img className="object-cover w-full h-full blur-sm" src="/jpg/family-photoshoot.jpg" alt=""></img>
            <div className="absolute top-0 bg-midpink-extra w-full h-full ">
                <div className="flex flex-col h-full items-center justify-center sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8 ">
                    <h2 style={PlayfairDisplay.style} className=" text-2xl text-white uppercase">{params.title}</h2>
                    <p className="text-center text-white pt-4">{params.subtitle}</p>
                    <Link href={params.url} style={poppins.style}
                        className="my-8 py-2 px-2 relative border-2 overflow-hidden font-medium  border-white  shadow-2xl transition-all  before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-midpink before:transition-all before:duration-500 text-white hover:shadow-midpink shadow-midpink hover:before:left-0 hover:before:w-full rounded-md uppercase"><span className="relative z-10">See More</span></Link>
                </div>
            </div>
        </div>
    )
}