import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function MemberCard(props) {
    if(props.member.twtUrl == "null"){
        return (
            <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay:.15, type: "spring", stiffness: 100 }} className="card rounded-lg p-4 shadow-xl transition duration-300 min-w-[400px] xsm:min-w-[300px] hover:border-blue-400 m-2">
                <div className="text-slate-50 flex items-center xsm:flex-col">
                    <motion.div initial={{ opacity: 0, scale:.7}} animate={{ opacity: 1, scale:1}} transition={{ delay:.15, type: "spring", stiffness: 100 }} className="imageclass xsm:mx-auto aspect-square h-[100px] w-[100px] relative">
                        <Image
                            className="rounded-full"
                            src={props.member.imgUrl}
                            layout="fill"
                            objectFit="contain"
                            alt={props.member.imgAlt}
                            priority
                        />
                    </motion.div>
                    <div className="w-full h-full flex-col justify-center pl-6">
                        <motion.div initial={{ opacity: 0, x:30}} animate={{ opacity: 1, x:0}} transition={{ delay:.25, type: "spring", stiffness: 100 }} className="headData">
                            <h3 className="text-2xl font-fjalla tracking-wider capitalize">{props.member.name}</h3>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x:30}} animate={{ opacity: 1, x:0}} transition={{ delay:.35, type: "spring", stiffness: 100 }} className="addData">
                            <div className="text-slate-200 tracking-wider capitalize">{props.member.role}</div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        );
    }else{
        return (
            <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay:.15, type: "spring", stiffness: 100 }} className="card rounded-lg p-4 shadow-xl transition duration-300 min-w-[400px] xsm:min-w-[300px] hover:border-blue-400 m-2">
                <div className="text-slate-50 flex items-center xsm:flex-col">
                    <motion.div initial={{ opacity: 0, scale:.7}} animate={{ opacity: 1, scale:1}} transition={{ delay:.15, type: "spring", stiffness: 100 }} className="imageclass xsm:mx-auto aspect-square h-[100px] w-[100px] relative">
                        <Image
                            className="rounded-full"
                            src={props.member.imgUrl}
                            layout="fill"
                            objectFit="contain"
                            alt={props.member.imgAlt}
                            priority
                        />
                    </motion.div>
                    <div className="w-full h-full flex-col justify-center pl-6">
                        <motion.div initial={{ opacity: 0, x:30}} animate={{ opacity: 1, x:0}} transition={{ delay:.25, type: "spring", stiffness: 100 }} className="headData">
                            <h3 className="text-2xl font-fjalla tracking-wider capitalize">{props.member.name}</h3>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x:30}} animate={{ opacity: 1, x:0}} transition={{ delay:.35, type: "spring", stiffness: 100 }} className="addData">
                            <div className="text-slate-200 tracking-wider capitalize">{props.member.role}</div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x:30}} animate={{ opacity: 1, x:0}} transition={{ delay:.45, type: "spring", stiffness: 100 }} className="linkData mt-2">
                            <Link href={props.member.twtUrl}>
                                <svg className="mx-0 transition fill-slate-200 duration-200 hover:fill-[#1DA1F2] cursor-pointer" role="img" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        )
    }
}
