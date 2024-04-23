import { poppins } from "@/app/fonts/fonts";
import NoImageBanner from "../../_components/no_image_banner";
import GreenTitle from "../../_components/green_title";
import GreenSubTitle from "../../_components/green_subtitle";
import PhotoStyleBanner from "../../_components/photography_style_banner";
import Image from "next/image";

export default function Editing() {
    return (
        <div className="flex flex-col ">
            <PhotoStyleBanner title="Wedding photograher in Brussels" imgUrl="/jpg/wedding-portfolio.jpg" />
            <div style={poppins.style} className=" sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8  flex flex-col ">
                <div className="mt-8 flex flex-col md:flex-row justify-between ">
                    <Image height={600} width={600} src="/jpg/wedding-portfolio.jpg" alt="" className="bg-cover mr-8 h-60 md:h-96  object-cover bg-center bg-no-repeat" />
                    <div className="flex flex-col w-full md:w-3/5 pt-8 md:pt-0 ">
                        <GreenSubTitle title="My Story" />
                        <GreenTitle title="Wedding Photography" />

                        <div className=" text-justify">

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, aliquam? Consequatur illum eveniet delectus, soluta vero est labore voluptatum nostrum, eum sequi ab ipsum aliquid unde? Minima quaerat totam eum.</p>
                            <br />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, aliquam? Consequatur illum eveniet delectus, soluta vero est labore voluptatum nostrum, eum sequi ab ipsum aliquid unde? Minima quaerat totam eum.</p>
                        </div>
                    </div>


                </div>
                <div className="mt-8 flex flex-col md:flex-row justify-between ">
                    <div className="flex flex-col gap-y-8 mr-8 w-full md:w-3/5  ">
                        <div className="flex flex-col ">
                            <h1 className="  font-bold text-lg w-fit border-b-2 text-midpink">Versatile session types</h1>

                            <div className=" text-justify">

                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, aliquam? Consequatur illum eveniet delectus, soluta vero est labore voluptatum nostrum, eum sequi ab ipsum aliquid unde? Minima quaerat totam eum.</p>
                                <br />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, aliquam? Consequatur illum eveniet delectus, soluta vero est labore voluptatum nostrum, eum sequi ab ipsum aliquid unde? Minima quaerat totam eum.</p>
                            </div>
                        </div>
                        <div className="flex flex-col ">
                            <h1 className="  font-bold text-lg w-fit border-b-2 text-midpink">Versatile session types</h1>

                            <div className=" text-justify">

                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, aliquam? Consequatur illum eveniet delectus, soluta vero est labore voluptatum nostrum, eum sequi ab ipsum aliquid unde? Minima quaerat totam eum.</p>
                                <br />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, aliquam? Consequatur illum eveniet delectus, soluta vero est labore voluptatum nostrum, eum sequi ab ipsum aliquid unde? Minima quaerat totam eum.</p>
                            </div>
                        </div>
                    </div>
                    <Image height={600} width={600} src="/jpg/wedding-portfolio.jpg" alt="" className="bg-cover pt-8 md:pt-0 h-60 md:h-96  object-cover bg-center bg-no-repeat" />


                </div>

            </div>
            <NoImageBanner title="For every need and occasion" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolore quo soluta ullam earum maiores ipsa ad voluptates tempora incidunt! Ut pariatur labore commodi delectus corrupti molestias optio tenetur beatae?" />
            <div style={poppins.style} className=" sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-12 py-2 md:py-8  flex flex-col ">
              blabla
            </div>
        </div>
    )

}