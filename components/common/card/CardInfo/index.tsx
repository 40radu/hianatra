import Image from 'next/image'
import React from 'react'
import "./style.scss"

export interface CardInfoProps {
  image: string;
  title: string;
  firstDescription: string;
  secondDescription: string;
}

function CardInfo(props: CardInfoProps) {
  const { image, title, firstDescription, secondDescription } = props
  return (
    <div className="card-info">
      <div className="card-info__head">
        <span className="img">
          <Image src={image} alt='' width={100} height={100} />
        </span>
        <h4>
          {title}
        </h4>
      </div>
      <p className="card-info__description">
        <span> {firstDescription}</span>
        <span>  {secondDescription} </span>
      </p>
    </div>
  )
}

export default CardInfo