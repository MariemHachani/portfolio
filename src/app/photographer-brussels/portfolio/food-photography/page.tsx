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
            src: "../../jpg/food/DSC05952.webp",
            alt: "dd",
            width: 4888, height: 3238
        },

        {
            id: 3,
            src: "../../jpg/food/DSC05969.webp",
            alt: "dd",
            width: 4668, height: 3092
        },
        {
            id: 2,
            src: "../../jpg/food/DSC05993.webp",
            alt: "dd",
            width: 3050, height: 4605
        },
        {
            id: 4,
            src: "../../jpg/food/DSC06016.webp",
            alt: "dd",
            width: 3264, height: 4928
        },
        {
            id: 5,
            src: "../../jpg/food/DSC06021.webp",
            alt: "dd",
            width: 5688, height: 3792
        },
        {
            id: 6,
            src: "../../jpg/food/DSC06030.webp",
            alt: "dd",
            width: 3839, height: 5759
        },

        {
            id: 8,
            src: "../../jpg/food/DSC06062.webp",
            alt: "dd",
            width: 5804, height: 3869
        },
        {
            id: 7,
            src: "../../jpg/food/DSC06076.webp",
            alt: "dd",
            width: 4000, height: 6000
        },
        {
            id: 9,
            src: "../../jpg/food/DSC06085.webp",
            alt: "dd",
            width: 3727, height: 5590
        },
        {
            id: 11,
            src: "../../jpg/food/DSC06110.webp",
            alt: "dd",
            width: 3883, height: 5825
        },


    ]
    return (
        <div className="flex flex-col ">
            <PhotoStyleBanner title="Food photograher in Brussels" imgUrl="../../jpg/food/DSC05993.webp" />
            <div className="mt-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8  flex flex-col ">
                <div className="flex flex-col md:flex-row justify-between ">
                    <div className="flex flex-col w-full md:w-3/5  mr-8">
                        <GreenTitle title="Events Photography" />

                        <GreenSubTitle title="My Vision" />
                        <div className=" text-justify mt-6">

                            <p>I find beauty in every plate, from the vibrant colors of fresh, seasonal ingredients to the artistry of plating that reflects a chef&apos;s creativity and vision. Mains tell a story of tradition and innovation, while desserts embody the sweet finale that lingers in the heart of every diner. My camera doesn&apos;t just take photos—it preserves these moments, turning fleeting flavors into lasting impressions. </p>
                            <br />
                            <p>Food photography plays a vital role in showcasing the artistry, quality, and appeal of dishes, transforming them into visually compelling stories that entice customers and elevate a brand&apos;s identity.</p>
                        </div>
                    </div>


                    <Image height={600} width={600} src="../../jpg/food/DSC06030.webp" alt="food-photography-brussels" className="bg-cover pt-8 md:pt-0 h-60 md:h-[500px] w-full object-cover bg-center bg-no-repeat" />
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
