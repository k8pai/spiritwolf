import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import Head from "next/head";

export default function marketplace() {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#24242e" />
                <meta name="description"
                    content="Spirit Wolf NFT | Pack of Wolf NFTs Ready to Takeover | Spirit Wolf Streetwear Marketplace info. | Spirit Wolf NFT Marketplace Benefits and attracting Web2 Streetwear enthusiasts & Hype beasts!." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://spiritwolf.io/about/marketplace" />
                <meta property="og:title" content="Spirit Wolf NFT - Streetwear Marketplace | Spirit Wolf NFT - One of kind Streetwear Marketplace." />
                <meta property="og:description"
                    content="Spirit Wolf NFT | Pack of Wolf NFTs Ready to Takeover | Spirit Wolf Streetwear Marketplace info. | Spirit Wolf NFT Marketplace Benefits and attracting Web2 Streetwear enthusiasts & Hype beasts!." />
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
				<title>Spiritwolf - Marketplace</title>
            </Head>
            <div className="min-h-screen bg-[#24242e] h-fit relative">
                <main className="relative min-h-screen h-full flex flex-col justify-between">
                    <Header />
                    <section className="TeamsSection -z-0 relative w-[100%] min-h-full flex-col justify-center items-center mx-auto">
                        <div className="min-w-screen w-full flex md:flex-col sm:flex-col xsm:flex-col">
                            <div className="basis-2/3 select-none w-[90%] mx-auto px-[50px] py-[100px]">
                                <div className="main-team-header font-fjalla tracking-widest text-left">
                                    <h1 className="text-6xl text-slate-300 uppercase leading-normal font-bold tracking-wider sm:text-4xl xsm:text-3xl">Streetwear Marketplace</h1>
                                    <h1 className="text-2xl pt-[25px] text-slate-300 capitalize leading-relaxed font-normal sm:text-xl xsm:text-lg">We&apos;re building a Streetwear Marketplace. A totally different concept, that will make us unique from other streetwear marketplaces out there.  Our marketplace will be community-based and what makes us different is the ranking system we&apos;ll be having for the sellers in our marketplace!</h1>
                                    <h1 className="text-2xl pt-[25px] text-slate-300 capitalize leading-relaxed font-normal sm:text-xl xsm:text-lg">Our ranking system makes our marketplace more community-driven, and that&apos;s an important part, at least in streetwear culture. And this way you&apos;ll be able to see who&apos;s selling you the sneakers and his previous sales. And you can be assured that the chances of you getting fakes are lesser! And if you want to make it close to NIL! - We got our monthly subscription-based services.</h1>
                                    <h1 className="text-2xl pt-[25px] text-slate-300 capitalize leading-relaxed font-normal sm:text-xl xsm:text-lg">Our marketplace will be proving monthly subscription-based services too. Our holders can get access to it by staking and they&apos;ll be getting in-house lottery tickets which they can use on different raffles we&apos;ll be hosting and for other utilities of our marketplace.</h1>

                                    <h1 className="text-2xl pt-[25px] text-slate-300 capitalize leading-relaxed font-normal sm:text-xl xsm:text-lg">And this how we plan to conquer the 30B Dollar Streetwear Reselling Industry!</h1>
                                </div>
                            </div>
                            <div className="basis-1/3 min-h-full h-fit w-[90%] mx-auto px-[50px] py-[100px]">
                                <Image
                                    src={"/images/worfWithMoon.png"}
                                    width="500"
                                    height="500"
                                    quality={100}
                                    alt="airdrop picture."
                                    priority
                                />
                                <h1 className="text-2xl text-slate-300 capitalize leading-relaxed font-normal sm:text-xl xsm:text-lg"> Our premium subscription will include -</h1>
                                <ul className="list-disc text-left">
                                    <li className="text-xl leading-relaxed text-[#87F6FF] capitalize font-normal sm:xl xsm:text-lg"> Buy/Sell Streetwear and Sneakers using CRYPTO</li>
                                    <li className="text-xl leading-relaxed text-[#87F6FF] capitalize font-normal sm:xl xsm:text-lg"> Sneaker raffles [Holders will get multiple free enties]</li>
                                    <li className="text-xl leading-relaxed text-[#87F6FF] capitalize font-normal sm:xl xsm:text-lg"> Legit check/middleman service.</li>
                                    <li className="text-xl leading-relaxed text-[#87F6FF] capitalize font-normal sm:xl xsm:text-lg"> Holders/Subscribers will be able to consign their sneakers on our marketplace.</li>
                                    <li className="text-xl leading-relaxed text-[#87F6FF] capitalize font-normal sm:xl xsm:text-lg"> Sourcing service.</li>
                                    <li className="text-xl leading-relaxed text-[#87F6FF] capitalize font-normal sm:xl xsm:text-lg"> Restocking BOT Alerts, Sneaker Drops Alerts on our discord.</li>
                                    <li className="text-xl leading-relaxed text-[#87F6FF] capitalize font-normal sm:xl xsm:text-lg"> Reshipping across the USA, Canada, UK, UAE, and India! (We will be expanding this service to other countries too!)</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </main>
            </div>
        </>
    );
}