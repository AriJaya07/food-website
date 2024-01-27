'use client' // top to the file

import styles from './../homepage-style.module.css'
import { Carousel } from 'react-responsive-carousel'
import { css } from '@emotion/react';

interface MockAbout {
	image: string,
	title: string[],
	description: string[]
}


const mockAbout: MockAbout[] = [
	{
		image: 'https://restorangaruda.com/imagesfile/banner_restoran-garuda-nikmatnya-santapan-sejuta-kesan.jpeg',
		title: [
			'Restoran Lokal',
			'Restaurant Local',
		],
		description: [
			'Nikmatnya Santapan, Sejuta Kesan',
			'The pleasure of eating, a million impressions',
		],
	},
	{
		image: 'https://restorangaruda.com/imagesfile/banner_delivery-order-gratis-ongkir-.jpeg',
		title: [
			'Restoran global',
			'Restaurant International',
		],
		description: [
			'Nikmatnya Santapan, Sejuta Kesan',
			'The pleasure of eating, a million impressions',
		],
	},
]

export default function About({currentLanguage}: { currentLanguage: 'ind' | 'eng' }): JSX.Element {

	const carouselSettings = {
		autoPlay: true,
		interval: 3000,
		infiniteLoop: true,
		showThumbs: false,
		stopOnHover: false,
		width: '100%',
	}

	return (
		<div className={`py-[5em]`}>
			<div>
				<Carousel {...carouselSettings}>
					{mockAbout.map((item: MockAbout, index: number) => {
						return (
							<div key={index}>
								<div className={'relative z-[1]'}>
									<img
										src={item.image}
										alt={`image-about-${index}`}
										className={`md:w-full md:h-full h-[30em] opacity-50 relative`}
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
						)
					})}
				</Carousel>
			</div>
		</div>
	)
}
