import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function roadmap() {
	return (
		<>
			<Head>
				<meta charset="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta httpEquiv="Pragma" content="no-cache" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#24242e" />
				<meta name="description"
					content="Spirit Wolf NFT | Pack of Wolf NFTs Ready to Takeover | Spirit Wolf Project Holder benefits and Utilities | Learn more about Spirit Wolf Roadmap." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://spiritwolf.io/roadmap" />
				<meta property="og:title" content="Spirit Wolf NFT - Roadmap | Project Utilities and Holder Benefits." />
				<meta property="og:description"
					content="Spirit Wolf NFT | Pack of Wolf NFTs Ready to Takeover | Spirit Wolf Project Holder benefits and Utilities | Learn more about Spirit Wolf Roadmap." />
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
				<title>Spiritwolf - Roadmap</title>
			</Head>
			<div className="min-h-screen h-fit relative">
				<div className="absolute -z-10 h-full w-full bg-blend-darken">
                    <Image
						priority
                        src="/roadmap/rdmpbg.jpg"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
						alt="roadmap background image"
						loading="eager"
                    />
                    <div className="w-full h-full z-1 bg-[rgba(0,0,0,.65)] mix-blend-darken"></div>
				</div>
				<Header />
				<section className="TeamsSection relative w-[100%] min-h-full flex-col justify-center items-center mx-auto xl:hidden lg:hidden md:hidden sm:hidden xsm:hidden">

					<div className="select-none w-full mx-auto py-[100px] overflow-x-hidden">
						<div className="main-team-header h-[200vh] text-center relative">
							<div className="h-full flex justify-center items-start">
								<div className="w-[10px] h-[90%] bg-slate-100 rounded-2xl"></div>
							</div>
							{/* <div className="left-div bg-slate-100 rounded-2xl absolute top-[5%] right-1/2 min-w-[400px] w-fit min-h-[150px] h-fit"></div> */}
							<div className="block-rt block-one absolute top-[5%] left-1/2">
								<div className="left-div bg-slate-100 rounded-full absolute top-[calc(5%+70px)] min-w-[150px] w-fit min-h-[10px] h-fit shadow-lg shadow-slate-900"></div>
								<div className="left-div bg-slate-100 rounded-full absolute top-[calc(5%+60px)] -translate-x-1/2 min-w-[30px] w-fit min-h-[30px] h-fit shadow-lg shadow-slate-900"></div>
								{/* <div className="left-div text-slate-100 text-4xl font-serif absolute top-[calc(5%+60px)] -translate-x-[50px]">I</div> */}
								{/* <div className="left-div bg-slate-100 rounded-full absolute top-[calc(10%+60px)] left-[calc(50%+60px)] min-w-[30px] w-fit min-h-[30px] h-fit"></div> */}
								<div className="flex absolute top-[5%] translate-x-[75px] min-w-fit w-[550px] min-h-[150px] h-fit">
									<div className="left-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] min-h-[150px] h-fit shadow-2xl shadow-slate-900">
										<div className="p-8 text-slate-50 min-h-[150px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla tracking-widest text-lg font-semibold">Genesis Spirit Wolf Drop</span>
										</div>
									</div>
									<div className="pl-6 relative w-[300px] h-[300px] -translate-y-1/4">
										<Image
											src={"/roadmap/rdmp1.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 1"
											priority
										/>
									</div>
								</div>
							</div>

							<div className="block-lt block-one absolute top-[15%] right-1/2">
								<div className="right-div bg-slate-100 rounded-full absolute top-[calc(15%+70px)] right-1/2 min-w-[150px] w-fit min-h-[10px] h-fit shadow-lg shadow-slate-900"></div>
								<div className="right-div bg-slate-100 rounded-full absolute top-[calc(15%+60px)] right-1/2 translate-x-1/2 min-w-[30px] w-fit min-h-[30px] h-fit shadow-lg shadow-slate-900"></div>
								{/* <div className="right-div bg-slate-100 rounded-full absolute top-[calc(20%+60px)] right-[calc(50%+60px)] min-w-[30px] w-fit min-h-[30px] h-fit"></div> */}
								<div className="flex justify-end absolute top-[15%] right-1/2 -translate-x-[75px] min-w-fit w-[550px] min-h-[150px] h-fit">
									<div className="pl-6 relative w-[300px] h-[300px] -translate-y-1/4">
										<Image
											src={"/roadmap/rdmp2.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 2"
											priority
										/>
									</div>
									<div className="right-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] min-h-[150px] h-fit shadow-2xl shadow-slate-900">
										<div className="p-8 text-slate-50 min-h-[150px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla tracking-widest text-lg font-semibold">Snap for 1st Airdrop - The rank of the Airdrop depends on the no. of NFTs you&apos;re holding!</span>
										</div>
									</div>
								</div>
							</div>
							<div className="block-rt block-two absolute top-[25%] left-1/2">
								<div className="left-div bg-slate-100 rounded-full absolute top-[calc(25%+70px)] min-w-[150px] w-fit min-h-[10px] h-fit shadow-lg shadow-slate-900"></div>
								<div className="left-div bg-slate-100 rounded-full absolute top-[calc(25%+60px)] -translate-x-1/2 min-w-[30px] w-fit min-h-[30px] h-fit shadow-lg shadow-slate-900"></div>
								{/* <div className="left-div bg-slate-100 rounded-full absolute top-[calc(30%+60px)] left-[calc(50%+60px)] min-w-[30px] w-fit min-h-[30px] h-fit"></div> */}
								<div className="flex absolute top-[25%] translate-x-[75px] min-w-fit w-[550px] min-h-[150px] h-fit">
									<div className="left-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] min-h-[150px] h-fit shadow-2xl shadow-slate-900">
										<div className="p-8 text-slate-50 min-h-[150px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla tracking-widest text-lg font-semibold">Airdrop D-0 - multiple ranking airdrops depending upon no. NFTs you held during the snap!</span>
										</div>
									</div>
									<div className="pl-6 relative w-[300px] h-[300px] -translate-y-1/4">
										<Image
											src={"/roadmap/airdroppbig.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 3"
											priority
										/>
									</div>
								</div>
							</div>
							<div className="block-lt block-two absolute top-[35%] right-1/2">
								<div className="right-div bg-slate-100 rounded-full absolute top-[calc(35%+70px)] right-1/2 min-w-[150px] w-fit min-h-[10px] h-fit shadow-lg shadow-slate-900"></div>
								<div className="right-div bg-slate-100 rounded-full absolute top-[calc(35%+60px)] right-1/2 translate-x-1/2 min-w-[30px] w-fit min-h-[30px] h-fit shadow-lg shadow-slate-900"></div>
								{/* <div className="right-div bg-slate-100 rounded-full absolute top-[calc(40%+60px)] right-[calc(50%+60px)] min-w-[30px] w-fit min-h-[30px] h-fit"></div> */}
								<div className="flex justify-end absolute top-[35%] right-1/2 -translate-x-[75px] min-w-fit w-[550px] min-h-[150px] h-fit">
									<div className="pl-6 relative w-[300px] h-[300px] -translate-y-1/4">
										<Image
											src={"/roadmap/airdroppbig.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 4"
											priority
										/>
									</div>
									<div className="right-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] min-h-[150px] h-fit shadow-lg shadow-slate-900">
										<div className="p-8 text-slate-50 min-h-[150px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla tracking-widest text-lg font-semibold">Burning Mechanism - Burn To Redeem different ranking web 2 collectibles!</span>
										</div>
									</div>
								</div>
							</div>
							<div className="block-rt block-three absolute top-[45%] left-1/2">
								<div className="left-div bg-slate-100 rounded-full absolute top-[calc(45%+70px)] min-w-[150px] w-fit min-h-[10px] h-fit shadow-lg shadow-slate-900"></div>
								<div className="left-div bg-slate-100 rounded-full absolute top-[calc(45%+60px)] -translate-x-1/2 min-w-[30px] w-fit min-h-[30px] h-fit shadow-lg shadow-slate-900"></div>
								{/* <div className="left-div bg-slate-100 rounded-full absolute top-[calc(50%+60px)] left-[calc(50%+60px)] min-w-[30px] w-fit min-h-[30px] h-fit"></div> */}
								<div className="flex absolute top-[45%] translate-x-[75px] min-w-fit w-[550px] min-h-[150px] h-fit">
									<div className="left-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] min-h-[150px] h-fit shadow-lg shadow-slate-900">
										<div className="p-8 text-slate-50 min-h-[150px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla tracking-widest text-lg font-semibold">First Merch Drop - Quality streetwear including our Flagship varsity Jackets and more amazing merch & collectibles.</span>
										</div>
									</div>
									<div className="pl-6 relative w-[300px] h-[300px] -translate-y-1/4">
										{/* //to be changed from sober jacket */}
										<Image
											src={"/roadmap/airdroppsmall.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 5"
										/>
									</div>
								</div>
							</div>
							<div className="block-lt block-three absolute top-[55%] right-1/2">
								<div className="right-div bg-slate-100 rounded-full absolute top-[calc(55%+70px)] right-1/2 min-w-[150px] w-fit min-h-[10px] h-fit shadow-lg shadow-slate-900"></div>
								<div className="right-div bg-slate-100 rounded-full absolute top-[calc(55%+60px)] right-1/2 translate-x-1/2 min-w-[30px] w-fit min-h-[30px] h-fit shadow-lg shadow-slate-900"></div>
								{/* <div className="right-div bg-slate-100 rounded-full absolute top-[calc(60%+60px)] right-[calc(50%+60px)] min-w-[30px] w-fit min-h-[30px] h-fit"></div> */}
								<div className="flex justify-end absolute top-[55%] right-1/2 -translate-x-[75px] min-w-fit w-[550px] min-h-[150px] h-fit">
									<div className="pl-6 relative w-[300px] h-[300px] -translate-y-1/4">
										<Image
											src={"/roadmap/rdmp7.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 6"
										/>
									</div>
									<div className="right-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] min-h-[150px] h-fit shadow-lg shadow-slate-900">
										<div className="p-8 text-slate-50 min-h-[150px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla tracking-widest text-lg font-semibold">Streetwear Market Early Access To - Holders : Alpha Wolves gets early access to our streetwear marketplace.</span>
										</div>
									</div>
								</div>
							</div>
							<div className="block-rt block-four absolute top-[65%] left-1/2">
								<div className="left-div bg-slate-100 rounded-full absolute top-[calc(65%+70px)] left-1/2 min-w-[150px] w-fit min-h-[10px] h-fit shadow-lg shadow-slate-900"></div>
								<div className="left-div bg-slate-100 rounded-full absolute top-[calc(65%+60px)] left-1/2 -translate-x-1/2 min-w-[30px] w-fit min-h-[30px] h-fit shadow-lg shadow-slate-900"></div>
								{/* <div className="left-div bg-slate-100 rounded-full absolute top-[calc(70%+60px)] left-[calc(50%+60px)] min-w-[30px] w-fit min-h-[30px] h-fit"></div> */}
								<div className="flex absolute top-[65%] translate-x-[75px] min-w-fit w-[550px] min-h-[150px] h-fit">
									<div className="left-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] min-h-[150px] h-fit shadow-lg shadow-slate-900">
										<div className="p-8 text-slate-50 min-h-[150px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla tracking-widest text-lg font-semibold">Marketplace Launch to public</span>
										</div>
									</div>
									<div className="pl-6 relative w-[300px] h-[300px] -translate-y-1/4">
										<Image
											src={"/roadmap/rdmp6.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 7"
										/>
									</div>
								</div>
							</div>
							<div className="block-lt block-four absolute top-[75%] right-1/2">
								<div className="right-div bg-slate-100 rounded-full absolute top-[calc(75%+70px)] right-1/2 min-w-[150px] w-fit min-h-[10px] h-fit shadow-lg shadow-slate-900"></div>
								<div className="right-div bg-slate-100 rounded-full absolute top-[calc(75%+60px)] right-1/2 translate-x-1/2 min-w-[30px] w-fit min-h-[30px] h-fit shadow-lg shadow-slate-900"></div>
								{/* <div className="right-div bg-slate-100 rounded-full absolute top-[calc(80%+60px)] right-[calc(50%+60px)] min-w-[30px] w-fit min-h-[30px] h-fit"></div> */}
								<div className="flex justify-end absolute top-[75%] right-1/2 -translate-x-[75px] min-w-fit w-[550px] min-h-[150px] h-fit">
									<div className="pl-6 relative w-[300px] h-[300px] -translate-y-1/4">
										<Image
											src={"/roadmap/airdroppsmall.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 8"
										/>
									</div>
									<div className="right-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] min-h-[150px] h-fit shadow-lg shadow-slate-900">
										<div className="p-8 text-slate-50 min-h-[150px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla tracking-widest text-lg font-semibold">IRL Streetwear Events, more seasonal merch drops, IP Expansion, and more!</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</section>

				<section className="w-full min-h-screen h-full flex-col justify-center items-center hidden xl:block lg:block md:block sm:block xsm:block">
					<div className="flex justify-center items-center">
						<div className="w-[80%] py-[50px] flex-col justify-center items-center flex-wrap sm:w-full xsm:w-full">
							<div className="block-lt block-one p-8">
								<div className="flex justify-center items-center mx-auto w-full h-fit md:flex-col sm:flex-col xsm:flex-col xsm:w-fit">
									<div className="pl-6 relative w-[300px] h-[300px]">
										<Image
											src={"/roadmap/rdmp1.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 1"
											priority
										/>
									</div>
									<div className="left-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] xsm:w-[300px] min-h-[150px] h-fit shadow-2xl shadow-slate-900 xsm:min-w-[300px]">
										<div className="p-8 text-slate-50 min-w-full min-h-[175px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla text-center tracking-widest text-lg font-semibold sm:text-base xsm:text-base">Genesis Spirit Wolf Drop</span>
										</div>
									</div>
								</div>
							</div>

							<div className="block-rt block-one p-8">
								<div className="flex justify-center items-center mx-auto w-full h-fit md:flex-col-reverse sm:flex-col-reverse xsm:flex-col-reverse">
									<div className="left-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] xsm:w-[300px] min-h-[150px] h-fit shadow-2xl shadow-slate-900 xsm:min-w-[300px]">
										<div className="p-8 text-slate-50 min-w-full min-h-[175px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla text-center tracking-widest text-lg font-semibold sm:text-base xsm:text-base">Snap for 1st Airdrop - The rank of the Airdrop depends on the no. of NFTs you&apos;re holding!</span>
										</div>
									</div>
									<div className="pl-6 relative w-[300px] h-[300px]">
										<Image
											src={"/roadmap/rdmp2.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 2"
											priority
										/>
									</div>
								</div>
							</div>

							<div className="block-rt block-one p-8">
								<div className="flex justify-center items-center mx-auto w-full h-fit md:flex-col sm:flex-col xsm:flex-col xsm:w-fit">
									<div className="pl-6 relative w-[300px] h-[300px]">
										<Image
											src={"/roadmap/airdroppbig.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 3"
											priority
										/>
									</div>
									<div className="left-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] xsm:w-[300px] min-h-[150px] h-fit shadow-2xl shadow-slate-900 xsm:min-w-[300px]">
										<div className="p-8 text-slate-50 min-h-[175px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla text-center tracking-widest text-lg font-semibold sm:text-base xsm:text-base">Airdrop D-0 - multiple ranking airdrops depending upon no. NFTs you held during the snap!</span>
										</div>
									</div>
								</div>
							</div>

							<div className="block-rt block-one p-8">
								<div className="flex justify-center items-center mx-auto w-full h-fit md:flex-col-reverse sm:flex-col-reverse xsm:flex-col-reverse">
									<div className="left-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] xsm:w-[300px] min-h-[175px] h-fit shadow-2xl shadow-slate-900 xsm:min-w-[300px]">
										<div className="p-8 text-slate-50 min-h-[175px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla text-center tracking-widest text-lg font-semibold sm:text-base xsm:text-base">Burning Mechanism - Burn To Redeem different ranking web 2 collectibles!</span>
										</div>
									</div>
									<div className="pl-6 relative w-[300px] h-[300px]">
										<Image
											src={"/roadmap/airdroppbig.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 4"
											priority
										/>
									</div>
								</div>
							</div>

							<div className="block-rt block-one p-8">
								<div className="flex justify-center items-center mx-auto w-full h-fit md:flex-col sm:flex-col xsm:flex-col xsm:w-fit">
									<div className="pl-6 relative w-[300px] h-[300px]">
										<Image
											src={"/roadmap/airdroppsmall.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 5"
											priority
										/>
									</div>
									<div className="left-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] xsm:w-[300px] min-h-[150px] h-fit shadow-2xl shadow-slate-900 xsm:min-w-[300px]">
										<div className="p-8 text-slate-50 min-h-[175px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla text-center tracking-widest text-lg font-semibold sm:text-base xsm:text-base">First Merch Drop - Quality streetwear including our Flagship varsity Jackets and more amazing merch & collectibles.</span>
										</div>
									</div>
								</div>
							</div>

							<div className="block-rt block-one p-8">
								<div className="flex justify-center items-center mx-auto w-full h-fit md:flex-col-reverse sm:flex-col-reverse xsm:flex-col-reverse">
									<div className="left-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] xsm:w-[300px] min-h-[150px] h-fit shadow-2xl shadow-slate-900 xsm:min-w-[300px]">
										<div className="p-8 text-slate-50 min-h-[175px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla text-center tracking-widest text-lg font-semibold sm:text-base xsm:text-base">Streetwear Market Early Access To - Holders : Alpha Wolves gets early access to our streetwear marketplace.</span>
										</div>
									</div>
									<div className="pl-6 relative w-[300px] h-[300px]">
										<Image
											src={"/roadmap/rdmp7.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 6"
										/>
									</div>
								</div>
							</div>

							<div className="block-rt block-one p-8">
								<div className="flex justify-center items-center mx-auto w-full h-fit md:flex-col sm:flex-col xsm:flex-col xsm:w-fit">
									<div className="pl-6 relative w-[300px] h-[300px]">
										<Image
											src={"/roadmap/rdmp6.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 7"
										/>
									</div>
									<div className="left-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] xsm:w-[300px] min-h-[150px] h-fit shadow-2xl shadow-slate-900 xsm:min-w-[300px]">
										<div className="p-8 text-slate-50 min-h-[175px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla text-center tracking-widest text-lg font-semibold sm:text-base xsm:text-base">Marketplace Launch to public.</span>
										</div>
									</div>
								</div>
							</div>

							<div className="block-rt block-one p-8">
								<div className="flex justify-center items-center mx-auto w-full h-fit md:flex-col-reverse sm:flex-col-reverse xsm:flex-col-reverse">
									<div className="left-div bg-[#32323a] rounded-2xl min-w-[400px] w-[400px] xsm:w-[300px] min-h-[150px] h-fit shadow-2xl shadow-slate-900 xsm:min-w-[300px]">
										<div className="p-8 text-slate-50 min-h-[175px] h-fit flex justify-center items-center">
											<span className="capitalize font-fjalla text-center tracking-widest text-lg font-semibold sm:text-base xsm:text-base">IRL Streetwear Events, more seasonal merch drops, IP Expansion, and more!</span>
										</div>
									</div>
									<div className="pl-6 relative w-[300px] h-[300px]">
										<Image
											src={"/roadmap/airdroppsmall.png"}
											layout="fill"
											objectFit="contain"
											alt="roadmap image 8"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</section>
			</div>
		</>
	);
}