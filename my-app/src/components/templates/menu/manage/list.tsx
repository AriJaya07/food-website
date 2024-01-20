interface MockMenuContent {
	id: number
	image: string
	title: [string, string]
}

interface MockMenu {
	id: number
	topHeader: [string, string]
	header: [string, string]
	content: MockMenuContent[]
}

const mockMenu: MockMenu[] = [
	{
		id: 1,
		topHeader: [
			'Spesialisasi',
			'Specialities',
		],
		header: [
			'Menu Kami',
			'Our Menu',
		],
		content: [
			{
				id: 1,
				image: 'https://restorangaruda.com/imagesfile/menu/dendeng-sambal-hijau.jpeg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
			},
			{
				id: 1,
				image: 'https://restorangaruda.com/imagesfile/menu/dendeng-sambal-hijau.jpeg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
			},
			{
				id: 1,
				image: 'https://restorangaruda.com/imagesfile/menu/dendeng-sambal-hijau.jpeg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
			},
			{
				id: 1,
				image: 'https://restorangaruda.com/imagesfile/menu/dendeng-sambal-hijau.jpeg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
			},
			{
				id: 1,
				image: 'https://restorangaruda.com/imagesfile/menu/dendeng-sambal-hijau.jpeg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
			},
			{
				id: 1,
				image: 'https://restorangaruda.com/imagesfile/menu/dendeng-sambal-hijau.jpeg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
			},
		],
	},
]

export default function List({currentLanguage}: { currentLanguage: 'ind' | 'eng' }): JSX.Element {
	return (
		<div className={''}>
			<div className={'2xl:mx-[20em] mx-[2em] my-[5em]'}>
				{mockMenu.map((item: MockMenu, index: number) => {
					return (
						<div key={index}>
							<div className={'flex flex-col text-center my-[2em]'}>
								<h5 className={'text-yellow-500 text-[2em]'}>
									{currentLanguage === 'ind' ? item.topHeader[0] : item.topHeader[1]}
								</h5>
								<p className={''}>
									{currentLanguage === 'ind' ? item.header[0] : item.header[1]}
								</p>
							</div>
							<div className={'flex flex-row flex-wrap justify-center gap-[3em]'}>
								{item.content.map((itemContent: MockMenuContent, indexContent: number) => {
									return (
										<div key={indexContent}
										     className={'flex md:flex-row flex-col md:items-center gap-[1em]'}>
											<div className={''}>
												<img src={`${itemContent.image}`}
												     alt={`image-menu-${indexContent}`}
												     className={'lg:w-[15em] w-full'}/>
											</div>
											<div className={'flex flex-col gap-[1em]'}>
												<p className={''}>
													{currentLanguage === 'ind' ? itemContent.title[0] : itemContent.title[1]}
												</p>
												<div>
													<button type={'button'} className={'bg-green-700 px-3 py-2'}>Order
														Now
													</button>
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
	)
}
