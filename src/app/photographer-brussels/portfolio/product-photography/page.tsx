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

export default function Products() {
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
            src: "../../jpg/product/DSC_0056.webp",
            alt: "dd",
            width: 2961, height: 4145
        },
        {
            id: 2,
            src: "../../jpg/product/DSC00283.webp",
            alt: "dd",
            width: 4303, height: 2850
        },

        {
            id: 8,
            src: "../../jpg/product/DSC_0044.webp",
            alt: "dd",
            width: 4570, height: 3264
        },
        {
            id: 3,
            src: "../../jpg/product/DSC_0238.webp",
            alt: "dd",
            width: 3153, height: 4760
        },
        {
            id: 4,
            src: "../../jpg/product/DSC_0103.webp",
            alt: "dd",
            width: 1255, height: 1920
        },
        {
            id: 5,
            src: "../../jpg/product/DSC_0258.webp",
            alt: "dd",
            width: 4661, height: 3087
        },
        {
            id: 6,
            src: "../../jpg/product/nike-waffle.webp",
            alt: "dd",
            width: 4865, height: 3222
        },
        {
            id: 7,
            src: "../../jpg/product/pineup.webp",
            alt: "dd",
            width: 4928, height: 3264
        },

    ]
    return (
        <div className="flex flex-col ">
            <PhotoStyleBanner title="Product photograher in Brussels" imgUrl="../../jpg/product/DSC_0075.webp" />
            <div className="mt-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8  flex flex-col ">
                <div className="flex flex-col md:flex-row justify-between ">
                    <div className="flex flex-col w-full md:w-3/5  mr-8">
                        <GreenTitle title="Product Photography" />

                        <GreenSubTitle title="My Vision" />
                        <div className=" text-justify mt-6">

                            <p>My photos will embody your brand&apos;s essence by maintaining a consistent visual style and telling stories that align with your values. Whether it&apos;s through the use of specific colors, lighting techniques, compositions, or editing styles I do what it takes to provide product photos that reflect your brand&apos;s unique aesthetic.</p>
                            <br />
                            <p>I use photography to convey authenticity, transparency, and connection with the target audience. I will showcase how the product fits into the customer&apos;s everyday life and how it aligns with their aspirations.</p>
                        </div>
                    </div>


                    <Image height={600} width={600} src="../../jpg/product/DSC_0044.webp" alt="" className="bg-cover pt-8 md:pt-0 h-60 md:h-[500px] w-full object-cover bg-center bg-no-repeat" />
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
