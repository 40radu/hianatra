import HeroCommon from '@/components/common/section/HeroCommon'
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
	title : "Cours | Hianatra"
}

function Courses() {
	return (
		<>
			<HeroCommon smallTitle='Les cours chez' largeTitle='Hianatra'/>
		</>
	)
}

export default Courses