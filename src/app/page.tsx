
import Link from "next/link"
import Image from "next/image";
import LeftBrain from "../../public/svg/leftBrain";
import RightBrain from "../../public/svg/rightBrain";
import {         poppins } from "@/fonts"

export default function Home() {
  return (
    <main className="flex flex-col items-center py-16">
      
     <p className="text-3xl text-darkgreen py-10" style={poppins.style}>Discover my interests and skills</p>
     <div className="flex flex-row justify-center ">
      <Link href="/logical" prefetch={false}><LeftBrain height={300}width={400}/></Link>
      <Link href="/photographer-brussels" prefetch={false}><RightBrain height={300}width={400}/></Link>
      
      </div>
    </main>
  )
}
