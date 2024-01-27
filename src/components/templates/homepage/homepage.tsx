'use client' // top to the file

import Header from '@/components/templates/@common/header'
import Footer from '@/components/templates/@common/footer'
import About from '@/components/templates/homepage/manage/about'
import Order from '@/components/templates/homepage/manage/order'
import Location from '@/components/templates/homepage/manage/location'
import Welcome from '@/components/templates/homepage/manage/welcome'
import Menu from '@/components/templates/homepage/manage/menu'
import { useState } from 'react'

export default function Homepage(): JSX.Element {
	const [currentLanguage, setCurrentlanguage] = useState<'ind' | 'eng'>('eng')

	const switchLanguage = (newLanguage: 'ind' | 'eng') => {
		setCurrentlanguage(newLanguage)
	}

	return (
		<>
			<Header currentLanguage={currentLanguage} switchLanguage={switchLanguage}/>
			<About currentLanguage={currentLanguage}/>
			<div className={'2xl:mx-[20em] md:mx-[5em] mx-[2em]'}>
				<Welcome currentLanguage={currentLanguage}/>
				<Order currentLanguage={currentLanguage}/>
				<Location/>
				<Menu currentLanguage={currentLanguage}/>
			</div>
			<Footer currentLanguage={currentLanguage}/>
		</>
	)
}
