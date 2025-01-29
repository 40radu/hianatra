import React from 'react'
import FooterItem from '../FooterItem'
import classNames from 'classnames'
import ButtonSquare from '@/components/navigation/ButtonSquare'
import Input from '@/components/common/Input'
import "./style.scss"
import { getScopedI18n } from '@/locales/server'

async function Newsletter() {
	const t = await getScopedI18n("footer")

	return (
		<form action="" className={classNames("newsletter", "newsletter__form")}>
			<FooterItem title={t("newsletter.title")}>
				<p className={classNames("newsletter__description")}>
					{t("newsletter.description")}
				</p>
				<div className={classNames("newsletter__fields-wrapper")}>
					<Input name='newsletter' placeholder='Email' className={classNames("newsletter__input")} />
					<ButtonSquare type='submit' label={t("button")} className={classNames("newsletter__btn")} />
				</div>
			</FooterItem>
		</form>
	)
}

export default Newsletter