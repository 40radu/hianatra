'use client'

import React, { useState } from 'react'
import "./navBar.scss"
import classNames from 'classnames'
import Button from '@/components/navigation/Button'
import Link from 'next/link'
import Icon from '@/components/Icon'

import { usePathname } from 'next/navigation'
import Logo from '@/components/common/Logo'

export const dataLinks = [
	{
		href: "/",
		label: "Aceuille",

	},
	{
		href: "/apropos",
		label: "A propos",

	},
	{
		href: "/ui",
		label: "Cour",

	},
	{
		href: "/contact",
		label: "Contact",

	},
	{
		href: "/blog",
		label: "Blog",

	},
]

const NavBar = () => {

	const [displayNav, setDisplayNav] = useState(false)
	const pathname = usePathname()

	return (
		<header className='navBar' >

			<Logo variant='primary' />

			<nav className={classNames('navigation-links', { shown: displayNav })} >

				{
					dataLinks.map((link, id) => {
						return (
							<Link key={id}
								href={link.href}
								className={classNames({ active: pathname === link.href })}
							>
								{link.label}
							</Link>

						)
					})
				}
			</nav>

			<div className={classNames('lang-and-login')} >

				<div className={classNames('lang-select-container')}>

					<Icon name='search' />

					<select name="lang">
						<option value="EN" >EN</option>
						<option value="FR">FR</option>
					</select>

				</div>

				<Button
					label='Login'
					className={classNames("login-button")}
					icon='login'
					variant='blue'
				/>

				<div
					className={classNames("menu-icon-container", { navShown: displayNav })}
					onClick={() => {
						setDisplayNav(!displayNav)
						console.log("work")
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>

			</div>


		</header>
	)
}

export default NavBar