import { JSX } from 'react'

interface MockUs {
	id: number
	image: string
	title: string[]
	subTitle1: string[]
	subTitle2: string[]
	restaurant: string[]
	description: string[]
}

const mockUs: MockUs[] = [
	{
		id: 1,
		image: 'https://restorangaruda.com/images/page.jpg',
		title: [
			'Tentang kami',
			'About Us',
		],
		subTitle1: [
			'Rumah',
			'Home',
		],
		subTitle2: [
			'Tentag Kami',
			'About Us',
		],
		restaurant: [
			'Restaurant Garuda',
			'Garuda Restaurant',
		],
		description: [
			'Restoran Garuda merupakan perusahaan swasta yang terbentuk perorangan. Didirikan pada tanggal 9 oktober 1976 berlokasi di jalan Pemuda No. 20 Medan, yang kemudian ditetapkan sebagai Rumah Makan Garuda I sekaligus sebagai kantor pusat dan administrasinya. Pada awalnya restoran ini hanya berupa rumah makan yang diberi nama "Rumah Makan dan Buffet Garuda.',
			'Garuda Restaurant is a private company formed by individuals. Founded on 9 October 1976 located at Jalan Pemuda No. 20 Medan, which was later designated as the Garuda I Restaurant as well as its head office and administration. At first this restaurant was just a restaurant called "Garuda Restaurant and Buffet.',
		],
	},
]

export default function Us({currentLanguage}: { currentLanguage: 'ind' | 'eng' }): JSX.Element {
	return (
		<div className={''}>
			<div className={'flex flex-col'}>
				{mockUs.map((item: MockUs, index: number) => {
					return (
						<div key={index}>
							<div className={''}>
								<div className={'2xl:mt-[-20em] xl:mt-[-10em] mt-[0em]'}>
									<img
										src={`${item.image}`}
										alt={'image-about'} className={'w-full md:h-full h-[30em] opacity-50'}/>
								</div>
								<div
									className={'flex flex-col absolute z-[5] items-center 2xl:top-[25em] top-[15em] left-0 right-0'}>
									<h5 className={'md:text-[3em] text-[2em] font-[700] text-white'}>
										{currentLanguage === 'ind' ? item.title[0] : item.title[1]}
									</h5>
									<div className={'flex flex-row md:text-[1.5em] text-[1em] font-[700]'}>
										<p className={''}>
											{currentLanguage === 'ind' ? item.subTitle1[0] : item.subTitle1[1]}
										</p>
										<p className={''}>
											&nbsp;{'>'}&nbsp;
										</p>
										<p className={''}>
											{currentLanguage === 'ind' ? item.subTitle2[0] : item.subTitle2[1]}
										</p>
									</div>
								</div>
							</div>
							<div className={'2xl:mx-[15em] mx-[2em] my-[5em]'}>
								<div className={'flex flex-col'}>
									<div className={'flex flex-col py-[1em]'}>
										<h5 className={'text-yellow-500 md:text-[2em] text-[1.5em] font-[700]'}>
											{currentLanguage === 'ind' ? item.restaurant[0] : item.restaurant[1]}
										</h5>
										<p className={'text-white text-[1em] font-[600]'}>
											{currentLanguage === 'ind' ? item.subTitle2[0] : item.subTitle2[1]}
										</p>
									</div>
									<div className={'flex flex-col gap-[1em] text-[1em]'}>
										<p className={''}>
											{currentLanguage === 'ind' ? item.description[0] : item.description[1]}
										</p>
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
