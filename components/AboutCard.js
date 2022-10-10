import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export default function AboutCard(props) {
    const abtHead = useRef(null);
    useEffect(() => {
        const el = abtHead.current;
		gsap.fromTo(el, {opacity: 0, y:85},{opacity: 1, y:0, duration: .6, scrollTrigger: { trigger: el, toggleActions: "restart none none none" }});
    }, [])
    return (
        <div className="group flex-col justify-center m-4 text-slate-50 xsm:max-w-[304px]" ref={abtHead}>
            <Link className="streetwear" href={props.prp.cLink} >
                <div className="card cursor-pointer border-2 border-slate-400 group-hover:border-[#22d3ee] rounded-lg transition duration-300 flex-1 shadow-2xl shadow-slate-900">
                    <div className="flex justify-center items-center xsm:flex-col">
                        <div className="flex-col text-center">
                            <div className="imgData relative w-[380px] xsm:w-[300px] h-[380px] xsm:h-[300px]">
                                <Image
                                    src={props.prp.cImg}
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                    alt={props.prp.cAlt}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link className="streetwear" href={props.prp.cLink}>
                <div className="card cursor-pointer border-2 border-slate-400 rounded-lg p-6 transition duration-150 flex-1 w-[100%] hover:opacity-90 group-hover:border-[#22d3ee] group-hover:text-[#22d3ee] mt-4 shadow-2xl shadow-slate-900">
                    <div className="flex justify-center items-center xsm:flex-col">
                        <div className="flex-col text-center">
                            <div className="headData">
                                <h3 className="text-2xl font-fjalla tracking-wide capitalize sm:text-xl xsm:text-xl">{props.prp.cHead}</h3>
                            </div>
                            <div className="addData pt-3">
                                <div className="capitalize tracking-wide sm:text-md xsm:text-md">{props.prp.cCont}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
