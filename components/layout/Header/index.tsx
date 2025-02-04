"use client"
import Container from '@/components/common/Container'
import Logo from '@/components/common/Logo'
import Selectlang from '@/components/display/SelectLang'
import Button from '@/components/navigation/Button'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import "./style.scss"
import Link from 'next/link'
import { dataLinks } from './data'
import { usePathname } from 'next/navigation'
import { useScopedI18n } from '@/locales/client'

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
	const t = useScopedI18n('header')
	const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen)
	}
	const pathname = usePathname()
	useEffect(() => {
		const header = document.querySelector(".header__bg") as HTMLElement

		window.addEventListener("scroll", () => {
			if (window.scrollY > 45) {
				header.style.boxShadow = "1px 2px 20px #8d8d8d33"
				header.style.backgroundColor = "#ffffff";
			}else {
				header.style.boxShadow = "none"
				header.style.backgroundColor = "transparent";
			}
		})
	}, [])
	return (
		<header className="header__bg">
			<Container tag='div' className="header__content">
				<Link href="/" className='logo'><Logo variant='primary' /></Link>
				<nav className="header__content-nav">
					{dataLinks.map((link, index) => (
						<Link key={`link_${index}`} href={link.href} className={classNames("link", { active: pathname == link.href })}>
							{t(link.labelKey)}
						</Link>
					))}
				</nav>
				<nav className={classNames("header__content-responsive", { active: isMenuOpen })}>
					{dataLinks.map((link, index) => (
						<Link
							key={`link_${index}`} href={link.href}
							className={classNames("link", { active: pathname == link.href })}
							onClick={handleMenuOpen}>
							{t(link.labelKey)}
						</Link>
					))}
					<Link href="/contact" onClick={handleMenuOpen} className="button">
						<Button label='Contact' />
					</Link>
				</nav>
				<div className="header__content-right">
					<Selectlang />
					<Link href="/contact" className="button"> <Button label='Contact' /></Link>
					<div className={classNames("menu-bar", { active: isMenuOpen })} onClick={handleMenuOpen}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header