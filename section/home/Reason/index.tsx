import Container from '@/components/common/Container'
import "./style.scss"
import Heading from '@/components/common/Heading'
import React from 'react'
import { cardReasonData } from "./data"
import CardReason from '@/components/common/card/CardReason'
async function Reason() {
    return (
        <Container className="h-reason">
            <Heading label='POURQUOI NOUS?'>
                Raison de nous choisir
            </Heading>
            <div className="h-reason__content">
                {
                    cardReasonData.map((rd, index) => {
                        return (
                            <CardReason description={rd.description} image={rd.image} link={rd.link} title={rd.title} key={`rd_${index}`} />
                        )
                    })
                }
            </div>
        </Container>
    )
}

export default Reason