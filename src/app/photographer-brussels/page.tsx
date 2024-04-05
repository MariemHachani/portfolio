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
import Link from "next/link"
import ImageCallToAction from "./_components/image_banner_call_to_action"

export default function Page() {
  useEffect(() => {
    //  throw new Error({statusCode:300});
  }, [])

  return (
    <div className="flex flex-col ">

      <div className="-mt-16 bg-cover bg-fixed bg-center bg-no-repeat " style={{ backgroundImage: "url(/jpg/wedding-shooting.jpg)" }}>
        <div className="mt-96  bg-white">

          <About />
        </div>
      </div>
      <NoImageBanner title="Need a photograher?" subtitle="I'm here to help you out! Being part of your project for me would mean dedicating all the ressources needed to fulfill your exectations, to share your values and be fully involved in your event. From weddings,  portrait sessions, product commercials to events, with a touch of my own character I will love to showcase your story." />


      <div className="w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8">
        <Wedding />
        <Lifestyle />
        <Product />
        <Events />
      </div>
      <Services />
      <ImageCallToAction title="Need a photograher?" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolore quo soluta ullam earum maiores ipsa ad voluptates tempora incidunt! Ut pariatur labore commodi delectus corrupti molestias optio tenetur beatae?" url="/photographer-brussels/contact" />
    </div>
  )
}
