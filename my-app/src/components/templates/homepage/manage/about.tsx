'use client' // top to the file

import styles from './../homepage-style.module.css'
import { useEffect, useState } from 'react'

interface MockAbout {
	image: string[]
	title: string[]
	description: string[]
}


const mockAbout: MockAbout[] = [
	{
		image: [
			'https://restorangaruda.com/imagesfile/banner_restoran-garuda-nikmatnya-santapan-sejuta-kesan.jpeg',
			'https://restorangaruda.com/imagesfile/banner_delivery-order-gratis-ongkir-.jpeg',
		],
		title: [
			'Restoran Lokal',
			'Restaurant Local',
		],
		description: [
			'Nikmatnya Santapan, Sejuta Kesan',
			'The pleasure of eating, a million impressions',
		],
	},
]

export default function About({currentLanguage}: { currentLanguage: 'ind' | 'eng' }): JSX.Element {
	const [slideIndex, setSlideIndex] = useState(0)
	const [imageIndex, setImageIndex] = useState(0)

	useEffect(() => {
		const intervalId: NodeJS.Timeout = setInterval(() => {
			nextSlide()
		}, 3000)

		return () => clearInterval(intervalId)
	}, [slideIndex])

	const nextSlide = (): void => {
		setTimeout((): void => {
			const mockImage: any[] = mockAbout.map((item: any) => item.image.length)
			setImageIndex((prevIndex: number) => (prevIndex + 1) % Number(mockImage)) // Reset imageIndex when moving to the next slide
			setSlideIndex(0)
		}, 1000)
	}

	return (
		<div className={`py-[5em] ${styles.slideshowContainer}`}>
			<div className={`${styles.slideshow}`}>
				{mockAbout.map((item: MockAbout, index: number) => (
					<div key={index} className={`${styles.slide} ${index === slideIndex ? styles.active : ''}`}>
						<div key={imageIndex} className={'relative z-[1]'}>
							<img
								src={item.image[imageIndex]}
								alt={`image-about-${imageIndex}`}
								className={`${styles.image} md:w-full md:h-full h-[30em] opacity-50 relative`}
							/>
						</div>
						<div className={'absolute z-[2] 2xl:top-[25em] top-[10em] left-0 right-0'}>
							<h5
								className={'text-center font-[700] text-yellow-500 md:text-[3em] sm:text-[2.5em] text-[1.5em]'}
							>
								{currentLanguage === 'ind' ? item.title[0] : item.title[1]}
							</h5>
							<p className={'md:text-[2em] sm:text-[1.5em] text-[1em] text-center'}>
								{currentLanguage === 'ind' ? item.description[0] : item.description[1]}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
