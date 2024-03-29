'use client' // top to the file

import Description from '@/components/templates/detail-menu/manage/description'
import Header from '@/components/templates/@common/header'
import Footer from '@/components/templates/@common/footer'
import { useState } from 'react'
import Contact from '@/components/templates/@common/contact'

export default function DetailMenu(): JSX.Element {
	const [currentLanguage, setCurrentlanguage] = useState<'ind' | 'eng'>('eng')

	const switchLanguage = (newLanguage: 'ind' | 'eng') => {
		setCurrentlanguage(newLanguage)
	}
	return (
		<div>
			<Header currentLanguage={currentLanguage} switchLanguage={switchLanguage} />
			<Description currentLanguage={currentLanguage} />
			<Contact />
			<Footer currentLanguage={currentLanguage} />
		</div>
	)
}
