import HeroCommon from '@/components/common/section/HeroCommon'
import { getI18n } from '@/locales/server'
import CoursesList from '@/section/course/CoursesList'
import Spotlight from '@/section/course/Spotlight'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: "Cours | Hianatra"
}

async function Courses() {
	const translate = await getI18n()
	return (
		<>
			<HeroCommon
				smallTitle={translate("courseHero.title")}
				largeTitle='Hianatra'
			/>
			<Spotlight />
			<CoursesList />

		</>
	)
}

export default Courses