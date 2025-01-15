import HeroCommon from '@/components/common/section/HeroCommon'
import Welcome from '@/section/about/Welcome'
import React from 'react'

function About() {
	return (
		<>
			<HeroCommon smallTitle='À propos de' largeTitle='Hianatra' />
			<Welcome />
		</>
	)
}

export default About