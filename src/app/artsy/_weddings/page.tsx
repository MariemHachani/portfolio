import { PlayfairDisplay, poppins } from "@/app/fonts/fonts";

export default function Wedding() {
    return(
        <div className=" flex py-4 h-96">
            <div className="flex-1 ">
            <div className="pr-16">
                <h1 style={PlayfairDisplay.style} className="font-bold text-2xl text-midpink">Wedding Photography</h1>
                <p style={poppins.style} className="pt-8  text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur asperiores optio est voluptates expedita sint minus dolore qui, sed cum laboriosam, ratione temporibus? Necessitatibus eveniet natus nihil dolore accusamus quia.</p>
                <button className="my-8 py-2 px-2 bg-midpink text-white rounded-md uppercase">See More</button>
            </div>
            </div>
            <div className="flex-1">
                <img className="object-cover h-full w-full" src="/jpg/wedding-photoshoot.jpg" alt=""></img>
            </div>
        </div>
    )
    
};
