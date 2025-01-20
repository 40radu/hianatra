"use client"
import Container from '@/components/common/Container'
import Logo from '@/components/common/Logo'
import Selectlang from '@/components/display/SelectLang'
import Icon from '@/components/Icon'
import Button from '@/components/navigation/Button'
import classNames from 'classnames'
import React, { useState } from 'react'
import "./style.scss"
import Link from 'next/link'
import { dataLinks } from './data'
import { usePathname } from 'next/navigation'

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
	const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen)
	}
	const pathname = usePathname()
	return (
		<header className={classNames("header__bg")}>
			<Container tag='div' className={classNames("header__content")}>
				<Logo variant='primary' />
				<nav className={classNames("header__content-nav")}>
					{dataLinks.map((link, index) => (
						<Link key={`link_${index}`} href={link.href} className={classNames("link", { active: pathname == link.href })}>
							{link.label}
						</Link>
					))}
				</nav>
				<nav className={classNames("header__content-responsive", { active: isMenuOpen })}>
					{dataLinks.map((link, index) => (
						<Link
							key={`link_${index}`} href={link.href}
							className={classNames("link", { active: pathname == link.href })}
							onClick={handleMenuOpen}>
							{link.label}
						</Link>
					))}
					<Link href="/" onClick={handleMenuOpen} className={classNames("button")}>
						<Button icon='login' label='Login' iconVariant='white' />
					</Link>
				</nav>
				<div className={classNames("header__content-right")}>
					<Icon name='search' variant='black' className='search'/>
					<Selectlang />
					<Link href="" className={classNames("button")}> <Button icon='login' label='Login' iconVariant='white' /></Link>
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