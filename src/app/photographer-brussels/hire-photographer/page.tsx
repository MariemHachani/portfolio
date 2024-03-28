import PhotoAlbum from "react-photo-album";
import { poppins } from "@/app/fonts/fonts";
import GreenSubTitle from "../_components/green_subtitle";
import GreenTitle from "../_components/green_title";
import PageBanner from "../_components/page_banner";
import { FaWandMagicSparkles } from "react-icons/fa6";
import NoImageBanner from "../_components/no_image_banner";

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
            <div style={poppins.style} className="mt-8 text-sm"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sit modi sint necessitatibus esse eaque, commodi ab ad earum quasi ullam ea qui harum recusandae ipsam mollitia. Dignissimos, minus accusantium.</p></div>
            <div style={poppins.style} className="mt-8 flex flex-wrap ">
                <div className="flex my-2 md:w-1/2">
                    <FaWandMagicSparkles className="w-8 h-8 text-green" />
                    <div className="flex flex-col px-2">
                        <h2 className="font-bold text-green">Clean look</h2>
                        <p className="text-sm">rnelnfln rfnlrnfk rfnkflnf nelnfln rfnlrnfk rfnkfln nelnfln rfnlrnfk rfnkfln</p>
                    </div>
                </div>
                <div className="flex  my-2 md:w-1/2">
                    <FaWandMagicSparkles className="w-8 h-8 text-green" />
                    <div className="flex flex-col px-2">
                        <h2 className="font-bold text-green">Clean look</h2>
                        <p className="text-sm">rnelnfln rfnlrnfk rfnkflnf nelnfln rfnlrnfk rfnkfln nelnfln rfnlrnfk rfnkfln nelnfln rfnlrnfk rfnkfln</p>
                    </div>
                </div>
                <div className="flex my-2 md:w-1/2">
                    <FaWandMagicSparkles className="w-8 h-8 text-green" />
                    <div className="flex flex-col px-2">
                        <h2 className="font-bold text-green">Clean look</h2>
                        <p className="text-sm">rnelnfln rfnlrnfk rfnkflnf nelnfln rfnlrnfk rfnkfln nelnfln rfnlrnfk rfnkfln </p>
                    </div>
                </div>
                <div className="flex my-2 md:w-1/2">
                    <FaWandMagicSparkles className="w-8 h-8 text-green" />
                    <div className="flex flex-col px-2">
                        <h2 className="font-bold text-green">Clean look</h2>
                        <p className="text-sm">rnelnfln rfnlrnfk rfnkflnf nelnfln rfnlrnfk rfnkfln nelnfln rfnlrnfk rfnkfln </p>
                    </div>
                </div>
                <div className="flex my-2 md:w-1/2">
                    <FaWandMagicSparkles className="w-8 h-8 text-green" />
                    <div className="flex flex-col px-2">
                        <h2 className="font-bold text-green">Clean look</h2>
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
        <NoImageBanner title="For every need and occasion" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolore quo soluta ullam earum maiores ipsa ad voluptates tempora incidunt! Ut pariatur labore commodi delectus corrupti molestias optio tenetur beatae?" />

        <div className="flex flex-col items-center justify-center px-4 md:px-12 py-2 md:py-8 ">

            <div className="flex flex-col items-center">
                <h2 className="font-bold text-5xl mt-5 tracking-tight">
                    FAQ
                </h2>
                <p className="text-neutral-500 text-xl mt-3">
                    Frequenty asked questions
                </p>
            </div>
            <div className="flex flex-col w-4/5 divide-y divide-neutral-200 mt-8">
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span> What is a SAAS platform?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            SAAS platform is a cloud-based software service that allows users to access
                            and use a variety of tools and functionality.
                        </p>
                    </details>
                </div>
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span> How does  billing work?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            We offers a variety of billing options, including monthly and annual subscription plans,
                            as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
                            card or other secure online payment method.
                        </p>
                    </details>
                </div>
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span> Can I get a refund for my subscription?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            We offers a 30-day money-back guarantee for most of its subscription plans. If you are not
                            satisfied with your subscription within the first 30 days, you can request a full refund. Refunds
                            for subscriptions that have been active for longer than 30 days may be considered on a case-by-case
                            basis.
                        </p>
                    </details>
                </div>
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span> How do I cancel my subscription?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            To cancel your We subscription, you can log in to your account and navigate to the
                            subscription management page. From there, you should be able to cancel your subscription and stop
                            future billing.
                        </p>
                    </details>
                </div>

            </div>
        </div>
    </div>
}