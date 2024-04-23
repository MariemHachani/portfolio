import { PlayfairDisplay, poppins } from "@/app/fonts/fonts";

interface StyleBannerProps {
    imgUrl: string;
    title: string;
}

export default function PhotoStyleBanner(details: StyleBannerProps) {
    return (

        <div className="-mt-16 bg-cover bg-fixed bg-center bg-no-repeat " style={{ backgroundImage: `url(${details.imgUrl})`, }}>
            <div className=" flex flex-col justify-center items-center text-center text-white h-96">
                <h3 style={poppins.style}  >Take a look in my portfolio</h3>
                <h1 style={PlayfairDisplay.style} className="text-2xl drop-shadow-lg	">{details.title}</h1>
            </div>
        </div>

    )
}