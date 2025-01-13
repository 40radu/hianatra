import React from 'react'
import "./navBar.scss"
import Container from '../Container'
import classNames from 'classnames'
import Image from 'next/image'
import Button from '@/components/navigation/Button'

type Props = {}

const NavBar = (props: Props) => {
    return (
        <Container tag='header' className='navBar' >

            <Image alt='logo-icon' src={''} />

            <div className={classNames('navigation-links')} >

            </div>

            <div className={classNames('lang-and-login')} >

                <div className={classNames('lang-select-container')} >

                    <Image alt='search-icon' src={''} />

                    <select name="lang" id="">
                        <option value="EN" ></option>
                        <option value="FR"></option>
                    </select>

                </div>

                <Button
                    label='Login'
                    className={classNames("login-button")}

                />

            </div>

        </Container>
    )
}

export default NavBar