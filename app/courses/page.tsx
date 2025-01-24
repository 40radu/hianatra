import HeroCommon from '@/components/common/section/HeroCommon'
import CourseHeader from '@/components/display/CourseHeader'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: "Cours | Hianatra"
}

function Courses() {
	return (
		<>
			<HeroCommon smallTitle='Les cours chez' largeTitle='Hianatra' />
			<CourseHeader />
		</>
	)
}

export default Courses