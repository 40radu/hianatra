import Container from '@/components/common/Container'
import "./style.scss"
import Heading from '@/components/common/Heading'
import Button from '@/components/navigation/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getI18n, getScopedI18n } from '@/locales/server'

async function Course() {
  const tCourse = await getScopedI18n("homeCourse")
  const tMore = await getI18n()
  return (
    <Container className="h-course">
      <div className="h-course__text">
        <Heading label={tCourse("title")}align='start'>
          <span className="primary">{tCourse("subTitle.first")}<br />{tCourse("subTitle.second")}</span>
        </Heading>
        <div className="h-course__text-description">
          <p className="fat">{tCourse("description.large")}</p>
          <p className="slim">{tCourse("description.small")}</p>
        </div>
        <Link href="/courses" ><Button label={tMore("readMore")} /></Link>
      </div>

      <div className="h-course__image">
        <Image src='/contact.svg' alt='' width={764} height={764} />
      </div>
    </Container>
  )
}

export default Course