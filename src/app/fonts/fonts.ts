import {  Poppins, Playfair_Display, Dancing_Script } from 'next/font/google'



const poppins = Poppins({
    weight: "400",
    preload: false,
})
const dancingscript = Dancing_Script({
    weight: "400",
    preload: false,
})
const PlayfairDisplay = Playfair_Display({
    weight: "600",
    preload: false,
})

export {  poppins, PlayfairDisplay, dancingscript }