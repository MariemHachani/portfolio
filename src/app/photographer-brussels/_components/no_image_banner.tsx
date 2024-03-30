import { PlayfairDisplay, poppins } from "@/app/fonts/fonts"
import Link from "next/link"

export default function NoImageBanner(params: { title: string, subtitle: string }) {
    return (
        <div className="bg-lightpink ">
            <div className="flex flex-col items-center justify-center sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8 ">
                <h2 style={PlayfairDisplay.style} className="text-2xl text-green uppercase">{params.title}</h2>
                <p className="text-center pt-4">{params.subtitle}</p>
                <Link style={poppins.style} href={"/photographer-brussels/contact"} className="mt-4 py-2 px-2 text-sm bg-green text-white rounded-md uppercase">Get in touch</Link>
            </div>
        </div>
    )
}