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
import { getScopedI18n } from '@/locales/server'

async function Footer() {
  const t = await getScopedI18n("footer")
  return (
    <footer className={classNames("bg-footer")}>
      <Container tag='div' className={classNames("footer")}>
        <div className={classNames("footer__info")}>
          <Logo variant='white' />
          <p className={classNames("description")}>
            {t("description")}
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
        <FooterItem title={t("links.title")}>
          <ul className={classNames("footer__links")}>
            {
              linkData.map((dt, index) => (
                <Link href={dt.link} key={`link_${index}`}> <li>{t(`links.${dt.labKey}`)} </li></Link>
              ))
            }
          </ul>
        </FooterItem>
        <FooterItem title={t("contact.title")}>
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