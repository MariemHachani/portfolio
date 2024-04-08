import PhotoAlbum from "react-photo-album";
import { poppins } from "@/app/fonts/fonts";
import GreenSubTitle from "../_components/green_subtitle";
import GreenTitle from "../_components/green_title";
import PageBanner from "../_components/page_banner";
import { FaWandMagicSparkles } from "react-icons/fa6";
import NoImageBanner from "../_components/no_image_banner";
import FAQ from "../_components/faq";

export default function HirePhotographer() {
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
        }
    ]
    return <div className="flex flex-col ">
        <PageBanner title="Why Hire Me?"
            subtitle="You deserve to understand what you'll be getting as my client and to know If we are a good match."
            imgUrl="/jpg/portfolio-banner.jpg" />
        <div className="mt-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8  flex flex-col items-center">
            <GreenTitle title="More than a service" />

            <GreenSubTitle title="A personalised, authentic, experience " />
            <div style={poppins.style} className="mt-8 text-sm text-center"><p>As an introvert photographer, having the right energy is a must for me during our work together. <br />
                For that I would like to introduce myself on a deeper level maybe we share the same values or interests. My main goal in life is to be happy and as cheesy as it sounds to be able to share the happiness and the blessings with others. Nature is where I thrive, everything from simple walks to hikes and caving,
                that's where I feel most at peace. If we work together, my main focus will be your comfort and satisfaction.
            </p></div>
            <div style={poppins.style} className="mt-8 flex flex-wrap ">

                <div className="flex my-2 md:w-1/2">
                    <FaWandMagicSparkles className="w-8 h-8 text-green" />
                    <div className="flex flex-col px-2">
                        <h2 className="font-bold text-green">Personalised style</h2>
                        <p className="text-sm">rnelnfln rfnlrnfk rfnkflnf nelnfln rfnlrnfk rfnkfln nelnfln rfnlrnfk rfnkfln </p>
                    </div>
                </div>
                <div className="flex my-2 md:w-1/2">
                    <FaWandMagicSparkles className="w-8 h-8 text-green" />
                    <div className="flex flex-col px-2">
                        <h2 className="font-bold text-green">Clean editing</h2>
                        <p className="text-sm">rnelnfln rfnlrnfk rfnkflnf nelnfln rfnlrnfk rfnkfln nelnfln rfnlrnfk rfnkfln </p>
                    </div>
                </div>
                <div className="flex my-2 md:w-1/2">
                    <FaWandMagicSparkles className="w-8 h-8 text-green" />
                    <div className="flex flex-col px-2">
                        <h2 className="font-bold text-green">Authenticity</h2>
                        <p className="text-sm">rnelnfln rfnlrnfk rfnkflnf nelnfln rfnlrnfk rfnkfln nelnfln rfnlrnfk rfnkfln</p>
                    </div>
                </div>
                <div className="flex  my-2 md:w-1/2">
                    <FaWandMagicSparkles className="w-8 h-8 text-green" />
                    <div className="flex flex-col px-2">
                        <h2 className="font-bold text-green">Availability</h2>
                        <p className="text-sm">rnelnfln rfnlrnfk rfnkflnf nelnfln rfnlrnfk rfnkfln nelnfln rfnlrnfk rfnkfln nelnfln rfnlrnfk rfnkfln</p>
                    </div>
                </div>
                <div className="flex my-2 md:w-1/2">
                    <FaWandMagicSparkles className="w-8 h-8 text-green" />
                    <div className="flex flex-col px-2">
                        <h2 className="font-bold text-green">Multiple packages </h2>
                        <p className="text-sm">rnelnfln rfnlrnfk rfnkflnf nelnfln rfnlrnfk rfnkfln nelnfln rfnlrnfk rfnkfln </p>
                    </div>
                </div>
                <div className="flex my-2 md:w-1/2">
                    <FaWandMagicSparkles className="w-8 h-8 text-green" />
                    <div className="flex flex-col px-2">
                        <h2 className="font-bold text-green">Fast delivery</h2>
                        <p className="text-sm">rnelnfln rfnlrnfk rfnkflnf nelnfln rfnlrnfk rfnkfln nelnfln rfnlrnfk rfnkfln </p>
                    </div>
                </div>

            </div>
            <div className="pt-8 w-full h-fit">
                <PhotoAlbum
                    layout="rows"
                    photos={photos}
                />
            </div>
        </div>
        <NoImageBanner title="For every need and occasion" subtitle="For both individuals and professionals, I'm ready to be part of your project. According to your values and identity, I offer you a set of flexible packages that best fit your needs. I would love to collaborate with you to reach your goals and expectations so I will love to hear from you from the button below." />


        <FAQ />

    </div>
}