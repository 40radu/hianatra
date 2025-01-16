import HeroCommon from '@/components/common/section/HeroCommon'
import Ready from '@/components/common/section/Ready'
import CardsAbout from '@/section/about/CardsAbout'
import Welcome from '@/section/about/Welcome'
import React from 'react'

function About() {
	return (
		<>
			<HeroCommon smallTitle='À propos de' largeTitle='Hianatra' />
			<Welcome />
			<CardsAbout />
			<Ready />
		</>
	)
}

export default About