import { PlayfairDisplay, poppins } from "@/app/fonts/fonts";

interface BannerProps {
    imgUrl: string;
    title: string;
    subtitle: string;
}

export default function PageBanner(details: BannerProps) {
    return (
        <div className="-mt-16 bg-cover bg-fixed bg-center bg-no-repeat" style={{ backgroundImage: `url(${details.imgUrl})` }}>
            <div className=" flex flex-col justify-center items-center text-center text-white h-96">
                <h1 style={PlayfairDisplay.style} className="text-2xl drop-shadow-lg" >{details.title}</h1>
                <h3 style={poppins.style} className="text-sm ">{details.subtitle}</h3>
            </div>
        </div>
    )
}