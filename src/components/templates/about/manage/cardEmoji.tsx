'use client' // top to the file

import { motion, Variants } from 'framer-motion'
import style from './../about-style.module.css'

interface Props {
	emoji: string;
	hueA: number;
	hueB: number;
}

const cardVariants: Variants = {
	offscreen: {
		y: 300,
	},
	onscreen: {
		y: 50,
		rotate: -10,
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 0.8,
		},
	},
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

function Card({emoji, hueA, hueB}: Props) {
	const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

	return (
		<motion.div
			className={`${style.cardContainer} 2xl:w-[50em] lg:w-[30em] sm:w-[20em] w-full`}
			initial="offscreen"
			whileInView="onscreen"
			viewport={{once: true, amount: 0.8}}
		>
			<div className={`${style.splash}`} style={{background}}/>
			<motion.div className={`${style.card} lg:w-[2em] lg:h-[3em] w-[1.5em] h-[2em]`} variants={cardVariants}>
				{emoji}
			</motion.div>
		</motion.div>
	)
}

const smile: [string, number, number][] = [
	['😁', 340, 10],
]

const money: [string, number, number][] = [
	['🤑', 340, 10],
]

export default function CardEmoji() {
	return (
		<div className={`relative flex md:flex-row flex-col justify-center gap-[2em] mb-[10em]`}>
			{smile.map(([emoji, hueA, hueB], index: number) => (
				<div key={index} className={'py-[2em]'}>
					<Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji}/>
				</div>
			))}
			{money.map(([emoji, hueA, hueB], index: number) => (
				<div key={index} className={'py-[2em]'}>
					<Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji}/>
				</div>
			))}
		</div>
	)
}
