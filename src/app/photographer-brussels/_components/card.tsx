import { PlayfairDisplay } from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
    lib: string;
    url: string;
    img: string;
}
export default function Card(card: CardProps) {
    return (
        <Link href={card.url} className="relative w-80 mx-10 my-8 group">
            <div className="w-full h-80  bg-midpink-extra absolute  -top-8 -left-4">
                <span style={PlayfairDisplay.style}
                    className="absolute text-darkgreen bottom-4 left-2 leading-none rotate-180 [writing-mode:vertical-lr]  text-black inline-blocks uppercase tracking-widest ">{card.lib}</span>
            </div>
            <div className="relative left-4">
                <div className="flex justify-center items-center shadow-md overflow-hidden rounded-tr-[40px] rounded-bl-[40px]">
                    <Image className="w-full h-80 hover:scale-110 saturate-0 hover:saturate-100 ease-in-out duration-500 object-center object-cover relative rounded-tr-[40px] rounded-bl-[40px]"
                        src={card.img} alt="" width={600} height={600} />
                    <h1 style={PlayfairDisplay.style} className="drop-shadow-md absolute m-auto text-2xl text-white translate-y-20 group-hover:translate-y-0 duration-200 group-hover:opacity-100 group-hover:visible opacity-0 invisible">See More</h1>

                </div>
            </div>
        </Link>
    )
}