import React from 'react'
import Container from '../../Container'
import "./style.scss"
import Image from 'next/image'
import MorePoints from '@/components/vector/MorePoints'
import Link from 'next/link'
import { getScopedI18n } from '@/locales/server'

async function Ready() {
	const t = await getScopedI18n("ready")
	return (
		<section className="ready" id='ready'>
			<Container className="ready__content" tag='div'>
				<div className="ready__text">
					<h3>{t("title")}</h3>
					<p>{t("description")}</p>
				</div>
				<div className="ready__logos">
					<Link href="" className="link">
						<Image src="/home/google-play.svg" alt='' width={266} height={117} />
					</Link>
					<Link href="" className="link">
						<Image src="/home/app-store.svg" alt='' width={266} height={117} />
					</Link>
				</div>
				<span className="ready__3circles">
					<Image src="/home/3circles.png" alt='' width={619} height={554} className="logo" />
				</span>
				<span className="ready__arrow">
					<Image src="/home/arrow.svg" alt='' width={130} height={86.5} />
				</span>
				<MorePoints className='ready__points' />
			</Container>
		</section>
	)
}

export default Ready