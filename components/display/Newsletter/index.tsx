import React from 'react'
import FooterItem from '../FooterItem'
import classNames from 'classnames'
import ButtonSquare from '@/components/navigation/ButtonSquare'
import Input from '@/components/common/Input'
import "./style.scss"

function Newsletter() {
	return (
		<form action="" className={classNames("newsletter", "newsletter__form")}>
			<FooterItem title='Newsletter'>
				<p className={classNames("newsletter__description")}>
					Abonnez-vous à notre newsletter pour rester informé de nos nouveaux articles, programmes et offres spéciales.
				</p>
				<div className={classNames("newsletter__fields-wrapper")}>
					<Input name='newsletter' placeholder='Email' className={classNames("newsletter__input")} />
					<ButtonSquare type='submit' label='ENVOYER' className={classNames("newsletter__btn")} />
				</div>
			</FooterItem>
		</form>
	)
}

export default Newsletter