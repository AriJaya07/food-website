import Branch from '@/components/templates/about/manage/branch'
import Us from '@/components/templates/about/manage/us'
import Header from '@/components/templates/@common/header'
import Footer from '@/components/templates/@common/footer'
import { LanguageProvider } from '@/components/templates/@common/languageContext'

export default function About(): JSX.Element {
	let currentLanguage: 'ind' | 'eng' = 'eng'
	return (
		<LanguageProvider>
			<Header/>
			<div className={''}>
				<Us currentLanguage={currentLanguage}/>
				<Branch currentLanguage={currentLanguage}/>
			</div>
			<Footer currentLanguage={currentLanguage}/>
		</LanguageProvider>
	)
}
