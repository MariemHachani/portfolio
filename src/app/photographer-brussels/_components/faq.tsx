import { PlayfairDisplay, poppins } from "@/app/fonts/fonts";

export default function FAQ() {
    return (
        <div className="flex flex-col items-center justify-center px-4 md:px-12 py-2 md:py-8 ">

            <div style={PlayfairDisplay.style} className="flex flex-col items-center">
                <h2 className="font-bold text-5xl mt-5 tracking-tight">
                    FAQ
                </h2>
                <p className="text-neutral-500 text-xl mt-3">
                    Frequenty asked questions
                </p>
            </div>
            <div style={poppins.style} className="flex flex-col w-4/5 divide-y divide-neutral-200 mt-8">
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span className="group-open:font-bold"> How Long have you been a photographer?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            I started my photography journey in 2013 as an amateur learning everything about light, composition and subject. I started offering my services in 2017 as a side hustle for clients in different sets from family photoshoots to birthdays and weddings. In 2022, I had worked with corporate clients to cover their events and seminars. I also helped in presenting their services and products. Now I&apos;m working towards making photography my full time job, hoping to meet you along the way.
                        </p>
                    </details>
                </div>
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span className="group-open:font-bold"> How many pictures do you deliver?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            It depends on the type of session you choose and the package you pick. In each session type I usually offer multiple packages from the basic service for those on-the-go to the longer more detailed story-telling shoots. The smallest package I have in the lifestyle session type includes 5 edited pictures for example.
                        </p>
                    </details>
                </div>
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span className="group-open:font-bold"> Do you edit the pictures?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            Yes I edit the pictures. I play with exposure and colors. I can correct the small distracting flaws in the pictures such as removing acne. However more advanced editing like object removal or manipulation will be charged on demand.
                        </p>
                    </details>
                </div>
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span className="group-open:font-bold"> How will I recieve the pictures?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            The photos can be delivered in two different ways. The first one is via google drive link that allows you to download the edited pictures in their full original quality. The second for the larger packages will be a USB stick with all your edited photos.
                        </p>
                    </details>
                </div>
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span className="group-open:font-bold"> Do you travel? Are there any additional transportation fees?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            Yes I do. For bookings in Brussels, the transportation fees are included in the offer. However, the price for the transportation or accomodation will be added to the price of the shoots outside of Brussels.
                        </p>
                    </details>
                </div>
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span className="group-open:font-bold"> How do I book a date?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-neutral-600  mt-3 group-open:animate-fadeIn ">
                            Simply contact me through the <a className="text-green font-bold" href="/photographer-brussels/contact">contact page </a>
                            or on social media. Please mention the date and the type of session you&apos;re interested in so we can start planning accordingly.
                        </p>
                    </details>
                </div>
            </div>
        </div>

    )
}