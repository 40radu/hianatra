import Icon from '@/components/Icon'
import Star from '@/components/Icon/Star/Star'
import Image from 'next/image'
import React from 'react'
import "./style.scss"
export interface CardTestimonialProps {
    image: string;
    starNumber: number;
    description: string;
    userName: string;
}

function CardTestimonial(props: CardTestimonialProps) {
    const { description, image, starNumber, userName } = props
    return (
        <div className="card-testimonial" >
            <div className="card-testimonial__head">
                <span className="profile"><Image src={image} alt="" width={96} height={96} /></span>
                <Icon name='apostr' variant='blue-secondary' className='apostr' />
            </div>
            <div className="card-testimonial__stars">
                {starNumber ? Array(starNumber).fill(null).map((_, index) => {
                    return (
                        <Star key={`star_${index}`} />
                    )
                }) : ""}
            </div>
            <p className="card-testimonial__description" dangerouslySetInnerHTML={{ __html: description }} />
            <p className={"card-testimonial__user"}>
                {userName}
            </p>
        </div>
    )
}

export default CardTestimonial