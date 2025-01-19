'use client'

import React, { useState } from 'react'
import classNames from 'classnames'
import Button from '@/components/navigation/Button'
import Link from 'next/link'
import Icon from '@/components/Icon'
import { usePathname } from 'next/navigation'
import Logo from '@/components/common/Logo'
import { dataLinks } from './data'
import Container from '@/components/common/Container'
import "./style.scss"
import Selectlang from '@/components/display/SelectLang'


function NavBar() {
	const [viewNavResponsive, setViewNavResponsive] = useState(false)
	const pathname = usePathname()

	if (
		pathname !== '/' &&
		pathname !== '/about' &&
		pathname !== 'blog' &&
		pathname !== '/courses' &&
		pathname !== '/contact'
	) return null

	return (
		<header className={classNames('container-header')} >
			<Container tag='div' className='container-header__nav-bar' >
				<Logo variant='primary' />
				<nav className={classNames('container-header__nav-bar__responsive', { shown: viewNavResponsive })} >
					{
						dataLinks.map((link, id) => {
							return (
								<Link key={id}
									href={link.href}
									className={classNames({ active: pathname === link.href })}
									onClick={() => setViewNavResponsive(false)}
								>
									{link.label}
								</Link>

							)
						})
					}
				</nav>
				<div className={classNames('container-header__nav-bar__right')} >
					<Icon name='search' />
					<Selectlang />
					<Button
						label='Login'
						className={classNames("container-header__nav-bar__right__button")}
						icon='login'
						iconVariant='white'
						variant='blue'
					/>

					<div
						className={classNames("container-header__nav-bar__right__menu", { navShown: viewNavResponsive })}
						onClick={() => {
							setViewNavResponsive(!viewNavResponsive)
						}}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default NavBar