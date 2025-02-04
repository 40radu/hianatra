"use client"
import Icon from '@/components/Icon'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import "./style.scss"
import Button from '@/components/navigation/Button'
import { useScopedI18n } from '@/locales/client'

export interface CardCourseProps {
	topic: string;
	image: string;
	isFree: boolean;
	title: string;
	numberOfStudent: number;
	numberOfLesson: number;
	price: string;
	keyDescription: string
}

function CardCourse(props: CardCourseProps) {
	const translate = useScopedI18n("courseCard")
	const { image, isFree, numberOfLesson, numberOfStudent, title, topic, price, keyDescription } = props
	return (
		<div className="card-course">
			<div className="card-course__head">
				<span className="card-course__head-image">
					<Image src={image} width={433} height={282} alt='' />
				</span>
				<div className="card-course__head-topic">
					<p>{topic}</p>
				</div>
			</div>
			<div className="card-course__body">
				<p className={classNames("card-course__body-access", { free: isFree })}>
					{isFree ? translate("body.status.free") : translate("body.status.paying")}
				</p>
				<h4>
					{title}
				</h4>
				<div className="card-course__body-description">
					<span className="item students">
						<Icon name='student' variant='blue-secondary' />
						{numberOfStudent} {translate("student")}
					</span>
					<span className="item lessons">
						<Icon name='lesson' variant='blue-secondary' />
						{numberOfLesson} {translate("lesson")}
					</span>
				</div>
			</div>
			<div className="card-course__hover">
				<p className="card-course__hover-price"> {price} Ar </p>
				<div className={"card-course__hover-text"}>
					<h4>{title}</h4>
					<div className="info">
						<span className="item students">
							<Icon name='student' variant='blue-secondary' />
							{numberOfStudent} {translate("student")}
						</span>
						<span className="item lessons">
							<Icon name='lesson' variant='blue-secondary' />
							{numberOfLesson} {translate("lesson")}
						</span>
					</div>
					<p >
						{keyDescription}
					</p>
				</div>
				<div className="card-course__hover-wrapper_btns">
					<Button label={translate("hover.button.seeMore")} />
					<Button label={translate("hover.button.subsribe")} variant='transparent' />
				</div>

			</div>
		</div>
	)
}

export default CardCourse