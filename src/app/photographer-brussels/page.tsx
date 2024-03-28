'use client'

import { useEffect } from "react"
import About from "./_components/about"
import Wedding from "./_weddings/page"
import Lifestyle from "./_lifestyle/page"
import Product from "./_products/page"
import { PlayfairDisplay, poppins } from "../fonts/fonts"
import Events from "./_events/page"
import Services from "./_components/service"
import Footer from "./_components/footer"
import NoImageBanner from "./_components/no_image_banner"

export default function Page() {
  useEffect(() => {
    //  throw new Error({statusCode:300});
  }, [])

  return (
    <div className="flex flex-col ">

      <div className="-mt-16 bg-cover bg-fixed bg-center bg-no-repeat " style={{ backgroundImage: "url(/jpg/wedding-shooting.jpg)" }}>
        <div className="mt-96 bg-white">

          <About />
        </div>
      </div>
      <NoImageBanner title="Need a photograher?" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolore quo soluta ullam earum maiores ipsa ad voluptates tempora incidunt! Ut pariatur labore commodi delectus corrupti molestias optio tenetur beatae?" />


      <div className="w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 md:px-12 py-2 md:py-8">
        <Wedding />
        <Lifestyle />
        <Product />
        <Events />
      </div>
      <Services />

      <div className="flex justify-center overflow-hidden  relative h-96">
        <img className="object-cover w-full h-full blur-sm" src="/jpg/family-photoshoot.jpg" alt=""></img>
        <div className="absolute top-0 bg-midpink-extra w-full h-full ">
          <div className="flex flex-col h-full items-center justify-center sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 md:px-12 py-2 md:py-8 ">
            <h2 style={PlayfairDisplay.style} className="text-2xl text-midpink uppercase">Need a photograher?</h2>
            <p className="text-center text-white pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolore quo soluta ullam earum maiores ipsa ad voluptates tempora incidunt! Ut pariatur labore commodi delectus corrupti molestias optio tenetur beatae?</p>
            <button style={poppins.style} className="mt-4 py-2 px-2 text-sm bg-midpink text-white rounded-md uppercase">Get in touch</button>
          </div>
        </div>
      </div>

    </div>
  )
}
