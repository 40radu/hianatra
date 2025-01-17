'use client'

import React from 'react'
import Container from '@/components/common/Container'
import classNames from 'classnames'
import { courseLinks } from './data'
import Link from 'next/link'
import ButtonSquare from '@/components/navigation/ButtonSquare'
import Icon from '@/components/Icon'
import Input from '@/components/common/Input'
import './style.scss'
import { usePathname } from 'next/navigation'

function CourseHeader() {
    const pathname = usePathname()
    return (
        <Container className={classNames("course-navbar")} >
            <div className={classNames('course-navbar__navigation')} >
                {
                    courseLinks.map((link, index) => (
                        <Link href={link.href} key={`course--${index}`} >
                            <ButtonSquare
                                label={link.label}
                                variant={pathname === link.href ? "blue" : "white"}
                                className={classNames('course-navbar__navigation__button')}
                            />
                        </Link>
                    ))
                }
            </div>
            <div className={classNames('course-navbar__search')} >
                <Icon
                    name='search'
                    variant='black'
                    className={classNames('course-navbar__search__icon')}
                />
                <Input
                    name='search-course'
                    placeholder='Recherche'
                    className={classNames('course-navbar__search__input')}
                />
            </div>
        </Container>
    )
}

export default CourseHeader