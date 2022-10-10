import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";

export default function fullmoon() {

    const container = {
        hidden:{ opacity: 0},
        visible:{ opacity: 1, transition:{ staggerChildren: .1,}}
    }
    const items = {
        hidden:{ opacity: 0, y: 20,},
        visible:{ opacity: 1, y:0, transition:{ type: "spring", bounce: .5, stiffness:100,}, },
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
                    content="Spirit Wolf NFT | Pack of Wolf NFTs Ready to Takeover | Spirit Wolf Full Moon Airdrops details | Spirit Wolf NFT Airdrop on Full Moon and Full Moon Merch Drops." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://spiritwolf.io/about/fullmoon" />
                <meta property="og:title" content="Spirit Wolf NFT - Full Moon Airdrops | Spirit Wolf NFT Full Moon Airdrops and Merch Drops." />
                <meta property="og:description"
                    content="Spirit Wolf NFT | Pack of Wolf NFTs Ready to Takeover | Spirit Wolf Full Moon Airdrops details | Spirit Wolf NFT Airdrop on Full Moon and Full Moon Merch Drops." />
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
				<title>Spiritwolf - Fullmoon</title>
            </Head>
            <div className="min-h-screen bg-[#24242e] h-fit relative">
                <main className="relative min-h-screen h-full flex flex-col justify-between">
                    <Header />
                    <section className="TeamsSection -z-0 relative w-[100%] min-h-full flex-col justify-center items-center mx-auto">
                        <div className="min-w-screen w-full flex items-center lg:flex-col md:flex-col sm:flex-col xsm:flex-col">
                            <div className="basis-2/3 select-none w-[90%] mx-auto px-[50px]">
                                <motion.div variants={container} initial={"hidden"} animate={"visible"} className="main-team-header font-fjalla tracking-widest text-left">
                                    <motion.h1 variants={items} className="text-6xl text-slate-100 uppercase leading-normal font-bold tracking-wider sm:text-4xl xsm:text-3xl">Full Moon Airdrops</motion.h1>
                                    <motion.h1 variants={items} className="text-2xl pt-[25px] text-slate-300 capitalize leading-relaxed font-normal sm:text-xl xsm:text-lg">Spirit Wolf will be building its prestige around the concept of &quot;FULL MOON&quot;. This concept resonates with the werewolf theme we got here going and the FULL MOON time when the werewolves are at their best form!</motion.h1>
                                    <motion.h1 variants={items} className="text-2xl pt-[25px] text-slate-300 capitalize leading-relaxed font-normal sm:text-xl xsm:text-lg">Our brand will be timing its important events, particularly on FULL MOON. Most of our important announcements, merch drops, we3 collectible airdrops, or NFT airdrops, will be timed on FULL MOON.</motion.h1>
                                    <motion.h1 variants={items} className="text-2xl pt-[25px] text-slate-300 capitalize leading-relaxed font-normal sm:text-xl xsm:text-lg">By accomplishing this, our brand will have a unique concept that is different from other projects or streetwear brands. Also, this is the theme we want to continue and what we want our brand to be known for - THE FULL MOON DROPS! </motion.h1>
                                    <motion.h1 variants={items} className="text-3xl pt-[25px] text-slate-100 uppercase leading-normal font-bold tracking-wider sm:text-xl xsm:text-3xl">SPIRIT WOLF 1ST AIRDROP</motion.h1>
                                    <motion.h1 variants={items} className="text-2xl pt-[25px] text-slate-300 capitalize leading-relaxed font-normal sm:text-xl xsm:text-lg">For our first airdrop, a snapshot of the holder wallets will be taken on the next full moon after the mint. More info. are yet to be announced, but there will be different teirs of airdrops and these will be burn-to-redeem web2 collectible once we open our burning mechanism. These web2 collectibles will also have their own ranks, depending on which level of the airdrop you&apos;re burning.</motion.h1>
                                </motion.div>
                            </div>
                            <motion.div initial={{opacity:0, scale:.95, }} animate={{opacity:1, scale:1, transition:{ delay:.45, duration:.5, type:"spring",}}} className="basis-1/3 min-h-full h-full w-full relative aspect-square">
                                <Image
                                    src={"/images/wolfThunder.png"}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    alt="Wolf with thunder."
                                    priority
                                    loading="eager"
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