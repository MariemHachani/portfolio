import { PlayfairDisplay, dancingscript, poppins } from "../../fonts/fonts"

export default function About() {

    return (
        <div className="sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8 text-center flex flex-col items-center">
            <h1 style={PlayfairDisplay.style} className="text-green font-bold text-2xl uppercase">A professional photographer in Brussels</h1>
            <h2 style={dancingscript.style} className="text-green font-bold text-2xl ">My name is Mariem Hachani</h2>
            <div style={poppins.style} >
                <p className="pt-8 ">Hi, I'm Mariem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consequatur ut, eveniet explicabo atque nihil. Ab, sit? Molestiae fugit quis doloribus blanditiis cupiditate asperiores sit! Accusantium possimus aspernatur corrupti debitis!</p>
                <p className="pt-8 "><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dicta odio tempore voluptatem deserunt. Iste reiciendis praesentium dolorum, delectus pariatur aspernatur, magni debitis iusto fugit officiis possimus quasi, quidem facilis.</b></p>
                <p className="pt-8 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni labore natus quisquam in! Corporis, quibusdam quisquam. Eius molestias omnis pariatur officia voluptatum ullam excepturi voluptas eveniet? Libero, cumque facere.</p>
            </div>
        </div>
    )
}