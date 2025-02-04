import React from 'react'
import "./style.scss"
import Image from 'next/image'

export interface CardInstructorProps {
	imgSrc: string;
	name: string;
	job: string;
}

function CardInstructor(props: CardInstructorProps) {
	const { imgSrc, job, name } = props
	return (
		<div className="card-instructor">
			<div className="card-instructor__profile">
				<Image src={imgSrc} alt='profil' width={200} height={200} />
			</div>
			<div className="card-instructor__descri">
				<p className="card-instructor__descri-name"> {name} </p>
				<p className="card-instructor__descri-job"> {job} </p>
			</div>
		</div>
	)
}

export default CardInstructor