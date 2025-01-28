import Container from '@/components/common/Container'
import "./style.scss"
import Heading from '@/components/common/Heading'
import React from 'react'
import { cardReasonData } from "./data"
import { getScopedI18n } from '@/locales/server'
import CardReason from '@/components/common/card/CardReason'
export interface keyCardReason {
	title: "courses.title" | "flexibility.title" | "experts.title",
	descri: "courses.description" | "flexibility.description" | "experts.description"
}
async function Reason() {
	const titleT = await getScopedI18n("homeReason.title")
	const cardT = await getScopedI18n("homeReason.cards")
	return (
		<Container className="h-reason">
			<Heading label={titleT("why")}>
				{titleT("reason")}
			</Heading>
			<div className="h-reason__content">
				{
					cardReasonData.map((rd, index) => {
						return (
							<CardReason
								description={cardT(rd.description as keyCardReason["descri"])}
								image={rd.image}
								link={rd.link}
								title={cardT(rd.title as keyCardReason["title"])}
								key={`rd_${index}`} />
						)
					})
				}
			</div>
		</Container>
	)
}

export default Reason