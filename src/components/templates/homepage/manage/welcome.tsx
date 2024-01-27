interface MockWelcome {
	id: number
	image: string[]
	title: string[]
	subTitle: string[]
	description: string[]
}

const mockWelcome: MockWelcome[] = [
	{
		id: 1,
		image: [
			'https://restorangaruda.com/images/about-1.jpg',
			'https://restorangaruda.com/images/about-2.jpg',
		],
		title: [
			'Welcome',
			'Selamat Datang',
		],
		subTitle: [
			'Restoran Garuda',
			'Garuda Restaurant',
		],
		description: [
			'Restoran Garuda telah berdiri sejak 1976 hingga saat ini. Kami bergerak dibidang mengelolah makanan yang spesifik yaitu Minang dan Melayu, dimana alasan untuk mendirikan rumah makan ini adalah merupakan hasil survey bahwa masih kurangnya sarana rumah makan terutama yang menyediakan makanan spesifik Minang dan Melayu dikota Medan.',
			'Garuda Restaurant has been established since 1976 until now. We operate in the field of managing specific food, namely Minang and Malay, where the reason for establishing this restaurant is the result of a survey that there is still a lack of restaurant facilities, especially those that provide specific Minang and Malay food in the city of Medan.',
		],
	},
]

export default function Welcome({currentLanguage}: { currentLanguage: 'ind' | 'eng' }): JSX.Element {
	return (
		<div className={'md:absolute relative z-[5] lg:mt-[-25em] md:mt-[-10em] left-0 right-0 md:p-10'}>
			{mockWelcome.map((item: MockWelcome, index: number): JSX.Element => {
				return (
					<div key={index} className={'flex lg:flex-row flex-col justify-center gap-[1em]'}>
						<div className={'flex flex-row gap-[2em]'}>
							<div>
								<img src={`${item.image[0]}`} alt={'image-1'}
								     className={'lg:w-[20em] w-full h-[35em]'}/>
							</div>
							<div className={''}>
								<img src={`${item.image[1]}`} alt={'image-2'}
								     className={'lg:w-[20em] w-full h-[35em]'}/>
							</div>
						</div>
						<div className={'flex flex-col gap-[1em] lg:w-[50em] w-full'}>
							<div className={''}>
								<p className={'text-yellow-500 md:text-[2em] text-[1.5em] font-[600]'}>
									{currentLanguage === 'ind' ? item.title[0] : item.title[1]}
								</p>
								<h5 className={'md:text-[3em] text-[2em] font-[700]'}>
									{currentLanguage === 'ind' ? item.subTitle[0] : item.subTitle[1]}
								</h5>
							</div>
							<div className={''}>
								<p className={'tracking-wide md:text-[1.5em] text-[1em]'}>
									{currentLanguage === 'ind' ? item.description[0] : item.description[1]}
								</p>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
