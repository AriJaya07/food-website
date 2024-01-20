import { JSX } from 'react'

interface MockUsContent {
	image: string
	title: [string, string]
	description: [string, string]
}

interface MockUs {
	image: string
	title: [string, string]
	subTitle1: [string, string]
	subTitle2: [string, string]
	header: [string, string]
	host: [string, string]
	content: MockUsContent[]
}

const mockUs: MockUs[] = [
	{
		image: 'https://restorangaruda.com/images/page.jpg',
		title: [
			'Menu',
			'Menu',
		],
		subTitle1: [
			'Rumah',
			'Home',
		],
		subTitle2: [
			'Menu',
			'Menu',
		],
		header: [
			'Pesanan Daring',
			'Online Order',
		],
		host: [
			'melayani',
			'service',
		],
		content: [
			{
				image: 'https://img.icons8.com/nolan/96/purchase-order.png',
				title: [
					'Pesan antar',
					'Delivery Order',
				],
				description: [
					'Layanan antar gratis setiap pembelian menu makanan kami. Area layanan hingga 15 KM',
					'Free service between purchases of each of our food menus. Service area up to 15 KM',
				],
			},
			{
				image: 'https://img.icons8.com/nolan/96/wish-list.png',
				title: [
					'Pesan antar',
					'Delivery Order',
				],
				description: [
					'Layanan antar gratis setiap pembelian menu makanan kami. Area layanan hingga 15 KM',
					'Free service between purchases of each of our food menus. Service area up to 15 KM',
				],
			},
			{
				image: 'https://img.icons8.com/nolan/96/natural-food.png',
				title: [
					'Pesan antar',
					'Delivery Order',
				],
				description: [
					'Layanan antar gratis setiap pembelian menu makanan kami. Area layanan hingga 15 KM',
					'Free service between purchases of each of our food menus. Service area up to 15 KM',
				],
			},
		],
	},
]

export default function Us({currentLanguage}: { currentLanguage: 'ind' | 'eng' }): JSX.Element {
	return (
		<div className={''}>
			{mockUs.map((item: MockUs, index: number) => {
				return (
					<div key={index} className={'flex flex-col'}>
						<div className={''}>
							<div className={'2xl:mt-[-20em] mt-[-10em]'}>
								<img
									src={`${item.image}`}
									alt={`image-about-${index}`} className={'w-full lg:h-full h-[40em] opacity-50'}/>
							</div>
							<div className={'flex flex-col absolute z-[5] items-center top-[15em] left-0 right-0'}>
								<h5 className={'md:text-[5em] text-[3em] font-[700] text-white'}>
									{currentLanguage === 'ind' ? item.title[0] : item.title[1]}
								</h5>
								<div className={'flex flex-row text-[1.5em] font-[700]'}>
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
						<div className={'2xl:mx-[20em] mx-[2em] my-[5em]'}>
							<div className={'flex flex-col'}>
								<div className={'flex text-center flex-col py-[2em]'}>
									<h5 className={'text-yellow-500 text-[2em]'}>
										{currentLanguage === 'ind' ? item.header[0] : item.header[1]}
									</h5>
									<p className={'text-white'}>
										{currentLanguage === 'ind' ? item.host[0] : item.host[1]}
									</p>
								</div>
								<div className={'flex flex-row flex-wrap justify-center gap-[5em]'}>
									{item.content.map((itemContent: MockUsContent, indexContent: number) => {
										return (
											<div key={indexContent}
											     className={'flex flex-col justify-center items-center w-[20em] gap-[0.5em]'}>
												<div>
													<img src={`${itemContent.image}`}
													     alt={`delivery-order-${indexContent}`} className={'w-[10em]'}/>
												</div>
												<h5 className={''}>
													{currentLanguage === 'ind' ? itemContent.title[0] : itemContent.title[1]}
												</h5>
												<p className={'text-center'}>
													{currentLanguage === 'ind' ? itemContent.description[0] : itemContent.description[1]}
												</p>
											</div>
										)
									})}
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
