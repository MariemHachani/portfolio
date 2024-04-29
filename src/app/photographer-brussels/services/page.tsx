import { dancingscript, PlayfairDisplay, poppins } from "@/app/fonts/fonts";
import PageBanner from "../_components/page_banner";
import Card from "../_components/card";
import NoImageBanner from "../_components/no_image_banner";

export default function Page() {
    let cards = [
        {
            id: 0,
            lib: "shooting",
            url: "/photographer-brussels/services/photoshoots",
            img: "../jpg/wedding-photoshoot.jpg"
        },
        {
            id: 1,
            lib: "editing",
            url: "/photographer-brussels/services/editing",
            img: "../jpg/lifestyle-photoshoot.jpg"
        },
    ]
    return (
        <div className="flex flex-col ">

            <PageBanner title="My servives as a photographer and editor"
                subtitle="For individuals and corporate clients, I offer a multitude of services that suites your needs"
                imgUrl="./jpg/portfolio-banner.jpg" />

            <div className="mt-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8  flex flex-col items-center text-center">
                <h1 style={PlayfairDisplay.style} className="text-green font-bold text-2xl uppercase">Let&apos;s discover</h1>
                <h2 style={dancingscript.style} className="text-green text-center font-bold text-2xl ">A variety of offers from the first step in your project to post-production</h2>
                <p style={poppins.style} className="mt-8">As a photographer that tried so many different niches, I learned to manage all stages of the production process from planning to editing. I had the chance to learn advanced photo editing from color correction on Adobe Lightroom to enhancements and photo manipultion with Adobe Photoshop. I offer both shooting and editing services for clients.</p>
                <div style={poppins.style}>
                    <div className="mt-16 flex flex-wrap justify-evenly items-center">
                        {cards && cards.map((card) => (
                            <Card key={card.id} lib={card.lib} url={card.url} img={card.img} />
                        ))}
                    </div>
                </div>

            </div >
            <NoImageBanner title="For every need and occasion" subtitle="For both individuals and professionals, I'm ready to be part of your project. According to your values and identity, I offer you a set of flexible packages that best fit your needs. I would love to collaborate with you to reach your goals and expectations so I will love to hear from you from the button below." />
        </div>
    )
}