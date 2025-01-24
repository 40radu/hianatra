import CardInfo from '@/components/common/card/CardInfo'
import Container from '@/components/common/Container'
import React from 'react'
import "./style.scss"
import { dataCardInfo } from './data'


function CardsAbout() {
	return (
		<Container className="cards-about">
			{
				dataCardInfo.map((dt, index) => (
					<CardInfo
						key={`card-info_${index}`}
						image={dt.image}
						title={dt.title}
						firstDescription={dt.firstDescription}
						secondDescription={dt.secondDescription} />
				))
			}
		</Container>
	)
}

export default CardsAbout