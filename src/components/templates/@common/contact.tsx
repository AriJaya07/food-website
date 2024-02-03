'use client' // This is a client component 👈🏽

import { useEffect, useState } from 'react'

export default function Contact(): JSX.Element {
	const [showPopup, setShowPopup] = useState(false)
	const [currentDate, setCurrentDate] = useState('')

	useEffect(() => {
		const today = new Date()
		const formattedDate = today.toISOString().split('T')[0]
		setCurrentDate(formattedDate)
	}, [])

	const openPopup = () => {
		setShowPopup(!showPopup)
	}

	return (
		<>
			<div className={'fixed z-[1000] bottom-[4em] right-[4em]'}>
				<div onClick={openPopup} className={'text-yellow-600 cursor-pointer'}>
					<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
					     className="bi bi-chat-dots-fill"
					     viewBox="0 0 16 16">
						<path
							d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
					</svg>
				</div>
			</div>

			<div
				className={`${showPopup ? 'block' : 'hidden'} pointer-events-auto fixed z-[10000] inset-0 bg-black bg-opacity-50 flex items-center justify-center`}>
				<div className={'bg-white rounded-lg shadow-md md:w-1/2 w-full flex flex-col justify-center'}>
					<div className={'flex bg-green-600 rounded-t-lg flex-row justify-between p-5'}>
						<p className={'font-[700] text-[2em]'}>Contact</p>
						<p onClick={openPopup} className={'text-[1em] font-[600] cursor-pointer'}>x</p>
					</div>
					<div className={'flex flex-col p-5 gap-[1em]'}>
						<div className={'text-black'}>
							<p className={''}>Reserve a table, ask for today`s special or just send us a message:</p>
						</div>
						<div className={'text-black'}>
							<label className={'text-gray-500 font-[500]'}>Name</label>
							<input type={'text'} name={'name'} placeholder={'Name'}
							       className={'w-full border bg-transparent focus:outline-none p-5'}/>
						</div>
						<div className={'text-black'}>
							<label className={'text-gray-500 font-[500]'}>Count</label>
							<input type={'text'} name={'count'} placeholder={'How many people'}
							       className={'w-full border bg-transparent focus:outline-none p-5'}/>
						</div>
						<div className={'text-black'}>
							<label className={'text-gray-500 font-[500]'}>Date</label>
							<input type={'date'} value={currentDate} name={'date'}
							       className={'w-full border bg-transparent focus:outline-none p-5'} disabled={true}/>
						</div>
						<div className={'text-black'}>
							<label className={'text-gray-500 font-[500]'}>Message</label>
							<textarea name={'message'} placeholder={'Message / Special requirements'}
							          className={'w-full border bg-transparent focus:outline-none p-5'}></textarea>
						</div>
						<div className={'text-white flex justify-end py-2'}>
							<button type={'submit'} className={'border-0 bg-blue-500 px-10 py-2 rounded-2xl'}>
								Send Message
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
