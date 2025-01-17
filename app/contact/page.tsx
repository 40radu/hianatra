import HeroCommon from '@/components/common/section/HeroCommon'
import ContactUs from '@/section/contact/Contact'
import ContactCommon from '@/section/home/ContactCommon'
import React from 'react'

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