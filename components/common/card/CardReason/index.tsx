import ButtonMore from '@/components/navigation/ButtonMore';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import './style.scss'
import { getI18n } from '@/locales/server';
export interface CardReasonProps {
    image: string;
    title: string;
    description: string;
    link: string;
}

async function CardReason(props: CardReasonProps) {
    const { image, description, link, title } = props
    const t = await getI18n()
    return (
        <Link href={link} className="card-reason">
            <span className={"image"}>
                <Image src={image} alt="" width={127} height={127} />
            </span>
            <h4>{title}</h4>
            <p>{description}</p>
            <ButtonMore label={t("viewMore")} />
        </Link>
    )
}

export default CardReason