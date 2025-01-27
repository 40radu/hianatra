import Icon from '@/components/Icon'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import "./style.scss"
import Button from '@/components/navigation/Button'

export interface CardCourseProps {
	topic: string;
	image: string;
	isFree: boolean;
	title: string;
	numberOfStudent: number;
	numberOfLesson: number;
	price: string;
	description: string
}

function CardCourse(props: CardCourseProps) {
	const { image, isFree, numberOfLesson, numberOfStudent, title, topic, price, description } = props
	return (
		<div className={classNames("card-course")}>
			<div className={classNames("card-course__head")}>
				<span className={classNames("card-course__head-image")}>
					<Image src={image} width={433} height={282} alt='' />
				</span>
				<div className={classNames("card-course__head-topic")}>
					<p>{topic}</p>
				</div>
			</div>
			<div className={classNames("card-course__body", "rado")}>
				<p className={classNames("card-course__body-access", { free: isFree })}>
					{isFree ? "Gratuit" : "Payante"}
				</p>
				<h4>
					{title}
				</h4>
				<div className={classNames("card-course__body-description")}>
					<span className={classNames("item", "students")}>
						<Icon name='student' variant='blue-secondary' />
						{numberOfStudent} Etudiants
					</span>
					<span className={classNames("item", "lessons")}>
						<Icon name='lesson' variant='blue-secondary' />
						{numberOfLesson} Leçons
					</span>
				</div>
			</div>
			<div className={classNames("card-course__hover")}>
				<p className={classNames("card-course__hover-price")}> {price} Ar </p>
				<div className={classNames("card-course__hover-text")}>
					<h4>{title}</h4>
					<div className={classNames("info")}>
						<span className={classNames("item", "students")}>
							<Icon name='student' variant='blue-secondary' />
							{numberOfStudent} Etudiants
						</span>
						<span className={classNames("item", "lessons")}>
							<Icon name='lesson' variant='blue-secondary' />
							{numberOfLesson} Leçons
						</span>
					</div>
					<p >
						{description}
					</p>
				</div>
				<div className={classNames("card-course__hover-wrapper_btns")}>
					<Button label='Voir Plus' />
					<Button label='S&apos;inscrire' variant='transparent' />
				</div>

			</div>
		</div>
	)
}

export default CardCourse