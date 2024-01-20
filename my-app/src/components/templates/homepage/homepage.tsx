import Header from '@/components/templates/@common/header'
import Footer from '@/components/templates/@common/footer'
import About from '@/components/templates/homepage/manage/about'
import Order from '@/components/templates/homepage/manage/order'
import Location from '@/components/templates/homepage/manage/location'
import Welcome from '@/components/templates/homepage/manage/welcome'
import Menu from '@/components/templates/homepage/manage/menu'
import { LanguageProvider } from '@/components/templates/@common/languageContext'

export default function Homepage(): JSX.Element {

	let currentLanguage: 'ind' | 'eng' = 'eng'
	return (
		<LanguageProvider>
			<Header/>
			<About currentLanguage={currentLanguage}/>
			<div className={'2xl:mx-[20em] md:mx-[5em] mx-[2em]'}>
				<Welcome currentLanguage={currentLanguage}/>
				<Order currentLanguage={currentLanguage}/>
				<Location/>
				<Menu currentLanguage={currentLanguage}/>
			</div>
			<Footer currentLanguage={currentLanguage}/>
		</LanguageProvider>
	)
}
