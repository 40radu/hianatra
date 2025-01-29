import HeroCommon from '@/components/common/section/HeroCommon'
import Ready from '@/components/common/section/Ready'
import Testimonial from '@/components/common/section/Testimonial'
import { getI18n } from '@/locales/server'
import CardsAbout from '@/section/about/CardsAbout'
import Instructors from '@/section/about/Instructors'
import Partner from '@/section/about/Partner'
import Welcome from '@/section/about/Welcome'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: "À propos | Hianatra",
}

async function About() {
	const translate = await getI18n()
	return (
		<>
			<HeroCommon smallTitle={translate("aboutHero.title")} largeTitle='Hianatra' />
			<Welcome />
			<CardsAbout />
			<Ready />
			<Instructors />
			<Testimonial />
			<Partner />
		</>
	)
}

export default About