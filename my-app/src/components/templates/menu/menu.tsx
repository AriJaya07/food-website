import Us from '@/components/templates/menu/manage/us'
import Header from '@/components/templates/@common/header'
import Footer from '@/components/templates/@common/footer'
import List from '@/components/templates/menu/manage/list'
import { LanguageProvider } from '@/components/templates/@common/languageContext'

export default function Menu(): JSX.Element {
	let currencyLanguage: 'ind' | 'eng' = 'eng'
	return (
		<LanguageProvider>
			<Header/>
			<div className={''}>
				<Us currentLanguage={currencyLanguage}/>
				<List currentLanguage={currencyLanguage}/>
			</div>
			<Footer currentLanguage={currencyLanguage}/>
		</LanguageProvider>
	)
}
