import "./style.scss"
import Container from '@/components/common/Container'
import Heading from '@/components/common/Heading'
import ButtonMore from "@/components/navigation/ButtonMore"
import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import React from 'react'
import { reasonData } from "./data"

function Reason() {
    return (
        <Container className={classNames("h-reason")}>
            <Heading label='POURQUOI NOUS?'>
                Raison de nous suivre
            </Heading>
            <div className={classNames("h-reason__content")}>
                {
                    reasonData.map((rd, index) => {
                        return (
                            
                            <Link href={rd.link} key={`reason_${index}`} className={classNames("h-reason__card")}>
                                <span className={classNames("image")}>
                                    <Image src={rd.image} alt="" width={127} height={127} />
                                </span>
                                <h4>{rd.title}</h4>
                                <p>{rd.description}</p>
                                    <ButtonMore label="Voir plus" />
                            </Link>
                        )
                    })
                }
            </div>
        </Container>
    )
}

export default Reason