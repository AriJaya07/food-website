'use client' // top to the file

import { useEffect, useState } from 'react'

interface MockBranchContent {
	image: string
	title: string[]
}

interface MockBranch {
	id: number
	title: [string, string]
	subTitle: [string, string]
	content: MockBranchContent[]
}

const mockBranch: MockBranch[] = [
	{
		id: 1,
		title: [
			'Restoran Cabang Garuda',
			'Restaurant Garuda Branch',
		],
		subTitle: [
			'Cabang',
			'Branch',
		],
		content: [
			{
				image: 'https://restorangaruda.com/images/cabang-1.jpg',
				title: [
					'Kota Tabanan',
					'Tabanan City',
				],
			},
			{
				image: 'https://restorangaruda.com/images/cabang-2.jpg',
				title: [
					'Kota Tabanan',
					'Tabanan City',
				],
			},
			{
				image: 'https://restorangaruda.com/images/cabang-3.jpg',
				title: [
					'Kota Tabanan',
					'Tabanan City',
				],
			},
			{
				image: 'https://restorangaruda.com/images/cabang-4.jpg',
				title: [
					'Kota Tabanan',
					'Tabanan City',
				],
			},
		],
	},
]

export default function Branch({currentLanguage}: { currentLanguage: 'ind' | 'eng' }): JSX.Element {
	let [slideIndex, setSlideIndex] = useState(1)


	useEffect(() => {
		showDivs(slideIndex)
	}, [slideIndex])

	const plusDivs = (n: number): void => {
		setSlideIndex((prevIndex) => prevIndex + n)
	}

	const currentDiv = (n: number): void => {
		setSlideIndex(n)
	}

	const showDivs = (n: number) => {
		const x = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>

		if (n > x.length) setSlideIndex(1)
		if (n < 1) setSlideIndex(x.length)

		for (let i = 0; i < x.length; i++) {
			x[i].style.display = 'none'
		}

		if (slideIndex > 0 && slideIndex <= x.length) {
			if (x[slideIndex - 1]) {
				x[slideIndex - 1].style.display = 'block'
			}
		}
	}

	return (
		<div className={'flex justify-center mb-[5em] p-5'}>
			<div className={''}>
				{mockBranch.map((item: MockBranch, index: number) => {
					return (
						<div key={index} className={'flex flex-col gap-[1em]'}>
							<div className={'flex flex-col'}>
								<h5 className={'font-[700] text-[1em]'}>
									{currentLanguage === 'ind' ? item.title[0] : item.title[1]}
								</h5>
								<p className={'text-yellow-500 text-[2em]'}>
									{currentLanguage === 'ind' ? item.subTitle[0] : item.subTitle[1]}
								</p>
							</div>
							<div className={'flex flex-row gap-[1em]'}>
								<div className={'flex flex-col flex-wrap p-2 rounded gap-[1em]'}>
									<div className={''}>
										{item.content.map((itemContent: MockBranchContent, indexContent: number) => (
											<div key={indexContent} className={'mySlides'}>
												<div
													className={'flex flex-col border border-white p-2 gap-[1em]'}>
													<img
														src={itemContent.image}
														className={'2xl:w-[0em] sm:w-[10em] w-full'}
														alt={`image-${indexContent}`}
													/>
													<div className={''}>
									                    <span
										                    className={'2xl:text-[1.5em] text-[1em] font-[700]'}>
									                      {currentLanguage === 'ind' ? itemContent.title[0] : itemContent.title[1]}
									                    </span>
													</div>
												</div>
												<div className={''}>
								                  <span onClick={() => currentDiv(indexContent)}
								                        className={''}>
								                  </span>
												</div>
											</div>
										))}
									</div>
									<div
										className={'flex flex-row justify-between'}>
										<div onClick={() => plusDivs(-1)} className={'cursor-pointer'}>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
												<path fillRule="evenodd"
												      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
											</svg>
										</div>
										<div onClick={() => plusDivs(1)} className={'w3-right cursor-pointer'}>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
												<path fillRule="evenodd"
												      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
					)
				})}

			</div>
		</div>
	)
}
