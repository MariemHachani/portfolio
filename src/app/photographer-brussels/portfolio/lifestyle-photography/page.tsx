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
            src: "https://source.unsplash.com/bYuI23mnmDQ",
            alt: "dd",
            width: 1600, height: 900
        },
        {
            id: 2,
            src: "https://source.unsplash.com/lp40q07DIe0",
            alt: "dd",
            width: 800, height: 600
        },
        {
            id: 3,
            src: "https://source.unsplash.com/wfalq01jJuU",
            alt: "dd",
            width: 800, height: 600
        },
        {
            id: 4,
            src: "https://source.unsplash.com/rMHNK_skwwU",
            alt: "dd",
            width: 850, height: 1000
        },
        {
            id: 5,
            src: "https://source.unsplash.com/Nllx4R-2c3o",
            alt: "dd",
            width: 800, height: 600
        },
        {
            id: 6,
            src: "https://source.unsplash.com/WBMjuGpbrCQ",
            alt: "dd",
            width: 800, height: 600
        },
        {
            id: 7,
            src: "https://source.unsplash.com/nCUZ5BYBL_o",
            alt: "dd",
            width: 800, height: 600
        },
        {
            id: 8,
            src: "https://source.unsplash.com/3u4fzMQZhjc",
            alt: "dd",
            width: 800, height: 600
        },
        {
            id: 9,
            src: "https://source.unsplash.com/haOIqIPSwps",
            alt: "dd",
            width: 800, height: 600
        },
        {
            id: 10,
            src: "https://source.unsplash.com/3UrYD7NNVxk",
            alt: "dd",
            width: 800, height: 600
        },
        {
            id: 11,
            src: "https://source.unsplash.com/fm1JKDItlVM",
            alt: "dd",
            width: 800, height: 600
        },
        {
            id: 12,
            src: "https://source.unsplash.com/qPpq1EVs8vw",
            alt: "dd",
            width: 800, height: 600
        },
        {
            id: 13,
            src: "https://source.unsplash.com/xRyL63AwZFE",
            alt: "dd",
            width: 800, height: 600
        },
        {
            id: 14,
            src: "https://source.unsplash.com/XeNKWTiCPNw",
            alt: "dd",
            width: 800, height: 600
        },
        {
            id: 15,
            src: "https://source.unsplash.com/DFt3T5r_4FE",
            alt: "dd",
            width: 800, height: 600
        },
        {
            id: 16,
            src: "https://source.unsplash.com/Ebwp2-6BG8E",
            alt: "dd",
            width: 800, height: 600
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
            <PhotoStyleBanner title="Lifestyle photograher in Brussels" imgUrl="/jpg/wedding-portfolio.jpg" />
            <div className="mt-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8  flex flex-col ">
                <div className="flex flex-col md:flex-row justify-between ">
                    <div className="flex flex-col w-full md:w-2/5  mr-8">
                        <GreenTitle title="Wedding Photography" />

                        <GreenSubTitle title="My Story" />
                        <div className=" text-justify">

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, aliquam? Consequatur illum eveniet delectus, soluta vero est labore voluptatum nostrum, eum sequi ab ipsum aliquid unde? Minima quaerat totam eum.</p>
                            <br />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, aliquam? Consequatur illum eveniet delectus, soluta vero est labore voluptatum nostrum, eum sequi ab ipsum aliquid unde? Minima quaerat totam eum.</p>
                        </div>
                    </div>


                    <img src="/jpg/wedding-portfolio.jpg" alt="" className="bg-cover pt-8 md:pt-0 h-60 md:h-96 w-full object-cover bg-center bg-no-repeat" />
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
                <div className="text-center my-16">
                    <GreenTitle title="My Packages" />
                    <div className="flex items-center mt-8 w-full justify-center lg:justify-between flex-wrap">
                        {packages.map((offer) => <PackageCard key={offer.id} card={offer} />)}
                    </div>
                </div>
            </div >
        </div>
    )
}