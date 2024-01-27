'use client' // top to the file

import Us from '@/components/templates/menu/manage/us'
import Header from '@/components/templates/@common/header'
import Footer from '@/components/templates/@common/footer'
import List from '@/components/templates/menu/manage/list'
import { useState } from 'react'

export default function Menu(): JSX.Element {
	const [currentLanguage, setCurrentlanguage] = useState<'ind' | 'eng'>('eng')

	const switchLanguage = (newLanguage: 'ind' | 'eng') => {
		setCurrentlanguage(newLanguage)
	}
	return (
		<>
			<Header currentLanguage={currentLanguage} switchLanguage={switchLanguage}/>
			<div className={''}>
				<Us currentLanguage={currentLanguage}/>
				<List currentLanguage={currentLanguage}/>
			</div>
			<Footer currentLanguage={currentLanguage}/>
		</>
	)
}
