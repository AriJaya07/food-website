'use client' // This is a client component 👈🏽

import React, { useState } from 'react'
import Link from 'next/link'

// @ts-ignore
export default function Header({currentLanguage, switchLanguage}): JSX.Element {
	const [headerMobile, setHeaderMobile] = useState(false)

	const togglePopup = (): void => {
		setHeaderMobile(!headerMobile)
	}

	return (
		<nav className={'fixed z-[1000] bg-green-800 w-full'}>

			<div className={'lg:block hidden'}>
				<div className={'flex flex-row items-center justify-between p-5 mx-[5em]'}>
					<div className={''}>
						<Link href={'/'} className={''}>
							<img src={'https://restorangaruda.com/images/logo.png'} alt={'logo-header'}
							     className={'w-[10em]'}/>
						</Link>
					</div>
					<div className={'flex flex-row gap-[2em] items-center'}>
						<Link href={'/'} target={'_self'} className={'font-[700]'}>
							Home
						</Link>
						<Link href={'/about'} target={'_self'} className={'font-[700]'}>
							About Us
						</Link>
						<Link href={'/menu'} target={'_self'} className={'font-[700]'}>
							Menu
						</Link>
						<Link
							href={'https://www.google.com/maps/place/Warung+Nasi+goreng+Bu+Arniti/@-8.5031347,115.026411,21z/data=!4m15!1m8!3m7!1s0x2dd231de319906e5:0xfd49afe253af1ba8!2sBajera,+Kec.+Selemadeg,+Kabupaten+Tabanan,+Bali!3b1!8m2!3d-8.5039043!4d115.0258394!16s%2Fg%2F12h2td5kg!3m5!1s0x2dd2314049660a15:0x184cb09fd17d15a!8m2!3d-8.503105!4d115.0264756!16s%2Fg%2F11lgjqs4vs?entry=ttu'}
							target={'_blank'} className={'font-[700]'}>
							Location
						</Link>
						<div className={'border border-white px-4 py-1 rounded-full bg-transparent'}>
							<select
								id={'languageDropdown'}
								value={currentLanguage}
								onChange={(e) => switchLanguage(e.target.value)}
								className={'p-2 bg-transparent text-white focus:outline-none font-[700]'}
							>
								<option value={'ind'}>Indonesia</option>
								<option value={'eng'}>English</option>
							</select>
						</div>
					</div>
				</div>
			</div>

			<div className={'lg:hidden block'}>
				<div className={'flex flex-row items-center justify-between p-5 md:mx-[2em]'}>
					<div className={''}>
						<Link href={'/'} className={''}>
							<img src={'https://restorangaruda.com/images/logo.png'} alt={'logo-header'}
							     className={'w-[10em]'}/>
						</Link>
					</div>
					<div className={''}>
						<div onClick={togglePopup} className={'cursor-pointer'}>
							<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
							     className="bi bi-justify" viewBox="0 0 16 16">
								<path fillRule="evenodd"
								      d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
							</svg>
						</div>
					</div>
				</div>

				<div onClick={togglePopup}
				     className={`fixed bg-black bg-opacity-50 w-full h-full ${headerMobile ? 'block' : 'hidden'}`}>
				</div>
				<div
					className={`fixed xs:w-[20em] w-[15em] transform transition-transform top-0 right-0 z-[100] ${headerMobile ? 'translate-x-0' : 'translate-x-full'}`}>
					<div className={'xs:w-[20em] w-[15em] h-[100vh] flex flex-col bg-[#F7F9FF] text-white'}>
						<div className={'flex flex-row-reverse justify-between items-center px-3 pt-5'}>
							<div onClick={togglePopup} className={'cursor-pointer text-black p-5'}>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
								     className="bi bi-x-lg" viewBox="0 0 16 16">
									<path
										d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
								</svg>
							</div>
						</div>
						<div className={'flex flex-col h-full justify-between'}>
							<div>
								<Link
									href={'/'}
									target={'_self'}
									className={'justify-center flex'}
								>
									<img
										src={'https://restorangaruda.com/images/logo.png'}
										alt={'starpoints-sidebar'}
										className={'xs:w-[9em] w-[7em]'}
									/>
								</Link>
								<div className={'pl-2 pt-5 text-center'}>
									<Link
										rel="noreferrer"
										href={'/'}
										target={'_self'}
										className={'text-black underline p-1'}
									>
										<p className={'font-[600] hover:bg-gray-200 xs:text-[0.85em] text-[1em] p-[1em] m-0 cursor-pointer'}>
											Home
										</p>
									</Link>
									<Link
										rel="noreferrer"
										href={'/about'}
										target={'_self'}
										className={'text-black underline p-1'}
									>
										<p className={'font-[600] hover:bg-gray-200 xs:text-[0.85em] text-[1em] p-[1em] m-0 cursor-pointer'}>
											About Us
										</p>
									</Link>
									<Link
										rel="noreferrer"
										href={'/menu'}
										target={'_self'}
										className={'text-black underline p-1'}
									>
										<p className={'font-[600] hover:bg-gray-200 xs:text-[0.85em] text-[1em] p-[1em] m-0 cursor-pointer'}>
											Menu
										</p>
									</Link>
									<Link
										onClick={togglePopup}
										href={'https://www.google.com/maps/place/Warung+Nasi+goreng+Bu+Arniti/@-8.5031347,115.026411,21z/data=!4m15!1m8!3m7!1s0x2dd231de319906e5:0xfd49afe253af1ba8!2sBajera,+Kec.+Selemadeg,+Kabupaten+Tabanan,+Bali!3b1!8m2!3d-8.5039043!4d115.0258394!16s%2Fg%2F12h2td5kg!3m5!1s0x2dd2314049660a15:0x184cb09fd17d15a!8m2!3d-8.503105!4d115.0264756!16s%2Fg%2F11lgjqs4vs?entry=ttu'}
										target={'_blank'}
										className={'text-black underline p-1'}
									>
										<p className={'font-[600] hover:bg-gray-200 xs:text-[0.85em] text-[1em] p-[1em] m-0 cursor-pointer'}>
											Location
										</p>
									</Link>
								</div>
							</div>
							<div
								className={'text-center font-[600] hover:bg-gray-200 rounded-full underline m-[2em] border border-black p-1 cursor-pointer'}>
								<select
									id={'languageDropdown'}
									value={currentLanguage}
									onChange={(e) => switchLanguage(e.target.value)}
									className={'p-2 bg-transparent text-black focus:outline-none'}
								>
									<option value={'ind'}>Indonesia</option>
									<option value={'eng'}>English</option>
								</select>
							</div>
						</div>

					</div>
				</div>
			</div>

		</nav>
	)
}
