import Container from '@/components/common/Container'
import Heading from '@/components/common/Heading'
import Button from '@/components/navigation/Button'
import Image from 'next/image'
import React from 'react'
import "./style.scss"
import Link from 'next/link'
import { getScopedI18n } from '@/locales/server'

async function Welcome() {
	const translate = await getScopedI18n("aboutWelcome")
	return (
		<Container className="a-welcome">
			<span className="a-welcome__image">
				<Image src="/about/welcome.svg" alt='welcome image' width={547} height={547} priority />
			</span >
			<div className="a-welcome__text">
				<Heading label={translate("heading.title")} align='start'>
					{translate("heading.follow")}  <br /> {translate("heading.ameliorate")}  <br /> {translate("heading.your")} <span className="decoration">{translate("heading.future")} </span> {translate("heading.radiant")} .
				</Heading>
				<p className="description">
					{translate("description")}
				</p>
				<Link href="/courses"><Button label={translate("button")} /></Link>
			</div>
		</Container>
	)
}

export default Welcome