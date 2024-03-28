import { poppins } from "@/app/fonts/fonts";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

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
                <Link href={"/artsy/contact"}>Contact</Link>

                <ul className="flex mt-3 space-x-4">
                    <li className="shrink-0">
                        <a href="#" className="bg-teal-transparent h-10 w-10 rounded-full flex items-center justify-center ">
                            <FiFacebook stroke="#039f9b" size={20} />

                        </a>
                    </li>
                    <li className="shrink-0">
                        <a href="#" className="bg-teal-transparent h-10 w-10 rounded-full flex items-center justify-center ">
                            <FiLinkedin stroke="#039f9b" size={20} />

                        </a>
                    </li>
                    <li className=" shrink-0">
                        <a href="#" className="bg-teal-transparent h-10 w-10 rounded-full flex items-center justify-center">
                            <FiInstagram stroke="#039f9b" size={20} />
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}