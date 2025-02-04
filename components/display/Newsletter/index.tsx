import React from 'react'
import FooterItem from '../FooterItem'
import ButtonSquare from '@/components/navigation/ButtonSquare'
import Input from '@/components/common/Input'
import "./style.scss"
import { getScopedI18n } from '@/locales/server'

async function Newsletter() {
	const t = await getScopedI18n("footer")

	return (
		<form action="" className="newsletter newsletter__form">
			<FooterItem title={t("newsletter.title")}>
				<p className="newsletter__description">
					{t("newsletter.description")}
				</p>
				<div className="newsletter__fields-wrapper">
					<Input name='newsletter' placeholder='Email' className="newsletter__input" />
					<ButtonSquare type='submit' label={t("button")} className="newsletter__btn" />
				</div>
			</FooterItem>
		</form>
	)
}

export default Newsletter