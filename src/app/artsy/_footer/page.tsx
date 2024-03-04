import { poppins } from "@/app/fonts/fonts";
import Link from "next/link";

export default function Footer() {
    return (
        <div style={poppins.style} className="bg-darkgreen text-sm text-white py-10 flex items-center justify-evenly ">
            <div className="flex flex-col">
                <Link href={"#"}>Wedding Photography</Link>
                <Link href={"#"}>Lifestyle Photography</Link>
                <Link href={"#"}>Products Photography</Link>
                <Link href={"#"}>Events Photography</Link>
            </div>
            <div className="flex flex-col">
                <Link href={"#"}>Why Hire Me ?</Link>
                <Link href={"#"}>Shooting</Link>
                <Link href={"#"}>Editing</Link>
            </div>
            <div className="flex flex-col">
                <Link href={"#"}>Pricing</Link>
                <Link href={"#"}>Contact</Link>
                <div className="flex">
                    <Link href={"#"}>social  </Link>
                    <Link href={"#"}>social</Link>
                </div>
            </div>
        </div>
    )
}