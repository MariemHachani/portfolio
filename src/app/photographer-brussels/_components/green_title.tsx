import { PlayfairDisplay } from "@/app/fonts/fonts";

export default function GreenTitle(params:{title: string}) {
    return (
        <h1 style={PlayfairDisplay.style} className="text-green font-bold  text-2xl uppercase">{params.title}</h1>

    )
}