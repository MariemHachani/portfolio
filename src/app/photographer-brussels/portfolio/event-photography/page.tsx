'use client'
import GreenSubTitle from "../../_components/green_subtitle";
import GreenTitle from "../../_components/green_title";
import PhotoStyleBanner from "../../_components/photography_style_banner";
import PhotoAlbum from "react-photo-album";
import NextJsImage from "../../_components/nextJSImage";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import ModalJsImage from "../../_components/modalJsImage";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image";

export default function Events() {
    const [index, setIndex] = useState(-1);
    const [position, setPosition] = useState<
        "top" | "bottom" | "start" | "end"
    >("bottom");
    const [finite, setFinite] = useState(false);
    const [width, setWidth] = useState(80);
    const [height, setHeight] = useState(60);
    const [border, setBorder] = useState(0);
    const [borderRadius, setBorderRadius] = useState(0);
    const [padding, setPadding] = useState(2);
    const [gap, setGap] = useState(16);
    const [preload, setPreload] = useState(2);
    const [fade, setFade] = useState(250);
    const [swipe, setSwipe] = useState(500);
    const [showToggle, setShowToggle] = useState(false);
    let photos = [
        {
            id: 1,
            src: "../../jpg/event/DSC_0013.webp",
            alt: "dd",
            width: 4888, height: 3238
        },

        {
            id: 3,
            src: "../../jpg/event/DSC_0096.webp",
            alt: "dd",
            width: 4668, height: 3092
        },
        {
            id: 2,
            src: "../../jpg/event/DSC_0066.webp",
            alt: "dd",
            width: 3050, height: 4605
        },
        {
            id: 4,
            src: "../../jpg/event/DSC_0219.webp",
            alt: "dd",
            width: 3264, height: 4928
        },
        {
            id: 5,
            src: "../../jpg/event/DSC04637.webp",
            alt: "dd",
            width: 5688, height: 3792
        },
        {
            id: 6,
            src: "../../jpg/event/DSC04662.webp",
            alt: "dd",
            width: 3839, height: 5759
        },

        {
            id: 8,
            src: "../../jpg/event/DSC05102.webp",
            alt: "dd",
            width: 5804, height: 3869
        },
        {
            id: 7,
            src: "../../jpg/event/DSC05061.webp",
            alt: "dd",
            width: 4000, height: 6000
        },
        {
            id: 9,
            src: "../../jpg/event/DSC05766.webp",
            alt: "dd",
            width: 3727, height: 5590
        },
        {
            id: 11,
            src: "../../jpg/event/DSC03097.webp",
            alt: "dd",
            width: 3883, height: 5825
        },
       
        {
            id: 10,
            src: "../../jpg/event/DSC02773.webp",
            alt: "dd",
            width: 5851, height: 3901
        },
    ]
    return (
        <div className="flex flex-col ">
            <PhotoStyleBanner title="Events photograher in Brussels" imgUrl="../../jpg/event/DSC04522.webp" />
            <div className="mt-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8  flex flex-col ">
                <div className="flex flex-col md:flex-row justify-between ">
                    <div className="flex flex-col w-full md:w-3/5  mr-8">
                        <GreenTitle title="Events Photography" />

                        <GreenSubTitle title="My Vision" />
                        <div className=" text-justify mt-6">

                            <p>I&apos;ll capture the professionalism, energy, and essence of your ceremonies and events. From candid moments to keynote speeches, every image will reflect your brand&apos;s values and narrative. Let me be your visual storyteller, ensuring to share the success and significance of your corporate events. </p>
                            <br />
                            <p>Corporate photos serve as powerful visual assets for marketing materials, websites, annual reports, and social media platforms. That&apos;s how I help you in building trust with clients, investors, and stakeholders through my services.</p>
                        </div>
                    </div>


                    <Image height={600} width={600} src="../../jpg/event/DSC_0188.webp" alt="" className="bg-cover pt-8 md:pt-0 h-60 md:h-[500px] w-full object-cover bg-center bg-no-repeat" />
                </div>
                <div className="md:pt-5 pt-8 text-end ">
                    <GreenTitle title="Gallery" />

                    <PhotoAlbum layout="columns"
                        photos={photos}
                        renderPhoto={NextJsImage}
                        sizes={{ size: "calc(100vw - 240px)" }}
                        onClick={({ index: current }) => setIndex(current)}
                    />

                </div>
                <Lightbox
                    index={index}
                    slides={photos}
                    open={index >= 0}
                    animation={{ fade, swipe }}
                    carousel={{ preload, finite }}
                    plugins={[Thumbnails]}
                    thumbnails={{
                        position,
                        width,
                        height,
                        border,
                        borderRadius,
                        padding,
                        gap,
                        showToggle,
                    }}
                    close={() => setIndex(-1)}
                    render={{ slide: ModalJsImage }}

                />
            </div >
        </div>
    )
}
