import React from 'react'
import "./navBar.scss"
import Container from '../Container'
import classNames from 'classnames'
import Image from 'next/image'
import Button from '@/components/navigation/Button'
import Link from 'next/link'
import Icon from '@/components/Icon'
import Logo from '../Logo'

type Props = {}

const NavBar = (props: Props) => {
    return (
        <header className='navBar' >

            <Logo variant='primary' />

            <nav className={classNames('navigation-links')} >

                <Link href={''} >aceuille</Link>
                <Link href={''} >a propos</Link>
                <Link href={''} >contact</Link>
                <Link href={''} >test</Link>
                <Link href={''} >test</Link>

            </nav>

            <div className={classNames('lang-and-login')} >

                <div className={classNames('lang-select-container')}
                >

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

            </div>

        </header>
    )
}

export default NavBar