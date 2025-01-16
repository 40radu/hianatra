import HeroCommon from '@/components/common/section/HeroCommon'
import Ready from '@/components/common/section/Ready'
import Testimonial from '@/components/common/section/Testimonial'
import CardsAbout from '@/section/about/CardsAbout'
import Instructors from '@/section/about/Instructors'
import Welcome from '@/section/about/Welcome'
import React from 'react'

function About() {
	return (
		<>
			<HeroCommon smallTitle='À propos de' largeTitle='Hianatra' />
			<Welcome />
			<CardsAbout />
			<Ready />
			<Instructors/>
			<Testimonial/>
		</>
	)
}

export default About