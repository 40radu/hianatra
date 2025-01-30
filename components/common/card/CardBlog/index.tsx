import Icon from '@/components/Icon'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import "./style.scss"
import Button from '@/components/navigation/Button'
import { getScopedI18n } from '@/locales/server'

export interface BlogCourseProps {
  topic: string;
  image: string;
  isFree: boolean;
  title: string;
  numberOfStudent: number;
  numberOfLesson: number;
  price: string;
  description: string
}

async function CardBlog(props: BlogCourseProps) {
  const { image, isFree, numberOfLesson, numberOfStudent, title, topic, price, description } = props
  const translate = await getScopedI18n("blogCard")
  return (
    <div className={classNames("card-blog")}>
      <div className={classNames("card-blog__head")}>
        <span className={classNames("card-blog__head-image")}>
          <Image src={image} width={433} height={282} alt='' />
        </span>
        <div className={classNames("card-blog__head-topic")}>
          <p>{topic}</p>
        </div>
      </div>
      <div className={classNames("card-blog__body")}>
        <p className={classNames("card-blog__body-access", { free: isFree })}>
          {isFree ? translate("body.free") : translate("body.paying")}
        </p>
        <h4>
          {title}
        </h4>
        <div className={classNames("card-blog__body-description")}>
          <span className={classNames("item", "students")}>
            <Icon name='student' variant='blue-secondary' />
            {numberOfStudent} {translate("body.student")}
          </span>
          <span className={classNames("item", "lessons")}>
            <Icon name='lesson' variant='blue-secondary' />
            {numberOfLesson} {translate("body.lesson")}
          </span>
        </div>
      </div>
      <div className={classNames("card-blog__hover")}>
        <p className={classNames("card-blog__hover-price")}> {price} Ar </p>
        <div className={classNames("card-blog__hover-text")}>
          <h4>{title}</h4>
          <div className={classNames("info")}>
            <span className={classNames("item", "students")}>
              <Icon name='student' variant='blue-secondary' />
              {numberOfStudent} {translate("hover.student")}
            </span>
            <span className={classNames("item", "lessons")}>
              <Icon name='lesson' variant='blue-secondary' />
              {numberOfLesson} {translate("hover.lesson")}
            </span>
          </div>
          <p >
            {description}
          </p>
        </div>
        <div className={classNames("card-blog__hover-wrapper_btns")}>
          <Button label={translate("hover.button.seeMore")} />
          <Button label={translate("hover.button.subsribe")} variant='transparent' />
        </div>

      </div>
    </div>
  )
}

export default CardBlog