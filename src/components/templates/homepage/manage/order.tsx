'use client' // This is a client component 👈🏽

import { useState } from 'react'

interface MockOrder {
	id: number
	image: string
	title: string[]
	description: string[]
}

const mockOrder: MockOrder[] = [
	{
		id: 1,
		image: 'https://img.icons8.com/nolan/96/purchase-order.png',
		title: [
			'Pesan antar',
			'Delivery Order',
		],
		description: [
			'Layanan antar gratis setiap pembelian menu makanan kami. Area layanan hingga 10 KM',
			'Free delivery service for every purchase of our food menu. Service area up to 10 KM',
		],
	},
	{
		id: 2,
		image: 'https://img.icons8.com/nolan/96/wish-list.png',
		title: [
			'Buku Catatan',
			'Book Note',
		],
		description: [
			'Menikmati hidangan kami langsung di rumah/kantor Anda. Minimal order Rp500,000.-',
			'Enjoy our dishes right at your home/office. Minimum order IDR 500,000.-',
		],
	},
	{
		id: 3,
		image: 'https://img.icons8.com/nolan/96/natural-food.png',
		title: [
			'Prasmanan',
			'Buffet',
		],
		description: [
			'Untuk setiap acara spesial Anda. Informasi dapat langsung hubungi kantor kami.',
			'For your every special event. For information, please contact our office directly.',
		],
	},
]

export default function Order({currentLanguage}: { currentLanguage: 'ind' | 'eng' }): JSX.Element {
	return (
		<div className={'lg:pt-[20em] md:pt-[60em] pt-[5em] pb-[5em]'}>
			<div className={'flex flex-col'}>
				<div className={'flex flex-row flex-wrap justify-center gap-[4em]'}>

					{mockOrder.map((item: MockOrder, index: number): JSX.Element => {
						return (
							<div key={index} className={'flex flex-col justify-center items-center lg:w-[20em] w-full'}>
								<div>
									<img src={`${item.image}`} alt={'delivery-order'}
									     className={'w-[7em]'}/>
								</div>
								<div className={'text-center'}>
									<h5 className={'font-[700] text-yellow-500 text-[1.5em]'}>
										{currentLanguage === 'ind' ? item.title[0] : item.title[1]}
									</h5>
									<p className={''}>
										{currentLanguage === 'ind' ? item.description[0] : item.description[1]}
									</p>
								</div>
							</div>
						)
					})}

				</div>
			</div>
		</div>
	)
}
