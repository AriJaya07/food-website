'use client' // top to the file

import Branch from '@/components/templates/about/manage/branch'
import Us from '@/components/templates/about/manage/us'
import Header from '@/components/templates/@common/header'
import Footer from '@/components/templates/@common/footer'
import { useState } from 'react'

export default function About(): JSX.Element {
	const [currentLanguage, setCurrentlanguage] = useState<'ind' | 'eng'>('eng')

	const switchLanguage = (newLanguage: 'ind' | 'eng') => {
		setCurrentlanguage(newLanguage)
	}
	return (
		<>
			<Header currentLanguage={currentLanguage} switchLanguage={switchLanguage}/>
			<div className={''}>
				<Us currentLanguage={currentLanguage}/>
				<Branch currentLanguage={currentLanguage}/>
			</div>
			<Footer currentLanguage={currentLanguage}/>
		</>
	)
}
