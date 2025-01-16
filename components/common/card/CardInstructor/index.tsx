import React from 'react'
import "./style.scss"
import Image from 'next/image'
import classNames from 'classnames'

export interface CardInstructorProps {
	imgSrc: string;
	name: string;
	job: string;
}

function CardInstructor(props: CardInstructorProps) {
	const { imgSrc, job, name } = props
	return (
		<div className={classNames("card-instructor")}>
			<div className={classNames("card-instructor__profile")}>
				<Image src={imgSrc} alt='profil' width={200} height={200} />
			</div>
			<div className={classNames("card-instructor__descri")}>
				<p className={classNames("card-instructor__descri-name")}> {name} </p>
				<p className={classNames("card-instructor__descri-job")}> {job} </p>
			</div>
		</div>
	)
}

export default CardInstructor