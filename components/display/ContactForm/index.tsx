import Heading from '@/components/common/Heading'
import Input from '@/components/common/Input'
import TextArea from '@/components/common/TextArea'
import Button from '@/components/navigation/Button'
import classNames from 'classnames'
import React from 'react'
import "./style.scss"
import { getScopedI18n } from '@/locales/server'

async function ContactForm() {
	const t = await getScopedI18n("contactCommon")
	return (
		<div className={classNames("form-contact")}>
			<Heading label='' align='start'>
				<span className='primary'>{t("title.contact")}</span><span className='secondary'>-{t("title.us")}</span>
			</Heading>
			<form className={classNames("container-fields")}>
				<fieldset><Input name='name' placeholder={t("placeholder.name")} /></fieldset> 
				<fieldset><Input name='email' placeholder={t("placeholder.email")} /></fieldset>
				<fieldset><Input name='subject' placeholder={t("placeholder.subject")} /></fieldset>
				<fieldset><TextArea name='message' placeholder={t("placeholder.message")} /></fieldset>
				<Button type='submit' label={t("button")} className='btn' />
			</form>
		</div>
	)
}

export default ContactForm