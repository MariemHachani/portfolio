import { dancingscript, PlayfairDisplay, poppins } from "@/app/fonts/fonts"

interface PackageCardProps {
    card: {
        id: number,
        label: string,
        description: string,
        price: number,
        duration: number,
        photos: number,
        advanced: boolean,
        top_pick: boolean
    }
}
export default function PackageCard(props: PackageCardProps) {
    return (
        <div >
            {props.card.top_pick &&
                <div className="absolute z-10 rotate-45 ml-44 mt-6">
                    <span className="bg-green  text-white text-sm font-medium me-2 px-2.5 py-0.5 ">Top Picked</span>
                </div>}
            <div className={`flex flex-col items-center mx-4 xl:mx-0  ${props.card.top_pick ? "bg-green-transparent drop-shadow-xl  -translate-y-6 text-white" : "bg-midpink-extra"}  w-60 my-10 h-96`}>
                <div className="py-8">
                    <h1 style={PlayfairDisplay.style} className="text-xl uppercase font-bold">{props.card.label}</h1>
                    <h2 style={dancingscript.style} className="text-lg">{props.card.description}</h2>
                    <div style={poppins.style}><span className="text-2xl">{props.card.price}</span><span className="text-sm">EUR</span></div>
                </div>
                <div style={poppins.style} className=" flex flex-col px-2 text-sm gap-y-2 justify-start">
                    <h3>{props.card.duration} minute photoshoot</h3>
                    <h3>{props.card.photos} Digital Edited, High-Res Photos Included</h3>
                    {props.card.top_pick && <p>Provided props depending on your theme</p>}
                    {props.card.advanced && <>
                        <p>Provided props depending on your theme</p>
                        <p>Advanced subject and frame editing</p>
                    </>}
                </div>
            </div>

        </div>
    )
}