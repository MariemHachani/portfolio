import { PlayfairDisplay, poppins } from "@/app/fonts/fonts";
import Image from "next/image";

interface StyleBannerProps {
    imgUrl: string;
    title: string;
}

export default function PhotoStyleBanner(details: StyleBannerProps) {
    return (

        <div className="relative -mt-16 w-full h-96" style={{
            clipPath: 'inset(0 0 0 0)',
        }} >
            <div className="fixed h-full w-full top-0 left-0 ">
                <Image priority style={{ backgroundPosition: "center", marginTop: "-100px", objectFit: "cover" }} fill alt="page_banner" src={details.imgUrl}></Image>
            </div>
            <div className=" flex flex-col justify-center items-center text-center text-white h-96">
                <h3 style={poppins.style} className="text-lg drop-shadow-lg	" >Take a look in my portfolio</h3>
                <h1 style={PlayfairDisplay.style} className="text-2xl drop-shadow-lg	">{details.title}</h1>
            </div>
        </div>

    )
}