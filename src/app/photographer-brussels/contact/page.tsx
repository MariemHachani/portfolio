import { PiPhoneCallLight } from "react-icons/pi";
import PageBanner from "../_components/page_banner";
import { dancingscript, PlayfairDisplay, poppins } from "@/app/fonts/fonts";
import { CiMail } from "react-icons/ci";
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { LuFacebook, LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandFacebook } from "react-icons/tb";

export default function Page() {
    return (
        <div className="flex flex-col ">

            <PageBanner title="Available photographer for your questions"
                subtitle="Tell me about your session needs, availabilities and any other information from the from below"
                imgUrl="/jpg/portfolio-banner.jpg" />

            <div style={poppins.style} className="my-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8  flex flex-col sm:flex-row items-center text-center">

                <div className="text-left ">
                    <h1 style={dancingscript.style} className="text-3xl text-darkgreen font-extrabold">Let's Talk</h1>
                    <p className="text-sm text-gray-400 text-justify mt-3 w-4/5">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
                    <div className="mt-8">
                        <h2 style={dancingscript.style} className="text-2xl text-darkgreen font-extrabold">Contacts</h2>
                        <ul className="mt-3">
                            <li className="flex items-center">
                                <div className="bg-teal-transparent h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <PiPhoneCallLight fill="#039f9b" size={25} title="+32465168391"/>

                                </div>
                                <a target="blank" href="#" className="text-green text-sm ml-3">
                                    <small className="block">Phone number</small>
                                    <strong>+32465168391</strong>
                                </a>
                            </li>
                            <li className="mt-4 flex items-center">
                                <div className="bg-teal-transparent h-10 w-10  rounded-full flex items-center justify-center shrink-0">
                                    <CiMail fill="#039f9b" size={25} title="shootingphactory@gmail.com" />

                                </div>
                                <a target="blank" href="#" className="text-green text-sm ml-3">
                                    <small className="block">E-mail</small>
                                    <strong>shootingphactory@gmail.com</strong>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className="mt-8">
                        <h2 style={dancingscript.style} className="text-2xl text-darkgreen font-extrabold">Socials</h2>
                        <ul className="flex mt-3 space-x-4">
                            <li className="bg-teal-transparent h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="#">
                                    <FiFacebook stroke="#039f9b" size={20} />

                                </a>
                            </li>
                            <li className="bg-teal-transparent h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="#">
                                    <FiLinkedin stroke="#039f9b" size={20} />

                                </a>
                            </li>
                            <li className="bg-teal-transparent h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="#">
                                    <FiInstagram stroke="#039f9b" size={20} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form className="ml-auto space-y-4">
                    <h2 style={dancingscript.style} className="mt-8 sm:mt-0 text-2xl text-left sm:hidden text-darkgreen font-extrabold">Message</h2>

                    <input type='text' placeholder='Name'
                        className="w-full py-2.5 px-4 border-b text-sm outline-green" />
                    <input type='email' placeholder='Email'
                        className="w-full  py-2.5 px-4 border-b text-sm outline-green" />
                    <input type='text' placeholder='Subject'
                        className="w-full py-2.5 px-4 border-b text-sm outline-green" />
                    <textarea placeholder='Message' rows={6}
                        className="w-full  px-4 border-b text-sm pt-2.5 outline-green"></textarea>
                    <button type='button'
                        className="text-white bg-green hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
                </form>
            </div>
        </div>

    )
}