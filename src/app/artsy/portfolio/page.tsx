import { PlayfairDisplay, dancingscript, poppins } from "@/app/fonts/fonts";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col ">

            <div className="-mt-16 bg-cover bg-fixed bg-center bg-no-repeat" style={{ backgroundImage: "url(/jpg/portfolio-banner.jpg)" }}>
                <div className="  flex flex-col justify-center items-center text-center text-white h-96">
                    <h1 style={PlayfairDisplay.style} className="text-2xl" >My portfolio as a photographer</h1>
                    <h3 style={poppins.style} className="text-sm ">My services are aimed at both private and professional clients. Here is an overview in my portfolio.</h3>
                </div>
            </div>

            <div className="mt-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 md:px-12 py-2 md:py-8  flex flex-col items-center">
                <h1 style={PlayfairDisplay.style} className="text-green font-bold text-2xl uppercase">Let's discover</h1>
                <h2 style={dancingscript.style} className="text-green text-center font-bold text-2xl ">A very deliberate and stylised images for each session type</h2>
                <div style={poppins.style}>
                    <div className="mt-16 flex flex-wrap justify-evenly items-center">
                        <Link href={"/"} className="relative w-80 mx-10 my-8 group">
                            <div className="w-full h-80 bg-midpink-extra absolute  -top-8 -left-4">
                                <span style={PlayfairDisplay.style}
                                    className="absolute text-darkgreen bottom-4 left-2 leading-none rotate-180 [writing-mode:vertical-lr]  text-black inline-blocks uppercase tracking-widest">WEDDINGS</span>
                            </div>
                            <div className="relative left-4">
                                <div className="flex justify-center items-center shadow-md overflow-hidden rounded-tr-[40px] rounded-bl-[40px]">

                                    <img className="w-full h-80 hover:scale-125 saturate-0 hover:saturate-100 ease-in-out duration-500 object-center object-cover relative rounded-tr-[40px] rounded-bl-[40px]"
                                        src="/jpg/wedding-photoshoot.jpg" alt="" />
                                    <h1 style={PlayfairDisplay.style} className="drop-shadow-md absolute m-auto text-2xl text-white translate-y-20 group-hover:translate-y-0 duration-200 group-hover:opacity-100 group-hover:visible opacity-0 invisible">See More</h1>

                                </div>
                            </div>
                        </Link>
                        <div className="relative w-80 mx-10 my-8 group">
                            <div className="w-full h-80  bg-midpink-extra absolute  -top-8 -left-4">
                                <span style={PlayfairDisplay.style}
                                    className="absolute text-darkgreen  bottom-4 left-2 leading-none rotate-180 [writing-mode:vertical-lr]  text-black inline-blocks uppercase tracking-widest">LIFESTYLE</span>
                            </div>
                            <Link href={"/"} className="relative left-4  ">
                                <div className=" flex justify-center items-center  shadow-md overflow-hidden rounded-tr-[40px] rounded-bl-[40px]">

                                    <img className="w-full h-80 hover:scale-125 saturate-0 hover:saturate-100  ease-in-out duration-500 object-center object-cover relative rounded-tr-[40px] rounded-bl-[40px]"
                                        src="/jpg/lifestyle-photoshoot.jpg" alt="" />
                                    <h1 style={PlayfairDisplay.style} className="drop-shadow-md absolute m-auto text-2xl text-white translate-y-20 group-hover:translate-y-0 duration-200 group-hover:opacity-100 group-hover:visible opacity-0 invisible">See More</h1>

                                </div>
                            </Link>
                        </div>
                        <Link href={"/"} className="relative w-80 mx-10 my-8 group">
                            <div className="w-full h-80  bg-midpink-extra absolute  -top-8 -left-4">
                                <span style={PlayfairDisplay.style}
                                    className="absolute text-darkgreen bottom-4 left-2 leading-none rotate-180 [writing-mode:vertical-lr]  text-black inline-blocks uppercase tracking-widest">PRODUCTS</span>
                            </div>
                            <div className="relative left-4">
                                <div className="flex justify-center items-center shadow-md overflow-hidden rounded-tr-[40px] rounded-bl-[40px]">

                                    <img className="w-full h-80 hover:scale-125 saturate-0 hover:saturate-100 ease-in-out duration-500 object-center object-cover relative rounded-tr-[40px] rounded-bl-[40px]"
                                        src="/jpg/product-photoshoot.jpg" alt="" />
                                    <h1 style={PlayfairDisplay.style} className="drop-shadow-md absolute m-auto text-2xl text-white translate-y-20 group-hover:translate-y-0 duration-200 group-hover:opacity-100 group-hover:visible opacity-0 invisible">See More</h1>

                                </div>
                            </div>
                        </Link>
                        <Link href={"/"} className="relative w-80 mx-10 my-8 group">
                            <div className="w-full h-80  bg-midpink-extra absolute  -top-8 -left-4">
                                <span style={PlayfairDisplay.style}
                                    className="absolute text-darkgreen bottom-4 left-2 leading-none rotate-180 [writing-mode:vertical-lr]  text-black inline-blocks uppercase tracking-widest">EVENTS</span>
                            </div>
                            <div className="relative left-4">
                                <div className="flex justify-center items-center shadow-md overflow-hidden rounded-tr-[40px] rounded-bl-[40px]">
                                    <img className="w-full h-80 hover:scale-125 saturate-0 hover:saturate-100 ease-in-out duration-500 object-center object-cover relative rounded-tr-[40px] rounded-bl-[40px]"
                                        src="/jpg/events-photoshoot.jpg" alt="" />
                                    <h1 style={PlayfairDisplay.style} className="drop-shadow-md absolute m-auto text-2xl text-white translate-y-20 group-hover:translate-y-0 duration-200 group-hover:opacity-100 group-hover:visible opacity-0 invisible">See More</h1>

                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div >
            <div className="bg-lightpink ">
                <div className=" flex flex-col items-center justify-center sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 md:px-12 py-2 md:py-8 ">
                    <h2 style={PlayfairDisplay.style} className="text-2xl text-green uppercase">Need a photograher?</h2>
                    <p className="text-center pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolore quo soluta ullam earum maiores ipsa ad voluptates tempora incidunt! Ut pariatur labore commodi delectus corrupti molestias optio tenetur beatae?</p>
                    <button style={poppins.style} className="mt-4 py-2 px-2 text-sm bg-green text-white rounded-md uppercase">Get in touch</button>
                </div>
            </div>
        </div >
    )
}
