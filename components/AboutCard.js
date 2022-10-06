import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export default function AboutCard() {
    const cont = useRef(null);
    const item = useRef(null);
    useEffect(() => {
        const el = cont.current;
        gsap.fromTo(el, {opacity:0}, {opacity:1, ScrollTrigger: { trigger: el }});
    }, [])
    return (
        <div className="group flex-col justify-center m-4 text-slate-50" ref={cont}>
            <Link className="streetwear" href='/about/streetwear'>
                <div className="card cursor-pointer border-2 border-slate-400 group-hover:border-[#22d3ee] rounded-lg transition duration-300 flex-1 shadow-2xl shadow-slate-900">
                    <div className="flex justify-center items-center xsm:flex-col">
                        <div className="flex-col text-center">
                            <div className="imgData relative w-[380px] xsm:w-[300px] h-[380px] xsm:h-[300px]">
                                <Image
                                    src={"/images/streetwear.jpg"}
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                    alt="Street wear picture."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link className="streetwear" href='/about/streetwear'>
                <div className="card cursor-pointer border-2 border-slate-400 rounded-lg p-6 transition duration-150 flex-1 w-[100%] hover:opacity-90 group-hover:border-[#22d3ee] group-hover:text-[#22d3ee] mt-4 shadow-2xl shadow-slate-900" ref={item}>
                    <div className="flex justify-center items-center xsm:flex-col">
                        <div className="flex-col text-center">
                            <div className="headData">
                                <h3 className="text-2xl font-fjalla tracking-wide capitalize sm:text-xl xsm:text-xl">Streetwear Brand</h3>
                            </div>
                            <div className="addData pt-3">
                                <div className="capitalize tracking-wide sm:text-md xsm:text-md">Streetwear Brand In Building.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
