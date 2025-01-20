'use client'

import Container from '@/components/common/Container'
import Logo from '@/components/common/Logo'
import classNames from 'classnames'
import React from 'react'
import "./style.scss"
import { linkData, socialMediaData } from './data'
import Icon from '@/components/Icon'
import Link from 'next/link'
import FooterItem from '@/components/display/FooterItem'
import Newsletter from '@/components/display/Newsletter'
import { usePathname } from 'next/navigation'

function Footer() {
  const pathname = usePathname()

  if (
    pathname !== '/' &&
    pathname !== '/about' &&
    pathname !== 'blog' &&
    pathname !== '/courses' &&
    pathname !== '/contact'
  ) return null

  return (
    <footer className={classNames("bg-footer")}>
      <Container tag='div' className={classNames("footer")}>
        <div className={classNames("footer__info")}>
          <Logo variant='white' />
          <p className={classNames("description")}>
            Hianatra est une formation professionnelle en développement web, dédiée à vous accompagner dans votre parcours vers une carrière technologique réussie.
          </p>
          <div className={classNames("social-media")}>
            {socialMediaData.map((dt, index) => (
              <Link href={dt.link} key={`social-media__${index}`}>
                <Icon name={dt.icon} variant='white' />
              </Link>
            )
            )}
          </div>
        </div>
        <FooterItem title='Lien'>
          <ul className={classNames("footer__links")}>
            {
              linkData.map((dt, index) => (
                <Link href={dt.link} key={`link_${index}`}> <li>{dt.label} </li></Link>
              ))
            }
          </ul>
        </FooterItem>
        <FooterItem title='Contactez-nous'>
          <ul className={classNames("footer__contact")}>
            <li>exemple@gmail.com</li>
            <li>+261 34 12 34 567</li>
            <li>Antananarivo, Madagascar</li>
          </ul>
        </FooterItem>
        <Newsletter />
      </Container>
    </footer>
  )
}

export default Footer