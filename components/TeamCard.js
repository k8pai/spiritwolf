import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import MemberCard from "./MemberCard"

export default function TeamCard(props) {

  return (
    <div className="py-[25px] select-none">
        <motion.div
            initial={{
                y: 20,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                type: 'spring',
                bounce: .6,
                duration: 1.5,
                stiffness: 100 
            }}
            className="main-team-header text-center my-6">
            <h1 className="text-4xl font-fjalla text-slate-100 uppercase font-bold">{props.sec}</h1>
        </motion.div>
        <div className="2xl:max-w-[1600px] xl:max-w-[1200px] lg:max-w-[850px] md:max-w-[600px] sm:max-w-[400px] xsm:max-w-[400px] mx-auto flex justify-center items-start flex-initial flex-wrap place-content-center place-items-center">
            {props.memb.map((members) => {
                return (
                    <MemberCard member={members} />
                );
            })}
        </div>
    </div>
  )
}
