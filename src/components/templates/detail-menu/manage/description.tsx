'use client' // top to the file

import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { useParams } from 'next/navigation'

interface MockDetail {
	id: number,
	title: string[]
	image: string[]
	imageDesc: {
		imageItem: string,
		subTitle: string[]
	}[]
	description: string[]
}

const mockDetail: MockDetail[] = [
	{
		id: 1,
		title: [
			'Makanan Bali',
			'Bali Food',
		],
		image: [
			'https://restorangaruda.com/imagesfile/menu/pergedel-kentang.jpeg',
			'https://restorangaruda.com/imagesfile/menu/ayam-goreng.jpeg',
			'https://restorangaruda.com/imagesfile/menu/pergedel-kentang.jpeg',
		],
		imageDesc: [
			{
				imageItem: 'https://restorangaruda.com/imagesfile/menu/pergedel-kentang.jpeg',
				subTitle: [
					'Benda 1',
					'Item 1',
				],
			},
			{
				imageItem: 'https://restorangaruda.com/imagesfile/menu/ayam-goreng.jpeg',
				subTitle: [
					'Benda 2',
					'Item 2',
				],
			},
			{
				imageItem: 'https://restorangaruda.com/imagesfile/menu/pergedel-kentang.jpeg',
				subTitle: [
					'Benda 3',
					'Item 3',
				],
			},
			{
				imageItem: 'https://restorangaruda.com/imagesfile/menu/ayam-goreng.jpeg',
				subTitle: [
					'Benda 4',
					'Item 4',
				],
			},
		],
		description: [
			'Lorem Ipsum hanyalah teks tiruan dari industri percetakan dan penyusunan huruf. Lorem Ipsum telah menjadi teks tiruan standar industri sejak tahun 1500-an, ketika seorang pencetak yang tidak dikenal mengambil kumpulan teks dan mengacaknya untuk membuat buku contoh huruf. Ia tidak hanya bertahan selama lima abad, tetapi juga lompatan ke dalam penyusunan huruf elektronik, namun tetap tidak berubah. Ini dipopulerkan pada tahun 1960an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker yang menyertakan versi Lorem Ipsum. Mengapa kami menggunakannya? \n Sudah menjadi fakta lama bahwa pembaca akan terganggu oleh konten halaman yang dapat dibaca ketika melihat tata letaknya. Maksud penggunaan Lorem Ipsum adalah distribusi hurufnya kurang lebih normal, berbeda dengan penggunaan \'Konten di sini, konten di sini\', sehingga terlihat seperti bahasa Inggris yang mudah dibaca. Banyak paket desktop publishing dan editor halaman web sekarang menggunakan Lorem Ipsum sebagai teks model default, dan pencarian \'lorem ipsum\' akan mengungkap banyak situs web yang masih dalam tahap awal. Berbagai versi telah berkembang selama bertahun-tahun, kadang-kadang secara tidak sengaja, kadang-kadang disengaja (suntikan humor dan sejenisnya).',


			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. \n There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
		],
	},
	{
		id: 2,
		title: [
			'Makanan Tabanan',
			'Tabanan Food',
		],
		image: [
			'https://restorangaruda.com/imagesfile/menu/pergedel-kentang.jpeg',
			'https://restorangaruda.com/imagesfile/menu/ayam-goreng.jpeg',
			'https://restorangaruda.com/imagesfile/menu/pergedel-kentang.jpeg',
		],
		imageDesc: [
			{
				imageItem: 'https://restorangaruda.com/imagesfile/menu/pergedel-kentang.jpeg',
				subTitle: [
					'Benda 1',
					'Item 1',
				],
			},
			{
				imageItem: 'https://restorangaruda.com/imagesfile/menu/ayam-goreng.jpeg',
				subTitle: [
					'Benda 2',
					'Item 2',
				],
			},
			{
				imageItem: 'https://restorangaruda.com/imagesfile/menu/pergedel-kentang.jpeg',
				subTitle: [
					'Benda 3',
					'Item 3',
				],
			},
			{
				imageItem: 'https://restorangaruda.com/imagesfile/menu/ayam-goreng.jpeg',
				subTitle: [
					'Benda 4',
					'Item 4',
				],
			},
		],
		description: [
			'Lorem Ipsum hanyalah teks tiruan dari industri percetakan dan penyusunan huruf. Lorem Ipsum telah menjadi teks tiruan standar industri sejak tahun 1500-an, ketika seorang pencetak yang tidak dikenal mengambil kumpulan teks dan mengacaknya untuk membuat buku contoh huruf. Ia tidak hanya bertahan selama lima abad, tetapi juga lompatan ke dalam penyusunan huruf elektronik, namun tetap tidak berubah. Ini dipopulerkan pada tahun 1960an dengan dirilisnya lembaran Letraset yang berisi bagian-bagian Lorem Ipsum, dan baru-baru ini dengan perangkat lunak desktop publishing seperti Aldus PageMaker yang menyertakan versi Lorem Ipsum. Mengapa kami menggunakannya? \n Sudah menjadi fakta lama bahwa pembaca akan terganggu oleh konten halaman yang dapat dibaca ketika melihat tata letaknya. Maksud penggunaan Lorem Ipsum adalah distribusi hurufnya kurang lebih normal, berbeda dengan penggunaan \'Konten di sini, konten di sini\', sehingga terlihat seperti bahasa Inggris yang mudah dibaca. Banyak paket desktop publishing dan editor halaman web sekarang menggunakan Lorem Ipsum sebagai teks model default, dan pencarian \'lorem ipsum\' akan mengungkap banyak situs web yang masih dalam tahap awal. Berbagai versi telah berkembang selama bertahun-tahun, kadang-kadang secara tidak sengaja, kadang-kadang disengaja (suntikan humor dan sejenisnya).',

			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. \n There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
		],
	},
]

export default function Description({currentLanguage}: { currentLanguage: string }): JSX.Element {
	const {idDetail} = useParams<{ idDetail: string }>()
	const allData: MockDetail | undefined = mockDetail.find((p) => p.id === parseInt(idDetail, 10))

	const carouselSettings = {
		autoPlay: true,     // Enable auto-play
		interval: 3000,     // Time between slides in milliseconds (adjust as needed)
		infiniteLoop: true, // Infinite loop of slides
		showThumbs: true,  // Hide thumbnail navigation
		width: '100%',
	}

	if (!allData) {
		return <div>Product not found</div>
	}

	return (
		<div className={''}>
			<div className={'p-[10em]'}>
				<div className={'flex flex-col'}>
					<div>
						<div className={'flex flex-col justify-center items-center'}>
							<h5 className={'p-5 font-[700] text-[2em]'}>
								{currentLanguage === 'ind' ? allData.title[0] : allData.title[1]}
							</h5>
							<div className={'flex justify-center items-center w-[50em]'}>
								<Carousel {...carouselSettings}>
									{allData.image.map((itemImage: string, indexImage: number): JSX.Element => {
										return (
											<div key={indexImage}
											     className={'flex justify-center items-center'}>
												<img src={itemImage} alt={`Slide ${indexImage}`}
												     className={'w-[10em]'}/>
											</div>
										)
									})}
								</Carousel>
							</div>
						</div>
						<div className={'p-5'}>
							<p className={''}>
								{currentLanguage === 'ind' ? allData.description[0] : allData.description[1]}
							</p>
						</div>
						<div className={'flex flex-row flex-wrap gap-[2em] justify-center items-center p-5'}>
							{allData.imageDesc.map((itemImageDes: {imageItem:string, subTitle: string[] }, indexImageDesc: number): JSX.Element => {
								return (
									<div key={indexImageDesc} className={'rounded-2xl'}>
										<div>
											<img
												src={itemImageDes.imageItem}
												alt={'image-1-des'} className={'rounded-t-2xl w-[10em]'}/>
										</div>
										<div className={'p-5 bg-white rounded-b-2xl'}>
											<h5 className={'text-center text-black'}>
												{currentLanguage === 'ind' ? itemImageDes.subTitle[0] : itemImageDes.subTitle[1]}
											</h5>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
