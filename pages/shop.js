import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function shop() {
    return (
        <>
            <Head>
                <meta charset="UTF-8"/>
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
				<title>Spiritwolf - Shop</title>
            </Head>
            <div className="min-h-screen bg-[#24242e] h-fit relative">
                <main className="relative min-h-screen h-full flex flex-col justify-between">
                    <Header />
                    <section className="TeamsSection -z-0 relative w-[100%] min-h-full mx-auto flex justify-center items-start flex-initial flex-wrap">          
                        <div className="2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-[800px] md:max-w-[600px] md:flex-col sm:max-w-[400px] sm:flex-col xsm:max-w-[400px] xsm:flex-col mx-auto flex-col justify-center items-center">
                            <div className="aspect-video rounded-lg p-2 shadow-2xl shadow-zinc-900 transition duration-300 m-px basis-3/4">
                                <video controls="true" alt="varcity jacket video" style={{ width: '100%', height: '100%' }}>
                                    <source src="/varcityJacketnrml.mp4"/>
                                </video>
                            </div>
                            <div className="flex justify-start items-center basis-1/4 pl-6 pt-6">
                                <h1 className="cmgsn font-fjalla leading-relaxed text-6xl text-slate-100 tracking widest md:text-4xl sm:text-2xl xsm:text-xl">Coming Soon...</h1>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </main>
            </div>  
        </>
    );
}