import HeroCommon from '@/components/common/section/HeroCommon'
import ContactUs from '@/section/contact/Contact'
import ContactCommon from '@/section/home/ContactCommon'
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
	title : "Contact | Hianatra"
}

function Contact() {
	return (
		<>
			<HeroCommon smallTitle='Nous' largeTitle='Contacter.' />
			<ContactUs />
			<ContactCommon />
		</>
	)
}

export default Contact