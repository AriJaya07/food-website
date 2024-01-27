import Link from 'next/link'

interface MockMenuContent {
	id: number
	image: string
	title: string[]
	subTitle: string
	description: string
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
				subTitle: 'Detail 1',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
			{
				id: 2,
				image: 'https://restorangaruda.com/imagesfile/menu/dendeng-sambal-hijau.jpeg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
				subTitle: 'Detail 2',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
			{
				id: 3,
				image: 'https://restorangaruda.com/imagesfile/menu/dendeng-sambal-hijau.jpeg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
				subTitle: 'Detail 3',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
			{
				id: 4,
				image: 'https://restorangaruda.com/imagesfile/menu/dendeng-sambal-hijau.jpeg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
				subTitle: 'Detail 4',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
			{
				id: 5,
				image: 'https://restorangaruda.com/imagesfile/menu/dendeng-sambal-hijau.jpeg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
				subTitle: 'Detail 5',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
			{
				id: 6,
				image: 'https://restorangaruda.com/imagesfile/menu/dendeng-sambal-hijau.jpeg',
				title: [
					'Dendeng sambal Hijau',
					'Green chili jerky',
				],
				subTitle: 'Detail 6',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
													<Link href={`/detail/${itemContent.id}`} target={'_self'}
													      className={'font-[700]'}>
														<button type={'button'}
														        className={'bg-green-700 px-3 py-2'}>Detail Menu
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
	)
}
