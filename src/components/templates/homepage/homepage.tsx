'use client' // top to the file

import Header from '@/components/templates/@common/header'
import Footer from '@/components/templates/@common/footer'
import About from '@/components/templates/homepage/manage/about'
import Order from '@/components/templates/homepage/manage/order'
import Location from '@/components/templates/homepage/manage/location'
import Welcome from '@/components/templates/homepage/manage/welcome'
import Menu from '@/components/templates/homepage/manage/menu'
import Contact from '@/components/templates/@common/contact'
import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

import style from './homepage-style.module.css'

export default function Homepage(): JSX.Element {
	const [currentLanguage, setCurrentLanguage] = useState<'ind' | 'eng'>('eng')

	const {scrollYProgress} = useScroll()
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 1000,
		damping: 30,
		restDelta: 0.001,
	})

	const switchLanguage = (newLanguage: 'ind' | 'eng') => {
		setCurrentLanguage(newLanguage)
	}

	return (
		<>
			<Header currentLanguage={currentLanguage} switchLanguage={switchLanguage}/>
			<motion.div className={`${style.progressBar}`} style={{scaleX}}/>
			<About currentLanguage={currentLanguage}/>
			<div className={'2xl:mx-[20em] md:mx-[5em] mx-[2em]'}>
				<Welcome currentLanguage={currentLanguage}/>
				<Order currentLanguage={currentLanguage}/>
				<Location/>
				<Menu currentLanguage={currentLanguage}/>
			</div>
			<Contact/>
			<Footer currentLanguage={currentLanguage}/>
		</>
	)
}
