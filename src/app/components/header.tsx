'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { poppins, PlayfairDisplay, dancingscript } from "@/fonts"
import React, { useEffect, useState } from "react";



export default function Header() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [navColor, setnavColor] = useState("transparent");
    const [textColor, settextColor] = useState("white");
    const [shadow, setShadow] = useState("");

    const listenScrollEvent = () => {
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
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
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
            backgroundColor: navColor,
            boxShadow: shadow,
            color: textColor,
            transition: "ease-in-out 0.5s"
        }}>
            <div className=" sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 md:px-8 py-1 md:py-2 flex justify-between items-center  " >
                <div className="flex flex-col items-center text-sm md:text-base leading-none">
                    <a href="/" style={PlayfairDisplay.style}>Mariem Hachani</a>
                    <div style={dancingscript.style} className='tracking-wider'>
                        {pathname.includes("artsy") ? <span >Photography</span> : pathname.includes("logical") ? <span>WebDev</span> : <span className='hidden'>Keep space</span>}</div>
                </div>
                <div className='flex text-base md:text-lg' style={poppins.style}>
                    {pathname.includes("artsy") ? (<>
                        <div className="group relative">
                            <Link className={`mx-2 pb-0.5 cursor-pointer border-b-2 border-transparent  ${pathname === '/portfolio' ? '!border-b-midpink ' : 'hover:border-b-2 hover:border-solid hover:border-b-midpink'} `} href="/">Portfolio</Link>
                            <div className={`absolute bg-white  text-sm top-8 z-30 w-[190px]  hidden flex-col py-4 shadow-sm shadow-green rounded-md group-hover:flex`}>

                                <Link
                                    className="hover:text-green px-4 py-1"
                                    href='/'

                                >Wedding Photography</Link>
                                <Link
                                    className=" hover:text-green px-4 py-1"
                                    href='/'
                                >Lifestyle Photoshoots</Link>
                                <Link
                                    className=" hover:text-green px-4 py-1"
                                    href='/'
                                >Product Photography</Link>
                                <Link
                                    className=" hover:text-green px-4 py-1"
                                    href='/'
                                >Events Photography</Link>


                            </div>

                        </div>

                        <div className="group relative">
                            <Link
                                className={` mx-2 pb-0.5 cursor-pointer border-b-2 border-transparent ${isOpen ? '! border-b-midpink ' : 'hover:border-b-2 hover:border-solid hover:border-b-midpink'} `}
                                href='/'
                            >Services</Link>
                            <div className={`absolute bg-white  text-sm top-8 z-30 w-[150px]  hidden flex-col py-4 shadow-sm shadow-green rounded-md group-hover:flex`}>

                                <Link
                                    className="hover:text-green px-4 py-1"
                                    href='/'
                                    onClick={toggle}
                                >Shooting</Link>
                                <Link
                                    className=" hover:text-green px-4 py-1"
                                    href='/'
                                    onClick={toggle}
                                >Editing</Link>

                            </div>
                        </div>
                        <Link className={`mx-2 pb-0.5 cursor-pointer border-b-2 border-transparent  ${pathname === '/my-brand' ? '!border-b-midpink ' : 'hover:border-b-2 hover:border-solid hover:border-b-midpink'} `} href="/">Why hire me?</Link>
                        <Link className={`mx-2 pb-0.5 cursor-pointer border-b-2 border-transparent  ${pathname === '/pricing' ? ' !border-b-midpink ' : 'hover:border-b-2 hover:border-solid hover:border-b-midpink'} `} href="/pricing">Pricing</Link>
                    </>) :
                        <Link className={`mx-2 pb-0.5 cursor-pointer border-b-2 border-transparent ${pathname === '/about' ? '  !border-b-midpink ' : 'hover:border-b-2 hover:border-solid hover:border-b-midpink'} `} href="/about">About</Link>
                    }
                    <Link className={`mx-2 pb-0.5 cursor-pointer  border-b-2 border-transparent  ${pathname === '/contact' ? '!border-b-midpink ' : 'hover:border-b-2 hover:border-solid hover:border-b-midpink'} `} href="/">Contact</Link>

                </div>



            </div>
        </div>

    );
}