import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "postcss";
import { useRef, useEffect } from "react";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import AboutCard from "../../components/aboutCard";
import gsap from "gsap"
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export default function About() {

	const container = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				staggerChildren: .2,
			}
		}
	}
	const items = {
		hidden: {
			opacity: 0, y: 20,
		},
		show: {
			opacity: 1, y: 0, transition: {
				duration: .5, type: "spring", stiffness: 100, bounce: 1, damping: 8,
			}
		}

	}

	const abtHead1 = useRef(null)
	const abtHead2 = useRef(null)
	const abtHead3 = useRef(null)
	useEffect(() => {
		const el1 = abtHead1.current;
		const el2 = abtHead2.current;
		const el3 = abtHead3.current;
		gsap.fromTo(el1, {opacity: 0, y:85},{opacity: 1, y:0, delay: .1, duration: .6, scrollTrigger: { trigger: el1 }}),
		gsap.fromTo(el2, {opacity: 0, y:85},{opacity: 1, y:0, delay: .2, duration: .6, scrollTrigger: { trigger: el2 }}),
		gsap.fromTo(el3, {opacity: 0, y:85},{opacity: 1, y:0, delay: .3, duration: .6, scrollTrigger: { trigger: el3 }})
	}, [])


	return (
		<>
			<Head>
				<meta charset="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta httpEquiv="Pragma" content="no-cache" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#24242e" />
				<meta name="description"
					content="Spirit Wolf NFT | Pack of Wolf NFTs Ready to Takeover | Spirit Wolf Project Info. and about | Learn more on benefits of becoming an Alpha Wolf" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://spiritwolf.io/about" />
				<meta property="og:title" content="Spirit Wolf NFT - About | Project info." />
				<meta property="og:description"
					content="Spirit Wolf NFT | Pack of Wolf NFTs Ready to Takeover | Spirit Wolf Project Info. and about | Learn more on benefits of becoming an Alpha Wolf." />
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
				<title>Spiritwolf - About</title>
			</Head>
			<div className="min-h-screen h-fit pb-50px relative">
				<div className="absolute -z-10 h-full w-full bg-blend-darken">
					<Image
						priority
						src="/images/indexAboutBG.jpg"
						layout="fill"
						objectFit="cover"
						quality={100}
						alt="index page background."
						loading="eager"
					/>
				</div>
				<main className="">
					<Header />
					<section className="TeamsSection -z-0 relative w-[100%] min-h-full flex-col justify-center items-center mx-auto">
						<div className="select-none w-[70%] mx-auto py-[150px]">
							<motion.div variants={container} initial={"hidden"} animate={"show"} className="main-team-header font-fjalla text-center">
								<motion.h1 variants={items} className="text-6xl text-slate-100 uppercase leading-normal font-bold tracking-widest sm:text-4xl xsm:text-3xl">spiritwolf nft</motion.h1>
								<motion.h1 variants={items} className="text-2xl pt-[25px] text-slate-300 capitalize tracking-wider leading-relaxed font-normal sm:text-xl xsm:text-lg">SpiritWolf is building a brand-centric project, primarily focusing on building a streetwear brand, which will be fueled by the Alpha Wolf Holders of our community. Our brand will be predominantly venturing into web2 after our web3 brand launch as a genesis NFT collection on Solana.</motion.h1>
								<motion.h1 variants={items} className="text-2xl pt-[25px] text-slate-300 capitalize tracking-wider leading-relaxed font-normal sm:text-xl xsm:text-lg">These ventures will include seasonal streetwear collection drops during &quot;Full Moon&quot;. Also, we will be coming up with a Streetwear Marketplace, and we&apos;ll be hosting, and showing up at a ton of streetwear meet-ups! Our Alpha Wolves are also showered with web3 utilities, which come under our Full Moon Air Drops.</motion.h1>
								<motion.h1 variants={items} className="text-2xl pt-[25px] text-slate-300 capitalize tracking-wider leading-relaxed font-normal sm:text-xl xsm:text-lg">These Air Drops you can burn to redeem your web2 collectible. Be the ALPHA WOLF  Holder and enjoy the benefits. Hopefully, we can meet you wolves IRL at one of our events!</motion.h1>
							</motion.div>
						</div>

						<div className="pt-[50px] select-none">
							<motion.div variants={container} initial={"hidden"} animate={"show"} className="main-team-header text-center my-6">
								<motion.h1 initial={{opacity: 0, y: 20,}} animate={{opacity: 1, y: 0, transition: { delay: .75, duration: .5, type: "spring", stiffness: 100, bounce: 1, damping: 8 } }} className="text-4xl text-slate-100 uppercase font-fjalla font-bold tracking-widest sm:text-3xl xsm:text-2xl">Holder Benefits</motion.h1>
							</motion.div>
							{/* <AboutCard /> */}
							<div className="2xl:max-w-[1400px] xl:max-w-[1400px] lg:max-w-[400px] lg:flex-col md:max-w-[400px] md:flex-col sm:max-w-[400px] sm:flex-col xsm:max-w-[400px] xsm:flex-col mx-auto flex justify-center items-start flex-initial flex-wrap place-content-center place-items-center">
								<div className="group flex-col justify-center m-4 text-slate-50" ref={abtHead1}>
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
										<div className="card cursor-pointer border-2 border-slate-400 rounded-lg p-6 transition duration-150 flex-1 w-[100%] hover:opacity-90 group-hover:border-[#22d3ee] group-hover:text-[#22d3ee] mt-4 shadow-2xl shadow-slate-900">
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
								<div className="group flex-col justify-center m-4" ref={abtHead2}>
									<Link className="fullmoon" href='/about/fullmoon'>
										<div className="card cursor-pointer border-2 border-slate-400 text-slate-50 rounded-lg transition duration-300 flex-1 w-[100%] group-hover:border-[#22d3ee] shadow-2xl shadow-slate-900">
											<div className="flex justify-center items-center xsm:flex-col">
												<div className="flex-col text-center">
													<div className="imgData relative w-[380px] xsm:w-[300px] h-[380px] xsm:h-[300px]">
														<Image
															src={"/images/airdrop.jpg"}
															layout="fill"
															objectFit="cover"
															quality={100}
															alt="airdrop picture."
														/>
													</div>
												</div>
											</div>
										</div>
									</Link>
									<Link className="fullmoon" href='/about/fullmoon'>
										<div className="card cursor-pointer border-2 border-slate-400 text-slate-50 rounded-lg p-6 transition duration-300 flex-1 w-[100%] group-hover:border-[#22d3ee] group-hover:text-[#22d3ee] mt-4 shadow-2xl shadow-slate-900">
											<div className="flex justify-center items-center xsm:flex-col">
												<div className="flex-col text-center">
													<div className="headData">
														<h3 className="text-2xl font-fjalla tracking-wide capitalize sm:text-xl xsm:text-xl">FullMoon Airdrop</h3>
													</div>
													<div className="addData pt-3">
														<div className="tracking-wide capitalize sm:text-md xsm:text-md">Rewards And Airdrops On FullMoon</div>
													</div>
												</div>
											</div>
										</div>
									</Link>
								</div>
								<div className="group flex-col justify-center m-4" ref={abtHead3}>
									<Link className="marketplace" href='/about/marketplace'>
										<div className="card cursor-pointer border-2 border-slate-400 text-slate-50 rounded-lg transition duration-300 flex-1 w-[100%] group-hover:border-[#22d3ee] shadow-2xl shadow-slate-900">
											<div className="flex justify-center items-center xsm:flex-col card-hover:text-[#22d3ee]">
												<div className="flex-col text-center">
													<div className="imgData relative w-[380px] xsm:w-[300px] h-[380px] xsm:h-[300px]">
														<Image
															src={"/images/marketplace.jpg"}
															layout="fill"
															objectFit="cover"
															quality={100}
															alt="marketplace picture."
														/>
													</div>
												</div>
											</div>
										</div>
									</Link>
									<Link className="marketplace" href='/about/marketplace'>
										<div className="card cursor-pointer border-2 border-slate-400 text-slate-50 rounded-lg p-6 transition duration-300 flex-1 w-[100%] group-hover:border-[#22d3ee] group-hover:text-[#22d3ee] mt-4 shadow-2xl shadow-slate-900">
											<div className="flex justify-center items-center xsm:flex-col card-hover:text-[#22d3ee]">
												<div className="flex-col text-center">
													<div className="headData">
														<h3 className="text-2xl font-fjalla tracking-wide capitalize sm:text-xl xsm:text-xl">Streetwear Marketplace</h3>
													</div>
													<div className="addData pt-3">
														<div className="tracking-wide capitalize sm:text-md xsm:text-md">Whats more about Marketplace</div>
													</div>
												</div>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</div>

		</>
	)
}