import Container from '@/components/common/Container'
import Heading from '@/components/common/Heading'
import React from 'react'
import "./style.scss"
import classNames from 'classnames'
import { dataPartner } from './data'
import Image from 'next/image'

function Partner() {
	return (
		<Container className={classNames("partner")}>
			<Heading label='nos partenaires' align='start'>
				Nous travaillons avec <br />les meilleures
			</Heading>
			<div className={classNames("partner__logos")}>
				{
					dataPartner.map((dt, index)=>(
						<Image src={dt.logo} alt={dt.name} key={`${dt.name}_${index}`} width={1920} height={1024}/>
					))
				}
			</div>
		</Container>
	)
}

export default Partner