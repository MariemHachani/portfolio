import { PlayfairDisplay, dancingscript, poppins } from "@/app/fonts/fonts";
import Link from "next/link";
import Card from "../_components/card";





export default function Page() {
    let cards = [
        {
            id: 0,
            lib: "weddings",
            url: "/",
            img: "/jpg/wedding-photoshoot.jpg"
        },
        {
            id: 1,
            lib: "lifestyle",
            url: "/",
            img: "/jpg/lifestyle-photoshoot.jpg"
        },
        {
            id: 2,
            lib: "products",
            url: "/",
            img: "/jpg/product-photoshoot.jpg"
        },
        {
            id: 3,
            lib: "events",
            url: "/",
            img: "/jpg/events-photoshoot.jpg"
        },
    ]
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
                        {cards.map((card) => (
                            <Card key={card.id} lib={card.lib} url={card.url} img={card.img} />
                        ))}
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
