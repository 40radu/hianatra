import classNames from 'classnames'
import React from 'react'
import './style.scss'
import CardBlog, { BlogCourseProps } from '@/components/common/card/CardBlog'

type BodyTabsProps = {
	cardsList: BlogCourseProps[]
}

function BodyTabsBlog(props: BodyTabsProps) {
	const { cardsList } = props
	return (
		<div className={classNames('blog')} >
			{
				cardsList.map((card, id) => {
					return (
						<CardBlog
							key={id}
							image={card.image}
							isFree={card.isFree}
							numberOfLesson={card.numberOfLesson}
							numberOfStudent={card.numberOfStudent}
							title={card.title}
							topic={card.topic.toUpperCase()}
							price={card.price}
							description={card.description}
						/>
					)
				})
			}
		</div>
	)
}

export default BodyTabsBlog