'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { poppins, PlayfairDisplay, dancingscript } from "@/fonts"
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

import { IoMailUnreadOutline } from 'react-icons/io5';
import { MdOutlineHandshake } from 'react-icons/md';
import { GrGallery } from 'react-icons/gr';

import { LuHome } from 'react-icons/lu';



export default function Header() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [navColor, setnavColor] = useState("transparent");
    const [textColor, settextColor] = useState("white");
    const [shadow, setShadow] = useState("");
    const [nav, setNav] = useState(false);

    const listenScrollEvent = () => {
        //if (window.innerWidth > 430) {
            if (window.scrollY > 340) {
                setnavColor("#ffff");
                setShadow("0 4px 8px 0 rgba(0, 0, 0, 0.2)")
                settextColor("#e090ad")
            }
            else {
                setnavColor("transparent")
                settextColor("white")
                setShadow("0 4px 8px 0 rgba(0, 0, 0, 0 ")
            }
        //}
    };
    const handleResize = () => {
        if (window.innerWidth >= 430) { // Assuming 768px is your md breakpoint
            setNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        window.addEventListener('resize', handleResize);

        // Clean up the event listener

        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";
    return (
        <div className='sticky top-0 z-50 h-16' style={{
            background: navColor,
            boxShadow: shadow,
            color: textColor,
            transition: "ease-in-out 0.25s"
        }}>
            <div className=" sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-2 flex justify-between items-center  " >
                <div className="flex flex-col items-center text-sm md:text-base leading-none drop-shadow-lg">
                    <a href="/portfolio" style={PlayfairDisplay.style}>Mariem Hachani
                    <div style={dancingscript.style} className='tracking-wider'>
                        {pathname.includes("photographer-brussels") ? <span >Photography</span> : pathname.includes("logical") ? <span>WebDev</span> : <span className='hidden'>Keep space</span>}
                    </div>
                        </a>
                </div>
                <div className='hidden md:flex text-base md:text-lg drop-shadow-lg' style={poppins.style}>
                    {pathname.includes("photographer-brussels") ? (<>
                        <Link className={`mx-2 pb-0.5 cursor-pointer  border-b-2 border-transparent  ${pathname === '/' ? '!border-b-midpink ' : 'hover:border-b-2 hover:border-solid hover:border-b-midpink'} `} href="/photographer-brussels/">Welcome</Link>
                        <div className="group relative">

                            <Link className={`mx-2 pb-0.5 cursor-pointer border-b-2 border-transparent  ${pathname === '/portfolio' ? '!border-b-midpink ' : 'hover:border-b-2 hover:border-solid hover:border-b-midpink'} `} href="/photographer-brussels/portfolio">Portfolio</Link>
                            <div className={`absolute text-midpink  bg-white  text-sm top-8 z-30 w-[190px]  hidden flex-col py-4 shadow-sm shadow-midpink rounded-md group-hover:flex`}>


                                <Link
                                    className="  px-4 py-1"
                                    href='/photographer-brussels/portfolio/lifestyle-photography'
                                >
                                    <span className='border-b-2 border-transparent  hover:hover:border-b-2 hover:border-solid hover:border-b-midpink'>

                                        Lifestyle Photoshoots
                                    </span></Link>
                                <Link
                                    className="  px-4 py-1"
                                    href='/photographer-brussels/portfolio/product-photography'
                                >
                                    <span className='border-b-2 border-transparent  hover:hover:border-b-2 hover:border-solid hover:border-b-midpink'>
                                        Product Photography
                                    </span></Link>
                                <Link
                                    className="  px-4 py-1"
                                    href='/photographer-brussels/portfolio/wedding-photography'

                                >
                                    <span className='border-b-2 border-transparent  hover:hover:border-b-2 hover:border-solid hover:border-b-midpink'>
                                        Wedding Photography
                                    </span></Link>
                                <Link
                                    className="  px-4 py-1"
                                    href='/photographer-brussels/portfolio/event-photography'
                                >
                                    <span className='border-b-2 border-transparent  hover:hover:border-b-2 hover:border-solid hover:border-b-midpink'>

                                        Events Photography
                                    </span></Link>


                            </div>

                        </div>

                        {/*<div className="group relative ">
                            <Link
                                className={` mx-2 pb-0.5 cursor-pointer border-b-2 border-transparent ${isOpen ? '! border-b-midpink ' : 'hover:border-b-2 hover:border-solid hover:border-b-midpink'} `}
                                href='/photographer-brussels/services'
                            >Services</Link>
                            <div className={`absolute text-midpink  bg-white  text-sm top-8 z-30 w-[150px]  hidden flex-col py-4 shadow-sm shadow-midpink rounded-md group-hover:flex`}>

                                <Link
                                    className=" px-4 py-1"
                                    href='/photographer-brussels/services/photoshoots'
                                    onClick={toggle}
                                >
                                    <span className='border-b-2 border-transparent  hover:hover:border-b-2 hover:border-solid hover:border-b-midpink'>

                                        Shooting
                                    </span></Link>
                                <Link
                                    className="  px-4 py-1"
                                    href='/photographer-brussels/services/editing'
                                    onClick={toggle}
                                >
                                    <span className='border-b-2 border-transparent  hover:hover:border-b-2 hover:border-solid hover:border-b-midpink'>
                                        Editing
                                    </span></Link>

                            </div>
                    </div>*/}
                        <Link className={`mx-2 pb-0.5 cursor-pointer border-b-2 border-transparent  ${pathname === '/my-brand' ? '!border-b-midpink ' : 'hover:border-b-2 hover:border-solid hover:border-b-midpink'} `} href="/photographer-brussels/hire-photographer">Why hire me?</Link>
                        {/*                         <Link className={`mx-2 pb-0.5 cursor-pointer border-b-2 border-transparent  ${pathname === '/pricing' ? ' !border-b-midpink ' : 'hover:border-b-2 hover:border-solid hover:border-b-midpink'} `} href="/pricing">Pricing</Link>
 */}                    </>) :
                        <Link className={`mx-2 pb-0.5 cursor-pointer border-b-2 border-transparent ${pathname === '/about' ? '  !border-b-midpink ' : 'hover:border-b-2 hover:border-solid hover:border-b-midpink'} `} href="/about">About</Link>
                    }
                    <Link className={`mx-2 pb-0.5 cursor-pointer  border-b-2 border-transparent  ${pathname === '/contact' ? '!border-b-midpink ' : 'hover:border-b-2 hover:border-solid hover:border-b-midpink'} `} href="/photographer-brussels/contact">Contact</Link>

                </div>
                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer z-10 text-gray-500 md:hidden"
                >
                    {nav ? <FaTimes color='#e090ad' size={30} /> : <FaBars size={30} />}
                </div>

                {nav && (
                    <ul style={poppins.style} className="flex shadow-lg px-4 py-16 bg-white text-midpink flex-col  absolute top-0 right-0 w-2/3 h-screen ">

                        <li className="flex items-center px-2 cursor-pointer capitalize py-2 text-lg " >
                            <LuHome size={20} />
                            <Link className="px-2" onClick={() => setNav(!nav)} href="/photographer-brussels/">Welcome</Link>
                        </li>
                        <li className="flex items-center px-2 cursor-pointer capitalize py-2 text-lg " >
                            <GrGallery size={18} />
                            <Link className="px-2" onClick={() => setNav(!nav)} href="/photographer-brussels/portfolio">Portfolio</Link>
                        </li>
                        {/* <li className="flex items-center px-2 cursor-pointer capitalize py-2 text-lg " >
                            <TbPhotoCog size={20} />
                            <Link className="px-2" onClick={() => setNav(!nav)} href="/photographer-brussels/services">Services</Link>
                        </li>*/}
                        <li className="flex items-center px-2 cursor-pointer capitalize py-2 text-lg " >
                            <MdOutlineHandshake size={20} />
                            <Link className="px-2" onClick={() => setNav(!nav)} href="/photographer-brussels/hire-photographer">Why hire me?</Link>
                        </li>
                        <li className="flex items-center px-2 cursor-pointer capitalize py-2 text-lg " >
                            <IoMailUnreadOutline size={20} />
                            <Link className="px-2" onClick={() => setNav(!nav)} href="/photographer-brussels/contact">Contact</Link>
                        </li>

                    </ul>
                )}
            </div>
        </div>

    );
}
