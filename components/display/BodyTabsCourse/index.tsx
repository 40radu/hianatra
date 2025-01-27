import CardCourse, { CardCourseProps } from '@/components/common/card/CardCourse'
import classNames from 'classnames'
import React from 'react'
import './style.scss'

type BodyTabsProps = {
	cardsList: CardCourseProps[]
}

function BodyTabsCourse(props: BodyTabsProps) {
	const { cardsList } = props
	return (
		<div className={classNames('course')} >
			{
				cardsList.map((card, id) => {
					return (
						<CardCourse
							key={id}
							image={card.image}
							isFree={card.isFree}
							numberOfLesson={card.numberOfLesson}
							numberOfStudent={card.numberOfStudent}
							title={card.title}
							topic={card.topic}
							price={card.price}
							description={card.description}
						/>
					)
				})
			}
		</div>
	)
}

export default BodyTabsCourse