import GalleryItem from "../../_components/gallery_item";
import GreenSubTitle from "../../_components/green_subtitle";
import GreenTitle from "../../_components/green_title";
import PhotoStyleBanner from "../../_components/photography_style_banner";

export default function Weddings() {


    return (
        <div className="flex flex-col ">
            <PhotoStyleBanner title="Wedding photograher in Brussels" imgUrl="/jpg/wedding-portfolio.jpg" />
            <div className="mt-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 md:px-12 py-2 md:py-8  flex flex-col ">
                <div className="flex flex-col md:flex-row justify-between ">
                    <div className="flex flex-col w-full md:w-2/5  mr-8">
                        <GreenTitle title="Wedding Photography" />
                        <GreenSubTitle title="My Story" />
                        <div className=" text-justify">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, aliquam? Consequatur illum eveniet delectus, soluta vero est labore voluptatum nostrum, eum sequi ab ipsum aliquid unde? Minima quaerat totam eum.</p>
                            <br />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, aliquam? Consequatur illum eveniet delectus, soluta vero est labore voluptatum nostrum, eum sequi ab ipsum aliquid unde? Minima quaerat totam eum.</p>
                        </div>
                    </div>

                    <img src="/jpg/wedding-portfolio.jpg" alt="" className="bg-cover pt-8 md:pt-0 h-60 md:h-96 w-full object-cover bg-center bg-no-repeat" />
                </div>

                <div className="md:pt-5 pt-8">
                    <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                        <img src="https://source.unsplash.com/bYuI23mnmDQ" />
                        <img src="https://source.unsplash.com/Nllx4R-2c3o" />
                        <img src="https://source.unsplash.com/lp40q07DIe0" />
                        <img src="https://source.unsplash.com/wfalq01jJuU" />
                        <img src="https://source.unsplash.com/rMHNK_skwwU" />
                        <img src="https://source.unsplash.com/WBMjuGpbrCQ" />
                        <img src="https://source.unsplash.com/nCUZ5BYBL_o" />
                        <img src="https://source.unsplash.com/3u4fzMQZhjc" />
                        <img src="https://source.unsplash.com/haOIqIPSwps" />
                        <img src="https://source.unsplash.com/3UrYD7NNVxk" />
                        <img src="https://source.unsplash.com/fm1JKDItlVM" />
                        <img src="https://source.unsplash.com/qPpq1EVs8vw" />
                        <img src="https://source.unsplash.com/xRyL63AwZFE" />
                        <img src="https://source.unsplash.com/XeNKWTiCPNw" />
                        <img src="https://source.unsplash.com/DFt3T5r_4FE" />
                        <img src="https://source.unsplash.com/Ebwp2-6BG8E" />
                    </div>
                </div>
            </div >
        </div>
    )
}