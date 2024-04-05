import { PlayfairDisplay, dancingscript, poppins } from "../../fonts/fonts"

export default function About() {

    return (
        <div className=" sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-8  text-center flex flex-col items-center">
            <h1 style={PlayfairDisplay.style} className="text-green font-bold text-2xl uppercase">A professional photographer in Brussels</h1>
            <h2 style={dancingscript.style} className="text-green font-bold text-2xl ">My name is Mariem Hachani</h2>
            <div className="text-base" style={poppins.style} >
                <p className="pt-8 text-sm ">A photographer that loves to translate feelings into pictures that tell a story. <br />Originally from Tunisia, currently in Belgium, I started practicing photography in my hometown 10 years ago in an organisation where I discovered my passion.
                    The journey began with portrait sessions with friends and evolved to booking bigger events.</p>
                <p className="pt-8 "><b>Photography is my love language. From weddings, to portrait sessions, product photography and events coverage. <br /> I will love to showcase your story with a touch of my own personality. </b></p>
                <p className="pt-8 "> I enjoy all aspects of preparing, shooting and editing so I'm looking forward meeting you along the way.</p>
            </div>
        </div>
    )
}