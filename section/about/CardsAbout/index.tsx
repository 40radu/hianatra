import CardInfo from '@/components/common/card/CardInfo'
import Container from '@/components/common/Container'
import React from 'react'
import "./style.scss"
import { dataCardInfo } from './data'
import { getScopedI18n } from '@/locales/server'


async function CardsAbout() {
	const translate = await getScopedI18n("aboutCards")
	return (
		<Container className="cards-about">
			{
				dataCardInfo.map((dt, index) => (
					<CardInfo
						key={`card-info_${index}`}
						image={dt.image}
						title={translate(dt.title)}
						firstDescription={translate(dt.firstDescription)}
						secondDescription={translate(dt.secondDescription)} />
				))
			}
		</Container>
	)
}

export default CardsAbout