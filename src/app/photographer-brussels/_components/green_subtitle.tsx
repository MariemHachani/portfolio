import { dancingscript } from "@/app/fonts/fonts";

export default function GreenSubTitle(params: { title: string }) {
    return (
        <h2 style={dancingscript.style} className="text-green font-bold text-2xl ">{params.title}</h2>
    )
}