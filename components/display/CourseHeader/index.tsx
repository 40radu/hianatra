'use client'

import React, { useState } from 'react'
import Container from '@/components/common/Container'
import classNames from 'classnames'
import { courseLinks } from './data'
import ButtonSquare from '@/components/navigation/ButtonSquare'
import './style.scss'
import CardsCourse, { CardsCourseProps } from '@/section/course/CardsCourse'

function CourseHeader() {
	const [filterCourse, setFilterCourse] = useState<CardsCourseProps['filter']>("all")

	return (
		<>
			<Container className={classNames("container")} >
				<div className={classNames("container__navbar")} >
					<div className={classNames('container__navbar__navigation')} >

						{
							courseLinks.map((link, id) => {
								return (
									<ButtonSquare
										key={`course--${id}`}
										label={link.label}
										variant={filterCourse === link.href ? "blue" : "white"}
										className={classNames('container__navbar__navigation__button')}
										onClick={() => setFilterCourse(link.href)}
									/>
								)
							})
						}
					</div>
				</div>
			</Container>
			<CardsCourse filter={filterCourse} />
		</>
	)
}

export default CourseHeader