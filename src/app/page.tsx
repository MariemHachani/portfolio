
import Link from "next/link"
import Image from "next/image";
import LeftBrain from "../../public/svg/leftBrain";
import RightBrain from "../../public/svg/rightBrain";
import { poppins } from "@/fonts"
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/photographer-brussels');
}
