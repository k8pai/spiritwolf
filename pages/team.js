import Link from "next/link";
import Image from "next/image";
import { Container } from "postcss";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard";

export default function Team() {
	// const container = {
	// 	hidden: { opacity: 0 },
	// 	show: {
	// 		opacity: 1,
	// 		transition: {
	// 			// delayChildren: .25,
	// 			staggerChildren: .25,
	// 		}
	// 	}
	// }
	  
	const item = {
		hidden: { opacity: 0, scale: .7 },
		show: { 
			opacity: 1, 
			scale: 1, 
			transition: { 
				type: "spring", 
				stiffness: 100, 
				duration: .25,
				stagger: .25, 
			} 
		} 
		// initial={{ opacity: 0, scale:.7}} animate={{ opacity: 1, scale:1}} transition={{ type: "spring", stiffness: 100 }}
	}

	const members = {
		category: {
			main: "Main Team",
			core: "Core Team",
			collab: "Collab Managers",
		},
		mainteams: [
			{
				name: 'Jakez',
				imgUrl: '/teams/jakez.jpg',
				imgAlt: 'Jakez team image.',
				role: 'Collab Manager.',
				twtUrl: 'null',
			},
			{
				name: 'Minato',
				imgUrl: '/teams/minato.gif',
				imgAlt: 'Minato team image.',
				role: 'Collab Manager.',
				twtUrl: 'null',
			},
			{
				name: 'k8pai',
				imgUrl: '/teams/pai.jpg',
				imgAlt: 'k8pai team image.',
				role: 'Collab Manager.',
				twtUrl: 'https://twitter.com/k8pai',
			},
		],
		coreteams: [
			{
				name: 'Setuk',
				imgUrl: '/teams/setuk.jpg',
				imgAlt: 'Setuk team image.',
				role: 'Collab Manager.',
				twtUrl: 'https://twitter.com/setukation',
			},
			{
				name: 'VPM',
				imgUrl: '/teams/vpm.jpg',
				imgAlt: 'VPM team image.',
				role: 'Collab Manager.',
				twtUrl: 'https://twitter.com/vpm4real',
			},
		],
		collabteams: [
			{
				name: 'Ambuj',
                imgUrl: '/teams/ambuj.jpg',
                imgAlt: 'Ambuj team image.',
                role: 'Collab Manager.',
                twtUrl: 'https://twitter.com/solambuj',
            },
            {
				name: 'Rohith',
                imgUrl: '/teams/rohith.jpg',
                imgAlt: 'Rohith team image.',
                role: 'Collab Manager.',
                twtUrl: 'https://twitter.com/Rohit2356',
            },
            {
				name: 'Punksop',
                imgUrl: '/teams/punksop.jpg',
                imgAlt: 'Punksop team image.',
                role: 'Collab Manager.',
                twtUrl: 'https://twitter.com/PunksopS',
            },
            {
                name: 'Helblindi',
                imgUrl: '/teams/helblindi.jpg',
                imgAlt: 'Helblindi team image.',
                role: 'Collab Manager.',
                twtUrl: 'null',
            },
            {
				name: 'Hayat',
                imgUrl: '/teams/hayat.jpg',
                imgAlt: 'Hayat team image.',
                role: 'Collab Manager.',
                twtUrl: 'https://twitter.com/Hayat_8481',
            },
		],
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

						<TeamCard sec={ members.category.main } memb={members.mainteams}/>
						<TeamCard sec={ members.category.core } memb={members.coreteams}/>
						<TeamCard sec={ members.category.collab } memb={members.collabteams}/>

					</section>
					<Footer />
				</main>
			</div>
		</>
	)
}