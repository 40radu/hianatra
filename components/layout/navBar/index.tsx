'use client'

import React, { useState } from 'react'
import classNames from 'classnames'
import Button from '@/components/navigation/Button'
import Link from 'next/link'
import Icon from '@/components/Icon'

import { usePathname } from 'next/navigation'
import Logo from '@/components/common/Logo'
import CustomSelect from '@/components/display/customSelect/customSelect'
import { dataLinks } from './data'
import Container from '@/components/common/Container'
import "./navBar.scss"


const NavBar = () => {

	const [displayNav, setDisplayNav] = useState(false)
	const [selectIconRotate, setSelectIconRotate] = useState(false)

	const pathname = usePathname()

	return (
		<Container tag='header' className='navBar' >

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

					<CustomSelect />


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


		</Container>
	)
}

export default NavBar