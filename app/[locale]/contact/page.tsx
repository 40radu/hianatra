import HeroCommon from '@/components/common/section/HeroCommon'
import { getScopedI18n } from '@/locales/server'
import ContactUs from '@/section/contact/Contact'
import ContactCommon from '@/section/home/ContactCommon'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: "Contact | Hianatra"
}

async function Contact() {
	const translate = await getScopedI18n("contactHero.title")
	return (
		<>
			<HeroCommon smallTitle={translate("first")} largeTitle={translate("second")} />
			<ContactUs />
			<ContactCommon />
		</>
	)
}

export default Contact