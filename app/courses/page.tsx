import HeroCommon from '@/components/common/section/HeroCommon'
import CoursesList from '@/section/course/CoursesList'
import Spotlight from '@/section/course/Spotlight'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: "Cours | Hianatra"
}

function Courses() {
	return (
		<>
			<HeroCommon
				smallTitle='Les cours chez'
				largeTitle='Hianatra'
			/>
			<Spotlight />
			<CoursesList />

		</>
	)
}

export default Courses