interface MockFooter {
	title: [string, string],
	description: [string, string]
	copyRight: string
	time: [string, string]
	daily: {
		day: string
		clock: string
	}[]
}

const mockFooter: MockFooter[] = [
	{
		title: [
			'Restoran Lokal',
			'Local Restaurant',
		],
		description: [
			'Restoran Garuda telah berdiri sejak 1976 hingga saat ini. Kami bergerak dibidang mengelolah makanan yang spesifik yaitu Minang dan Melayu',
			'Garuda Restaurant has been established since 1976 until now. We operate in the specific field of food management, namely Minang and Malay',
		],
		copyRight: 'copyright @2024 RestaurantLocal - All rights reserved',
		time: [
			'Jam buka',
			'Open Hours',
		],
		daily: [
			{
				day: 'Sunday<br/> Monday<br/> Tuesday<br/> Wednesday<br/> Thursday<br/>Friday<br/> Saturday',
				clock: '09:00 - 20:00<br/> 09:00 - 20:00<br/> 09:00 - 20:00<br/> 09:00 - 20:00<br/> 09:00 - 20:00<br/> 09:00 - 20:00<br/> 09:00 - 20:00',
			},
		],
	},
]

export default function Footer({currentLanguage}: { currentLanguage: 'ind' | 'eng' }): JSX.Element {
	return (
		<footer className={'bg-green-800'}>
			{mockFooter.map((item: MockFooter, index: number) => {
				return (
					<div key={index} className={'2xl:mx-[20em] md:mx-[5em] mx-[2em] md:p-10 p-5'}>
						<div className={'flex flex-row justify-center flex-wrap md:gap-[5em] gap-[2em]'}>

							<div className={'flex flex-col md:gap-[2em] gap-[1em] w-[20em]'}>
								<h5 className={'font-[700] md:text-[1.5em] text-[1em]'}>
									{currentLanguage === 'ind' ? item.title[0] : item.title[1]}
								</h5>
								<p className={'md:text-[1em] text-[0.85em]'}>
									{currentLanguage === 'ind' ? item.description[0] : item.description[1]}
								</p>
								<div className={'flex flex-row gap-[1em]'}>
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
										     fill="currentColor"
										     className="bi bi-facebook" viewBox="0 0 16 16">
											<path
												d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
										</svg>
									</div>
									<div className={''}>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										     fill="currentColor"
										     className="bi bi-instagram" viewBox="0 0 16 16">
											<path
												d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
										</svg>
									</div>
									<div className={''}>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										     fill="currentColor"
										     className="bi bi-geo-alt" viewBox="0 0 16 16">
											<path
												d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
											<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
										</svg>
									</div>
								</div>
							</div>

							<div className={'flex flex-col md:gap-[2em] gap-[1em] w-[20em]'}>
								<h5 className={'font-[700] md:text-[1.5em] text-[1em]'}>
									{currentLanguage === 'ind' ? item.time[0] : item.time[1]}
								</h5>
								<div className={'flex flex-col'}>
									{item.daily.map((dayInfo: { day: string, clock: string }, dayIndex: number) => (
										<div key={dayIndex} className="flex flex-row justify-between gap-[2em]">
											<p className="md:text-[1em] text-[0.85em]"
											   dangerouslySetInnerHTML={{__html: dayInfo.day}}></p>
											<p className="md:text-[1em] text-[0.85em]"
											   dangerouslySetInnerHTML={{__html: dayInfo.clock}}></p>
										</div>
									))}
								</div>
							</div>
						</div>
						<h5 className={'text-center font-[400] pt-[5em] md:text-[0.85em] text-[0.75em]'}>
							{item.copyRight}
						</h5>
					</div>
				)
			})}
		</footer>
	)
}
