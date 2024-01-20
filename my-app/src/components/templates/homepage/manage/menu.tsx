interface MockMenuContent {
	id: number
	image: string
	title: string[]
}

interface MockMenu {
	id: number
	header: [string, string],
	content: MockMenuContent[]
}

const mockMenu: MockMenu[] = [
	{
		id: 1,
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

export default function Menu({currentLanguage}: { currentLanguage: 'ind' | 'eng' }): JSX.Element {

	return (
		<div className={'py-[5em]'}>
			{mockMenu.map((item: MockMenu, index: number) => {
				return (
					<div key={index} className={'flex flex-col justify-center items-center gap-[2em]'}>
						<div className={''}>
							<h5 className={'font-[700] text-[2em]'}>
								{currentLanguage === 'ind' ? item.header[0] : item.header[1]}
							</h5>
						</div>
						<div className={'flex flex-row flex-wrap justify-center lg:gap-[1em] gap-[3em]'}>
							{item.content.map((itemContent: MockMenuContent, indexContent: number) => {
								return (
									<div key={indexContent} className={''}>
										<div key={index}
										     className={'flex lg:flex-row flex-col lg:items-center gap-[1em]'}>
											<div className={''}>
												<img src={`${itemContent.image}`}
												     alt={`image-menu-${index}`} className={'lg:w-[15em] w-full'}/>
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
									</div>
								)
							})}
						</div>
					</div>
				)
			})}
		</div>
	)
}
