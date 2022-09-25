import Link from "next/link";
import Image from "next/image";
import { Container } from "postcss";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Head from "next/head";


export default function Team() {
	return (
		<>
			<Head>
				<meta charset="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta httpEquiv="Pragma" content="no-cache" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#24242e" />
				<meta name="description"
					content="Spirit Wolf NFT | Pack of Wolf NFTs Ready to Takeover | Spirit Wolf Project Founder and Team Members | Meet the Spirit Wolf Team." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://spiritwolf.io/team" />
				<meta property="og:title" content="Spirit Wolf NFT - Team | Founders and Team working behind the scene." />
				<meta property="og:description"
					content="Spirit Wolf NFT | Pack of Wolf NFTs Ready to Takeover | Spirit Wolf Project Founder and Team Members | Meet the Spirit Wolf Team." />
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
				<title>Spiritwolf - Teams</title>
			</Head>
			<div className="bg-[#24242e]">
				<main className="w-full min-h-full h-fit relative">
					<Header />
					<section className="TeamsSection w-[100%] min-h-full h-fit flex-col justify-center items-center mx-auto">
						<div className="py-[25px] select-none">
							<div className="main-team-header text-center my-6">
								<h1 className="text-4xl font-fjalla tracking-widest text-slate-100 uppercase font-bold">main Team</h1>
							</div>
							<div className="2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-[400px] lg:flex-col md:max-w-[400px] md:flex-col sm:max-w-[400px] sm:flex-col xsm:max-w-[400px] xsm:flex-col mx-auto flex justify-center items-start flex-initial flex-wrap place-content-center place-items-center">
								<div className="card rounded-lg p-6 shadow-xl transition duration-300 flex-1 w-[100%] hover:border-blue-400 m-2">
									<div className="text-slate-50 flex items-start xsm:flex-col">
										<div className="imageclass xsm:mx-auto">
											<Image
												className="rounded-full"
												src="/teams/jakez.jpg"
												height="100"
												width="100"
												alt="jakez image"
												priority
											/>
										</div>
										<div className="flex-col pl-6">
											<div className="headData">
												<h3 className="text-2xl font-fjalla tracking-wider capitalize">jakez</h3>
											</div>
											<div className="addData">
												<div className="text-slate-200 tracking-wider capitalize">artist, Co-Founder</div>
											</div>
										</div>
									</div>
								</div>
								<div className="card rounded-lg p-6 shadow-xl transition duration-300 flex-1 w-[100%] hover:border-blue-400 m-2">
									<div className="text-slate-50 flex items-start xsm:flex-col">
										<div className="imageclass xsm:mx-auto">
											<Image
												className="rounded-full"
												src="/teams/minato.gif"
												height="100"
												width="100"
												alt="minato image"
												priority
											/>
										</div>
										<div className="flex-col pl-6">
											<div className="headData">
												<h3 className="text-2xl font-fjalla tracking-wider capitalize">Minato</h3>
											</div>
											<div className="addData">
												<div className="text-slate-200 tracking-wider capitalize">co-founder, Marketing</div>
											</div>
										</div>
									</div>
								</div>
								<div className="card rounded-lg p-6 shadow-xl transition duration-300 flex-1 w-[100%] hover:border-blue-400 m-2">
									<div className="text-slate-50 flex items-start xsm:flex-col">
										<div className="imageclass xsm:mx-auto">
											<Image
												className="rounded-full"
												src="/teams/pai.jpg"
												height="100"
												width="100"
												alt="pai image"
												priority
											/>
										</div>
										<div className="flex-col pl-6">
											<div className="headData">
												<h3 className="text-2xl font-fjalla tracking-wider capitalize">Pai</h3>
											</div>
											<div className="addData">
												<div className="text-slate-200 tracking-wider capitalize">&lt;Dev /&gt;</div>
											</div>
											<div className="linkData mt-2">
												<Link href="https://twitter.com/k8pai">
													<svg className="mx-0 transition fill-slate-200 duration-200 hover:fill-[#1DA1F2] cursor-pointer" role="img" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="py-[25px] select-none">
							<div className="main-team-header text-center my-6">
								<h1 className="text-4xl font-fjalla text-slate-100 uppercase font-bold">core team</h1>
							</div>
							<div className="2xl:max-w-[800px] xl:max-w-[800px] lg:max-w-[400px] lg:flex-col md:max-w-[400px] md:flex-col sm:max-w-[400px] sm:flex-col xsm:max-w-[400px] xsm:flex-col  mx-auto flex justify-center items-start flex-initial flex-wrap place-content-center place-items-center">
								<div className="card rounded-lg p-6 shadow-xl transition duration-300 flex-1 w-[100%] hover:border-blue-400 m-2">
									<div className="text-slate-50 flex items-start xsm:flex-col">
										<div className="imageclass xsm:mx-auto">
											<Image
												className="rounded-full"
												src="/teams/setuk.jpg"
												height="100"
												width="100"
												alt="setuk image"
												priority
											/>
										</div>
										<div className="flex-col pl-6">
											<div className="headData">
												<h3 className="text-2xl font-fjalla tracking-wider capitalize">setuk</h3>
											</div>
											<div className="addData">
												<div className="text-slate-200 tracking-wider capitalize">core member</div>
											</div>
											<div className="linkData mt-2">
												<Link href="https://twitter.com/setukation">
													<svg className="mx-0 transition fill-slate-200 duration-200 hover:fill-[#1DA1F2] cursor-pointer" role="img" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="card rounded-lg p-6 shadow-xl transition duration-300 flex-1 w-[100%] hover:border-blue-400 m-2">
									<div className="text-slate-50 flex items-start xsm:flex-col">
										<div className="imageclass xsm:mx-auto">
											<Image
												className="rounded-full"
												src="/teams/vpm.jpg"
												height="100"
												width="100"
												alt="vpm image"
												priority
											/>
										</div>
										<div className="flex-col pl-6">
											<div className="headData">
												<h3 className="text-2xl font-fjalla tracking-wider capitalize">vpm</h3>
											</div>
											<div className="addData">
												<div className="text-slate-200 tracking-wider capitalize">Core member</div>
											</div>
											<div className="linkData mt-2">
												<Link href="https://twitter.com/vpm4real">
													<svg className="mx-0 transition fill-slate-200 duration-200 hover:fill-[#1DA1F2] cursor-pointer" role="img" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="py-[25px] select-none">
							<div className="main-team-header text-center my-6">
								<h1 className="text-4xl font-fjalla text-slate-100 uppercase font-bold">Collab Managers</h1>
							</div>
							<div className="2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-[400px] lg:flex-col md:max-w-[400px] md:flex-col sm:max-w-[400px] sm:flex-col xsm:max-w-[400px] xsm:flex-col mx-auto flex justify-center items-start flex-initial flex-wrap place-content-center place-items-center">
								<div className="card rounded-lg p-6 shadow-xl transition duration-300 flex-1 w-[100%] hover:border-blue-400 m-2">
									<div className="text-slate-50 flex items-start xsm:flex-col">
										<div className="imageclass xsm:mx-auto">
											<Image
												className="rounded-full"
												src="/teams/helblindi.jpg"
												height="100"
												width="100"
												alt="helblindi image"
												priority
											/>
										</div>
										<div className="flex-col pl-6">
											<div className="headData">
												<h3 className="text-2xl font-fjalla tracking-wider capitalize">Helblindi</h3>
											</div>
											<div className="addData">
												<div className="text-slate-200 tracking-wider capitalize">Collab Manager</div>
											</div>
											<div className="linkData mt-2">
												<Link href="/">
													<svg className="mx-0 transition fill-slate-200 duration-200 hover:fill-[#1DA1F2] cursor-pointer" role="img" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="card rounded-lg p-6 shadow-xl transition duration-300 flex-1 w-[100%] hover:border-blue-400 m-2">
									<div className="text-slate-50 flex items-start xsm:flex-col">
										<div className="imageclass xsm:mx-auto">
											<Image
												className="rounded-full"
												src="/teams/hayat.jpg"
												height="100"
												width="100"
												alt="hayat image"
												priority
											/>
										</div>
										<div className="flex-col pl-6">
											<div className="headData">
												<h3 className="text-2xl font-fjalla tracking-wider capitalize">Hayat</h3>
											</div>
											<div className="addData">
												<div className="text-slate-200 tracking-wider capitalize">Collab Manager</div>
											</div>
											<div className="linkData mt-2">
												<Link href="https://twitter.com/Hayat_8481">
													<svg className="mx-0 transition fill-slate-200 duration-200 hover:fill-[#1DA1F2] cursor-pointer" role="img" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="card rounded-lg p-6 shadow-xl transition duration-300 flex-1 w-[100%] hover:border-blue-400 m-2">
									<div className="text-slate-50 flex items-start xsm:flex-col">
										<div className="imageclass xsm:mx-auto">
											<Image
												className="rounded-full"
												src="/teams/punksop.jpg"
												height="100"
												width="100"
												alt="punksop image"
												priority
											/>
										</div>
										<div className="flex-col pl-6">
											<div className="headData">
												<h3 className="text-2xl font-fjalla tracking-wider capitalize">punksop</h3>
											</div>
											<div className="addData">
												<div className="text-slate-200 tracking-wider capitalize">Collab Manager</div>
											</div>
											<div className="linkData mt-2">
												<Link href="https://twitter.com/PunksopS">
													<svg className="mx-0 transition fill-slate-200 duration-200 hover:fill-[#1DA1F2] cursor-pointer" role="img" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</section>
					<Footer />
				</main>
			</div>
		</>
	)
}