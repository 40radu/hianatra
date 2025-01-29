import Container from '@/components/common/Container'
import Heading from '@/components/common/Heading'
import React from 'react'
import "./style.scss"
import { dataPartner } from './data'
import Image from 'next/image'
import { getScopedI18n } from '@/locales/server'

async function Partner() {
	const translate = await getScopedI18n("aboutPartner")
	return (
		<Container className="partner">
			<Heading label={translate("title")} align='start'>
				{translate("subtitle.first")} <br />{translate("subtitle.end")}
			</Heading>
			<div className="partner__logos">
				{
					dataPartner.map((dt, index) => (
						<Image src={dt.logo} alt={dt.name} key={`${dt.name}_${index}`} width={1920} height={1024} />
					))
				}
			</div>
		</Container>
	)
}

export default Partner