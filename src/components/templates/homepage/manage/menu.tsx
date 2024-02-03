'use client' // This is a client component 👈🏽

import Link from 'next/link'
import { useState } from 'react'

interface MockFoodContent {
	id: number
	image: string
	title: string[]
	subTitle: string
	description: string
}

interface MockFood {
	id: number
	header: string[]
	content: MockFoodContent[]
}

interface MockDrink {
	id: number
	header: string[]
	content: MockDrinkContent[]
}

interface MockDrinkContent {
	id: number
	image: string
	title: string[]
	subTitle: string
	description: string
}

const mockFood: MockFood[] = [
	{
		id: 1,
		header: [
			'Menu Makanan',
			'Our Food',
		],
		content: [
			{
				id: 1,
				image: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revisi-2020/revamp-image/food-indonesia/nasigoreng.jpg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
				subTitle: 'Detail 1',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
			{
				id: 2,
				image: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revisi-2020/revamp-image/food-indonesia/nasigoreng.jpg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
				subTitle: 'Detail 2',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
			{
				id: 3,
				image: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revisi-2020/revamp-image/food-indonesia/nasigoreng.jpg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
				subTitle: 'Detail 3',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
			{
				id: 4,
				image: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revisi-2020/revamp-image/food-indonesia/nasigoreng.jpg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
				subTitle: 'Detail 4',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
		],
	},
]

const mockDrink: MockDrink[] = [
	{
		id: 1,
		header: [
			'Menu Minuman',
			'Our Drink',
		],
		content: [
			{
				id: 1,
				image: 'https://t4.ftcdn.net/jpg/01/07/93/25/360_F_107932517_bRTDt5PCP4mOxlnsifzR6kXxkR3xi8QA.jpg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
				subTitle: 'Detail 1',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
			{
				id: 2,
				image: 'https://t4.ftcdn.net/jpg/01/07/93/25/360_F_107932517_bRTDt5PCP4mOxlnsifzR6kXxkR3xi8QA.jpg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
				subTitle: 'Detail 2',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
			{
				id: 3,
				image: 'https://t4.ftcdn.net/jpg/01/07/93/25/360_F_107932517_bRTDt5PCP4mOxlnsifzR6kXxkR3xi8QA.jpg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
				subTitle: 'Detail 3',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
			{
				id: 4,
				image: 'https://t4.ftcdn.net/jpg/01/07/93/25/360_F_107932517_bRTDt5PCP4mOxlnsifzR6kXxkR3xi8QA.jpg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
				subTitle: 'Detail 4',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
		],
	},
]

export default function Menu({currentLanguage}: { currentLanguage: 'ind' | 'eng' }): JSX.Element {
	const [showFood, setShowFood] = useState(true)
	const [showDrink, setShowDrink] = useState(false)

	function openMenu(menuName: any): void {
		if (menuName === 'Food') {
			setShowFood(true)
			setShowDrink(false)
		} else if (menuName === 'Drink') {
			setShowFood(false)
			setShowDrink(true)
		}
	}

	return (
		<div className={'py-[5em]'}>

			<div className={''}>
				<h5 className={'uppercase text-left font-[700] text-[2em]'}>MENU</h5>
				<div className={'flex flex-row justify-center gap-[5em] pt-5 pb-10'}>
					<div onClick={() => openMenu('Food')}>
						<p className={`${showFood ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} font-[600] px-10 py-2 rounded cursor-pointer`}>Food</p>
					</div>
					<div onClick={() => openMenu('Drink')}>
						<p className={`${showDrink ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} font-[600] px-10 py-2 rounded cursor-pointer`}>Drink</p>
					</div>
				</div>
			</div>

			<div className={'border-4 border-white p-5 rounded-2xl'}>
				<div className={`${showFood ? 'block' : 'hidden'}`}>
					{mockFood.map((item: MockFood, index: number) => {
						return (
							<div key={index} className={'flex flex-col justify-center items-center gap-[2em]'}>
								<div className={''}>
									<h5 className={'font-[700] text-[2em]'}>
										{currentLanguage === 'ind' ? item.header[0] : item.header[1]}
									</h5>
								</div>
								<div className={'flex flex-row flex-wrap justify-center lg:gap-[1em] gap-[3em]'}>
									{item.content.map((itemContent: MockFoodContent, indexContent: number) => {
										return (
											<div key={indexContent} className={''}>
												<div key={index}
												     className={'flex lg:flex-row flex-col lg:items-center gap-[1em]'}>
													<div className={''}>
														<img src={`${itemContent.image}`}
														     alt={`image-menu-${index}`}
														     className={'lg:w-[15em] w-full'}/>
													</div>
													<div className={'flex flex-col gap-[1em]'}>
														<p className={''}>
															{currentLanguage === 'ind' ? itemContent.title[0] : itemContent.title[1]}
														</p>
														<div>
															<Link href={`/detail/${itemContent.id}`} target={'_self'}
															      className={'font-[700]'}>
																<button type={'button'}
																        className={'bg-green-700 px-3 py-2'}>Detail Food
																</button>
															</Link>
														</div>
													</div>
												</div>
											</div>
										)
									})}
								</div>
							</div>
						)
					})}
				</div>

				<div className={`${showDrink ? 'block' : 'hidden'}`}>
					{mockDrink.map((item: MockFood, index: number) => {
						return (
							<div key={index} className={'flex flex-col justify-center items-center gap-[2em]'}>
								<div className={''}>
									<h5 className={'font-[700] text-[2em]'}>
										{currentLanguage === 'ind' ? item.header[0] : item.header[1]}
									</h5>
								</div>
								<div
									className={'flex flex-row flex-wrap justify-center lg:gap-[1em] gap-[3em]'}>
									{item.content.map((itemContent: MockFoodContent, indexContent: number) => {
										return (
											<div key={indexContent} className={''}>
												<div key={index}
												     className={'flex lg:flex-row flex-col lg:items-center gap-[1em]'}>
													<div className={''}>
														<img src={`${itemContent.image}`}
														     alt={`image-menu-${index}`}
														     className={'lg:w-[15em] w-full'}/>
													</div>
													<div className={'flex flex-col gap-[1em]'}>
														<p className={''}>
															{currentLanguage === 'ind' ? itemContent.title[0] : itemContent.title[1]}
														</p>
														<div>
															<Link href={`/detail/${itemContent.id}`}
															      target={'_self'}
															      className={'font-[700]'}>
																<button type={'button'}
																        className={'bg-green-700 px-3 py-2'}>Detail
																	Drink
																</button>
															</Link>
														</div>
													</div>
												</div>
											</div>
										)
									})}
								</div>
							</div>
						)
					})}
				</div>
			</div>


		</div>
	)
}
