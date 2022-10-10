import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import Head from "next/head";
import { Container } from "postcss";
import { motion } from "framer-motion";

export default function streetwear() {

    const container = {
        hidden:{opacity: 0,},
        show:{opacity:1, transition:{ staggerChildren: .1,} },
    }
    const items = {
        hidden:{ opacity: 0, y:20, },
        show:{ opacity: 1, y: 0, transition:{ type: "bounce", stiffness: 100, bounce: .5}}
    }

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#24242e" />
                <meta name="description"
                    content="Spirit Wolf NFT | Pack of Wolf NFTs Ready to Takeover | Spirit Wolf Building the Streetwear Brand | Spirit Wolf NFT merch designs and more!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://spiritwolf.io/about/streetwear" />
                <meta property="og:title" content="Spirit Wolf NFT - Streetwear Brand | Spirit Wolf NFT - Building the Streetwear Brand." />
                <meta property="og:description"
                    content="Spirit Wolf NFT | Pack of Wolf NFTs Ready to Takeover | Spirit Wolf Building the Streetwear Brand | Spirit Wolf NFT merch designs and more!" />
                <meta property="og:image" content="https://spiritwolf.io/webcard.jpeg" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://twitter.com/SpiritWolfNFT" />
                <meta property="twitter:title" content="Pack Of Wolves Ready To Takeover." />
                <meta property="twitter:description"
                    content="Spirit Wolf NFT - Streetwear Brand in building | Spirit Wolf Full Moon Airdrops | Spirit Wolf Roadmap and Socials | Join The Pack!" />
                <meta property="twitter:image" content="https://spiritwolf.io/img/img_spiritwolf.webp" />
                <meta name="keywords"
                    content="spiritwolf, NFT, Spiritwolf nft, sprit wolf, wolf, @spiritWolf, alphawolf, streetwear, Solana, upcoming solana, awesome nft, amazing nft, pfp nfts, spiritwolf twitter, spiritwolf mint, spiritwolf instagram, rogwolf, alphawolf, join the pack, spiritWolf roadmap, spiritwolf teams, spiritwolf about, latest nft, full moon airdrop, nft airdrops, solana airdrops, fullmoon nft, blue chip nft." />
                <meta name="author" content="k8pai" />
				<title>Spiritwolf - Streetwear</title>
            </Head>
            <div className="min-h-screen bg-[#24242e] h-fit relative">
                <main className="relative min-h-screen h-full flex flex-col justify-between">
                    <Header />
                    <section className="TeamsSection -z-0 relative w-[100%] min-h-full flex-col justify-center items-center mx-auto">
                        <div className="min-w-screen w-full flex items-center lg:flex-col md:flex-col sm:flex-col xsm:flex-col">
                            <div className="basis-2/3 select-none w-[90%] mx-auto px-[50px] xsm:px-[5px] xsm:mt-[100px]">
                                <motion.div variants={container} initial={"hidden"} animate={"show"} className="main-team-header font-fjalla tracking-widest text-left">
                                    <motion.h1 variants={items} className="text-6xl text-slate-100 uppercase leading-normal font-bold tracking-wider sm:text-4xl xsm:text-3xl">Building a Streetwear Brand</motion.h1>
                                    <motion.h1 variants={items} className="text-2xl pt-[25px] text-slate-300 capitalize leading-relaxed font-normal sm:text-xl xsm:text-lg">Spirit Wolf will be building a streetwear brand influenced by Off-White and Supreme. We&apos;ll be dropping seasonal limited merch drops. But the good sh** will be only accessible for our Alpha Wolf Holder!</motion.h1>
                                    <motion.h1 variants={items} className="text-2xl pt-[25px] text-slate-300 capitalize leading-relaxed font-normal sm:text-xl xsm:text-lg">Our flagship merch, which will be the face of that particular drop, will be only available for our Alpha Wolf Holders! By doing this we&apos;re promoting reselling among our community, and if they don&apos;t have any connection to sell the merch, don&apos;t worry! We already have a STREETWEAR MARKETPLACE for it!</motion.h1>
                                    <motion.h1 variants={items} className="text-2xl pt-[25px] text-slate-300 capitalize leading-relaxed font-normal sm:text-xl xsm:text-lg">For our 1st drop, our Flagship Items will be Varsity Jackets, materials identical to that of luxury brands like Louis Vuitton & Versace. There will be other accessories and apparels dropping with our flagship varsity jackets too!</motion.h1>
                                    <motion.h1 variants={items} className="text-2xl pt-[25px] text-slate-300 capitalize leading-relaxed font-normal sm:text-xl xsm:text-lg">And you guess it right. This first drop will be on a FULL MOON.</motion.h1>
                                </motion.div>
                            </div>
                            <motion.div initial={{opacity: 0, scale: .95 }} animate={{opacity:1, scale: 1, transition:{ duration:.5, delay:.15, type:"tween"}}} className="basis-1/3 min-h-full h-full w-full flex justify-center items-center px-[50px] pt-[100px] aspect-square relative lg:hidden md:hidden sm:hidden xsm:hidden">
                                <Image
                                    className="mx-auto"
                                    src={"/images/wolfOnBox.png"}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    alt="wolf on box image."
                                    priority
                                />
                            </motion.div>
                        </div>
                    </section>
                    <Footer />
                </main>
            </div>
        </>
    );
}