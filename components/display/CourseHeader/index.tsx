'use client'

import React, { useState } from 'react'
import Container from '@/components/common/Container'
import classNames from 'classnames'
import { courseLinks } from './data'
import ButtonSquare from '@/components/navigation/ButtonSquare'
import Icon from '@/components/Icon'
import './style.scss'
import CardsCourse, { CardsCourseProps } from '@/section/course/CardsCourse'

function CourseHeader() {
	const [filterCourse, setFilterCourse] = useState<CardsCourseProps['filter']>("Tous les cours")
	return (
		<>
			<Container className={classNames("container")} >
				<div className={classNames("container__navbar")} >
					<div className={classNames('container__navbar__navigation')} >
						{
							courseLinks.map((link, index) => (
								<ButtonSquare
									key={`course--${index}`}
									label={link.label}
									variant={filterCourse === link.label ? "blue" : "white"}
									className={classNames('container__navbar__navigation__button')}
									onClick={() => setFilterCourse(link.label)}
								/>
							))
						}
					</div>
					<div className={classNames('container__navbar__search')} >
						<Icon
							name='miniSearch'
							variant='gray'
							className={classNames('container__navbar__search__icon')}
						/>
						<input type="text" className={classNames('container__navbar__search__input')} placeholder='Recherche' />
					</div>
				</div>
			</Container>
			<CardsCourse filter={filterCourse} />
		</>
	)
}

export default CourseHeader