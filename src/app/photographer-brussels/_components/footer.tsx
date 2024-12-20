import { poppins } from "@/app/fonts/fonts";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
    return (
        <div style={poppins.style} className="bg-darkgreen text-sm text-white py-10 flex flex-col md:flex-row items-center justify-evenly ">
            <div className="flex flex-col gap-2 text-center  md:text-left">
            <Link href={"/photographer-brussels/portfolio/food-photography"}>Food Photography</Link>
            <Link href={"/photographer-brussels/portfolio/product-photography"}>Products Photography</Link>

                <Link href={"/photographer-brussels/portfolio/wedding-photography"}>Wedding Photography</Link>
                <Link href={"/photographer-brussels/portfolio/lifestyle-photography"}>Lifestyle Photography</Link>
                <Link href={"/photographer-brussels/portfolio/event-photography"}>Events Photography</Link>
            </div>
            <div className="flex flex-col gap-2 text-center mt-8 md:mt-0 md:text-left">
                <Link href={"/photographer-brussels/hire-photographer"}>Why Hire Me ?</Link>
                {/* <Link href={"/photographer-brussels/services/photoshoots"}>Shooting</Link>
                <Link href={"/photographer-brussels/services/editing"}>Editing</Link> */}
            </div>
            <div className="flex flex-col text-center mt-8 md:mt-0 md:text-left">
                <Link href={"/photographer-brussels/contact"}>Contact</Link>

                <ul className="flex   mt-3 space-x-4">
                    <li className=" shrink-0">
                        <a aria-label="Instagram" href="https://www.instagram.com/mr.shootingphactory/" className="bg-teal-transparent h-10 w-10 rounded-full flex items-center justify-center">
                            <FiInstagram stroke="#039f9b" size={20} />
                        </a>
                    </li>
                    <li className="shrink-0">
                        <a aria-label="Facebook" href="https://www.facebook.com/Khlifi.R" className="bg-teal-transparent h-10 w-10 rounded-full flex items-center justify-center ">
                            <FiFacebook stroke="#039f9b" size={20} />

                        </a>
                    </li>
                    <li className="shrink-0">
                        <a href="https://www.linkedin.com/in/mariem-hachani-photography/" aria-label="Linkedin" className="bg-teal-transparent h-10 w-10 rounded-full flex items-center justify-center ">
                            <FiLinkedin stroke="#039f9b" size={20} />

                        </a>
                    </li>

                </ul>

            </div>
        </div>
    )
}