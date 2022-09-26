import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Container } from "postcss";
import { useState } from "react";
import Footer from "../components/Footer";


export default function Home() {
	// const styes
	const [active, setActive] = useState(false);
	return (
		<>
			<Head>
				<meta charset="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta httpEquiv="Pragma" content="no-cache" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#24242e" />
				<meta name="description"
					content="Spirit Wolf NFT | Pack of Wolf NFTs Ready to Takover Solana Blockchain | Utilities includes - Streetwear Marketplace - FULL MOON Airdrops and more!" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://spiritwolf.io/" />
				<meta property="og:title" content="Spirit Wolf NFT | Pack of Wolves Ready To Takeover Solana" />
				<meta property="og:description"
					content="Spirit Wolf NFT | Pack of Wolf NFTs Ready to Takover Solana Blockchain | Utilities includes - Streetwear Marketplace - FULL MOON Airdrops and more!" />
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
				<title>Spiritwolf - Home</title>
			</Head>
			<div className="h-screen">
				<div className="absolute">
					<video className="aspect-video -z-10 w-screen h-screen object-cover" autoPlay loop muted playsInline>
						<source src="/spbgnrml.mp4" alt="varcity jacket video" />
					</video>
				</div>
				<main className="h-full w-full relative">
					<nav className="w-screen h-full p-2 relative">
						<div className="mobnav z-auto absolute top-0 left-0 w-full h-screen bg-transparent pointer-events-none lg:hidden xl:hidden 2xl:hidden">
							<div className={active ? "activeNav" : "inactiveNav"}>
								<ul className="relative top-16 min-h-full h-full min-w-[175px] w-fit mx-2 font-fjalla flex-col justify-evenly">
									<li className="nav-list mx-2 my-6 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex items-center bg-[#210433] hover:opacity-100 transition duration-250 md:hidden sm:hidden xsm:hidden">
									<Link href='/'>
										<Image 
											src={"/logo.png"}
											height="44"
											width="44"
										/>
									</Link></li>
									<Link href='/about'><li className="nav-list mx-2 my-6 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex items-center bg-[#210433] hover:opacity-100 transition duration-250"><span className="m-3 flex-1">About</span></li></Link>
									<Link href='/shop'><li className="nav-list mx-2 my-6 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex items-center bg-[#210433] hover:opacity-100 transition duration-250"><span className="m-3 flex-1">shop</span></li></Link>
									<Link href='/roadmap'><li className="nav-list mx-2 my-6 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex items-center bg-[#210433] hover:opacity-100 transition duration-250"><span className="m-3 flex-1">roadmap</span></li></Link>
									<Link href='/team'><li className="nav-list mx-2 my-6 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm  flex items-center bg-[#210433] hover:opacity-100 transition duration-250"><span className="m-3 flex-1">Team</span></li></Link>
									<Link href='/mint'><li className="nav-list mx-2 my-6 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm  flex items-center bg-[#210433] hover:opacity-100 transition duration-250"><span className="m-3 flex-1">Mint</span></li></Link>
									<li className="nav-list p-px flex-1 mx-2 my-6 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm block bg-[#210433] hover:opacity-100 transition duration-250">
									
										<Link href='https://www.instagram.com/spiritwolfnft/'>
											<div className="flex-1 flex justify-between items-center">
												<span className="flex-1 m-3">Instagram</span>
												<svg fill="currentColor" className="h-[20px] mr-3" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<title>Instagram</title>
													<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
												</svg>
											</div>
										</Link>
									</li>
									<li className="nav-list p-px flex-1 mx-2 my-6 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm block bg-[#210433] hover:opacity-100 transition duration-250">
										<Link href='https://twitter.com/SpiritWolfNFT'>
											<div className="flex-1 flex justify-between items-center">
												<span className="m-3 flex-1">Twitter</span>
												<svg fill="currentColor" className="h-[20px] mr-3" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<title>Twitter</title>
													<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
												</svg>
											</div>
										</Link>
									</li>
									<li className="nav-list p-px flex-1  mx-2 my-6 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm block bg-[#210433] hover:opacity-100 transition duration-250">
										<Link href='https://discord.gg/mG9nxSeyf3'>
											<div className="flex-1 flex justify-between items-center">
												<span className="m-3 flex-1">Discord</span>
												<svg fill="currentColor" className="h-[20px] m-3" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<title>Discord</title>
													<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
												</svg>
											</div>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="hidden absolute top-0 left-0 p-2 z-100 w-full font-fjalla md:flex sm:flex xsm:flex">
							<li className="nav-list m-2 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex justify-center items-center min-w-[70px] hover:opacity-100 transition duration-250"><Link href='/'>
								<Image 
									src={"/logo.png"}
									height="44"
									width="44"
									alt="logo"
								/>
							</Link></li>
							<li onClick={() => { setActive(!active) }} className="nav-list m-2 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex items-center justify-center min-w-[70px] hover:opacity-100 transition duration-250"><Link href='/'>
								<svg style={{ width:"32px", height:"32px" }} viewBox="0 0 24 24">
									<path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
								</svg>
							</Link></li>
							<li className="flex flex-grow"></li>
							{/* <li className="nav-list m-2 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex items-center bg-[#210433] hover:opacity-100 transition duration-250"><Link href='https://discord.com'><svg fill="currentColor" className="h-[20px] px-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg></Link></li> */}
						</div>
						<ul className="flex font-fjalla md:hidden sm:hidden xsm:hidden">
							<li className="nav-list m-2 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex items-center hover:opacity-100 transition duration-250 md:hidden sm:hidden xsm:hidden"><Link href='/'>
								<Image 
									src={"/logo.png"}
									height="44"
									width="44"
									alt="logo"
								/>
							</Link></li>
							<li className="flex flex-grow"></li>
							<Link href='/about'><li className="nav-list m-2 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex items-center bg-[#210433] hover:opacity-100 transition duration-250"><span className="m-3 flex-1">About</span></li></Link>
							<Link href='/shop'><li className="nav-list m-2 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex items-center bg-[#210433] hover:opacity-100 transition duration-250"><span className="m-3 flex-1">shop</span></li></Link>
							<Link href='/roadmap'><li className="nav-list m-2 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex items-center bg-[#210433] hover:opacity-100 transition duration-250"><span className="m-3 flex-1">roadmap</span></li></Link>
							<Link href='/team'><li className="nav-list m-2 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex items-center bg-[#210433] hover:opacity-100 transition duration-250"><span className="m-3 flex-1">Team</span></li></Link>
							<Link href='/mint'><li className="nav-list m-2 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex items-center bg-[#210433] hover:opacity-100 transition duration-250"><span className="m-3 flex-1">Mint</span></li></Link>
							{/* <li className="nav-list m-2 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex items-center bg-[#210433] hover:opacity-100 transition duration-250 md:py-[8px] sm:py-[8px] xsm:py-[8px]"><Link href='https://www.instagram.com/spiritwolfnft/'><svg fill="currentColor" className="h-[20px] px-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg></Link></li>
							<li className="nav-list m-2 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex items-center bg-[#210433] hover:opacity-100 transition duration-250 md:py-[8px] sm:py-[8px] xsm:py-[8px]"><Link href='https://twitter.com/SpiritWolfNFT'><svg fill="currentColor" className="h-[20px] px-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg></Link></li>
							<li className="nav-list m-2 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm flex items-center bg-[#210433] hover:opacity-100 transition duration-250 md:py-[8px] sm:py-[8px] xsm:py-[8px]"><Link href='https://discord.gg/mG9nxSeyf3'><svg fill="currentColor" className="h-[20px] px-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg></Link></li> */}
							
							<li className="nav-list p-px -2 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm block bg-[#210433] hover:opacity-100 transition duration-250">
								<Link href='https://www.instagram.com/spiritwolfnft/'>
									<div className="m-3">
										<svg fill="currentColor" className="h-[20px]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<title>Instagram</title>
											<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
										</svg>
									</div>
								</Link>
							</li>
							<li className="nav-list p-px m-2 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm block bg-[#210433] hover:opacity-100 transition duration-250">
								<Link href='https://twitter.com/SpiritWolfNFT'>
									<div className="">
										<svg fill="currentColor" className="h-[20px]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<title>Twitter</title>
											<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
										</svg>
									</div>
								</Link>
							</li>
							<li className="nav-list p-px m-2 rounded-md uppercase opacity-70 text-slate-100 cursor-pointer font-normal tracking-widest text-sm block bg-[#210433] hover:opacity-100 transition duration-250">
								<Link href='https://discord.gg/mG9nxSeyf3'>
									<div className="">
										<svg fill="currentColor" className="h-[20px]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<title>Discord</title>
											<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
										</svg>
									</div>
								</Link>
							</li>
						</ul>
					</nav>
				</main>
			</div>
		</>
	);
}

Home.getLayout = function PageLayout(page) {
	return (
		<>
			{page}
		</>
	);
}