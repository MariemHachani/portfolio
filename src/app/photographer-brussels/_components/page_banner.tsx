import { PlayfairDisplay, poppins } from "@/app/fonts/fonts";
import Image from "next/image";

interface BannerProps {
  imgUrl: string;
  title: string;
  subtitle: string;
}

export default function PageBanner(details: BannerProps) {
  return (

    <div className="relative -mt-16 w-full h-96" style={{
      clipPath: 'inset(0 0 0 0)',
    }} >
      <div className="fixed h-full w-full top-0 left-0 ">
        <Image priority style={{ backgroundPosition: "center", objectFit: "cover" }} fill alt="page_banner" src={details.imgUrl}></Image>
      </div>
      <div className=" flex flex-col justify-center items-center text-center text-white h-96">
        <h1 style={PlayfairDisplay.style} className="text-2xl drop-shadow-lg" >{details.title}</h1>
        <h1 style={poppins.style} className="text-sm drop-shadow-lg" >{details.subtitle}</h1>

      </div>
    </div>
  )
}