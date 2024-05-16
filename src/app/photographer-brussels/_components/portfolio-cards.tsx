import { poppins } from "@/app/fonts/fonts"
import Card from "./card"

export default function PortfolioCards() {
    let cards = [
        {
            id: 0,
            lib: "weddings",
            url: "/photographer-brussels/portfolio/wedding-photography",

            img: "../jpg/wedding-photoshoot.webp"

        },
        {
            id: 1,
            lib: "lifestyle",
            url: "/photographer-brussels/portfolio/lifestyle-photography",

            img: "../jpg/lifestyle-photoshoot.webp"

        },
        {
            id: 2,
            lib: "products",
            url: "/photographer-brussels/portfolio/product-photography",

            img: "../jpg/product-photoshoot.webp"

        },
        {
            id: 3,
            lib: "events",
            url: "/photographer-brussels/portfolio/event-photography",

            img: "../jpg/events-photoshoot.webp"

        },
    ]
    return (
        <div style={poppins.style}>
            <div className="mt-16 flex flex-wrap justify-evenly items-center">
                {cards && cards.map((card) => (
                    <Card key={card.id} lib={card.lib} url={card.url} img={card.img} />
                ))}
            </div>
        </div>
    )
}
