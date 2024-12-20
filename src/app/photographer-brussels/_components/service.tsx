import { PlayfairDisplay, poppins } from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
    return (
        <div className=" flex flex-col items-center justify-center sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8 ">
            <h2 style={PlayfairDisplay.style} className="text-2xl text-green uppercase">My services</h2>
            <div className="flex py-8 flex-col md:flex-row ">
                <div className="flex-1 relative my-2 md:mr-2 flex">
                    <Image height={500} width={500} className="object-cover h-96 w-full" src="jpg/shooting.webp" alt="event-photograhy"></Image>
                    <div style={poppins.style} className="absolute bottom-0 pt-4  bg-midpink-extra text-center w-full ">
                        {/*<div style={poppins.style} className="absolute bottom-0 pt-4 pb-8 bg-midpink-extra text-center w-full ">*/}
                        <p className="text-white uppercase font-bold text-xl pb-4">Shooting</p>
                        {/* <Link href="/photographer-brussels/services/photoshoots"
                            className="my-8 py-2 px-2 relative border-2 overflow-hidden font-medium  text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500  hover:text-green hover:before:left-0 hover:border-white hover:before:w-full rounded-md uppercase"><span className="relative z-10">See More</span></Link> */}
                    </div>
                </div>
                <div className="flex-1 relative my-2 md:ml-2 flex ">
                    <Image height={500} width={500} className="object-cover h-96 w-full" src="jpg/editing.webp" alt="event-photograhy"></Image>
                    <div style={poppins.style} className="absolute bottom-0 pt-4  bg-midpink-extra text-center w-full ">
                        <p className="text-white uppercase font-bold text-xl pb-4">Editing</p>
                        {/* <Link href="/photographer-brussels/services/editing"
                            className="my-8 py-2 px-2 relative border-2 overflow-hidden font-medium  text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500  hover:text-green hover:before:left-0 hover:border-white hover:before:w-full rounded-md uppercase"><span className="relative z-10">See More</span></Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}