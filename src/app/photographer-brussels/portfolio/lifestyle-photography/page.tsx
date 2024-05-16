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
import PackageCard from "../../_components/package_card";
import Image from "next/image";

export default function Lifestyle() {
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
            src: "../../jpg/lifestyle/DSC06880.webp",
            alt: "dd",
            width: 4000, height: 6000
        },
        {
            id: 9,
            src: "../../jpg/lifestyle/DSC00360.webp",
            alt: "dd",
            width: 1280, height: 1920
        },
        {
            id: 10,
            src: "../../jpg/lifestyle/DSC_1446.webp",
            alt: "dd",
            width: 4582, height: 3035
        },
        {
            id: 2,
            src: "../../jpg/lifestyle/DSC06818.webp",
            alt: "dd",
            width: 3921, height: 5882
        },
        {
            id: 3,
            src: "../../jpg/lifestyle/DSC06693.webp",
            alt: "dd",
            width: 3375, height: 5063
        },
        {
            id: 4,
            src: "../../jpg/lifestyle/DSC06493.webp",
            alt: "dd",
            width: 4000, height: 6000
        },
        {
            id: 5,
            src: "../../jpg/lifestyle/DSC06513.webp",
            alt: "dd",
            width: 3740, height: 5610
        },
        {
            id: 6,
            src: "../../jpg/lifestyle/DSC_0085.webp",
            alt: "dd",
            width: 4928, height: 3264
        },
        {
            id: 7,
            src: "../../jpg/lifestyle/DSC_0070.webp",
            alt: "dd",
            width: 2900, height: 4378
        },
        {
            id: 8,
            src: "../../jpg/lifestyle/DSC_0545.webp",
            alt: "dd",
            width: 3264, height: 4928
        },

    ]
    let packages = [
        {
            id: 1,
            label: "Essential Explorer",
            description: "Short and Effective Session",
            price: 50,
            duration: 20,
            photos: 5,
            advanced: false,
            top_pick: false
        },
        {
            id: 2,
            label: "SnapMaster Suite",
            description: "Complete and Dynamic Bundle",
            price: 75,
            duration: 30,
            photos: 10,
            advanced: false,
            top_pick: false
        },
        {
            id: 3,
            label: "Elite Experience",
            description: "Premium Picture Perfect",
            price: 150,
            duration: 60,
            photos: 15,
            advanced: false,
            top_pick: true
        },
        {
            id: 4,
            label: "FocalPoint Deluxe",
            description: "High-End Imaging Package",
            price: 250,
            duration: 90,
            photos: 20,
            advanced: true,
            top_pick: false
        },
    ]
    return (
        <div className="flex flex-col ">
            <PhotoStyleBanner title="Lifestyle photograher in Brussels" imgUrl="../../jpg/lifestyle/DSC06513.webp" />
            <div className="mt-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8  flex flex-col ">
                <div className="flex flex-col md:flex-row justify-between ">
                    <div className="flex flex-col w-full md:w-3/5  mr-8">
                        <GreenTitle title="Lifestyle Photography" />

                        <GreenSubTitle title="My Vision" />
                        <div className=" text-justify mt-6">

                            <p>As an introverted photographer my lens captures the warmth of fleeting moments with an intimacy that words often fail to convey. Whether it&apos;s for a calm day alone, a fun day between friends, to capture your child growing, or you&apos;re a couple who want to celebrate their love, I invite you to pause, to linger in the moment.</p>
                            <br />
                            <p>Because beauty can be found in the simplest of moments, I capture the essence of a scene or subject without embellishment or manipulation, allowing the viewer to connect with the raw truth of the image.</p>
                        </div>
                    </div>


                    <Image height={600} width={600} src="../../jpg/lifestyle/DSC00360.webp" alt="" className="bg-cover pt-8 md:pt-0 h-60 md:h-[500px] w-full object-cover bg-center bg-no-repeat" />
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

                {/* <div className="text-center my-16">
                    <GreenTitle title="My Packages" />
                    <div className="flex items-center mt-8 w-full justify-center lg:justify-between flex-wrap">
                        {packages.map((offer) => <PackageCard key={offer.id} card={offer} />)}
                    </div>
                </div> */}
            </div >
        </div>
    )
}
