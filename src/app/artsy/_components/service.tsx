import { PlayfairDisplay, poppins } from "@/app/fonts/fonts";

export default function Services() {
    return (
        <div className=" flex flex-col items-center justify-center sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 md:px-12 py-2 md:py-8 ">
            <h2 style={PlayfairDisplay.style} className="text-2xl text-green uppercase">My services</h2>
            <div className="flex py-8 -z-10 ">
                <div className="flex-1 relative mr-2 flex">
                    <img className="object-cover h-full w-full" src="/jpg/shooting.jpg" alt="event-photograhy"></img>
                    <div style={poppins.style} className="absolute bottom-0 py-6 bg-midpink-transparent text-center w-full ">
                        <p className="text-white uppercase font-bold text-2xl py-2">Shooting</p>
                        <button className=" w-fit border-solid border-white border-2 py-2 px-4 text-xl  text-white hover:bg-midpink rounded-md uppercase">Get in touch</button>
                    </div>
                </div>
                <div className="flex-1 relative ml-2 flex ">
                    <img className="object-cover h-full w-full" src="/jpg/editing.jpg" alt="event-photograhy"></img>
                    <div style={poppins.style} className="absolute bottom-0 py-6 bg-midpink-transparent text-center w-full ">
                        <p className="text-white uppercase font-bold text-2xl py-2">Editing</p>
                        <button className="w-fit  border-solid border-white border-2 py-2 px-4 text-xl  text-white hover:bg-midpink  rounded-md uppercase">Get in touch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}