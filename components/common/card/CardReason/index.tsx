import ButtonMore from '@/components/navigation/ButtonMore';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import './style.scss'
export interface CardReasonProps {
    image: string;
    title: string;
    description: string;
    link: string;
}

function CardReason(props: CardReasonProps) {
    const { image, description, link, title } = props
    return (
        <Link href={link} className={classNames("card-reason")}>
            <span className={classNames("image")}>
                <Image src={image} alt="" width={127} height={127} />
            </span>
            <h4>{title}</h4>
            <p>{description}</p>
            <ButtonMore label="Voir plus" />
        </Link>
    )
}

export default CardReason