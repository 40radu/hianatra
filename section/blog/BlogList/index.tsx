'use client'

import React, { useState } from 'react'
import Container from '@/components/common/Container'
import ButtonSquare from '@/components/navigation/ButtonSquare'
import './style.scss'
import { allBlogData, archiveData, blogLinksData, collectionData, listTabBlog } from './data'
import CardBlog from '@/components/common/card/CardBlog'
import { useScopedI18n } from '@/locales/client'

function BlogList() {
  const [tabActive, setTabActive] = useState<listTabBlog>("all")
  const translate = useScopedI18n("blogList")
  const t = useScopedI18n("blogList.data")
  return (
    <>
      <Container className="b-list" >
        <div className="b-list__navbar" >
          <div className='b-list__navbar__navigation'>
            {
              blogLinksData.map((link, id) => {
                return (
                  <ButtonSquare
                    key={`course--${id}`}
                    label={translate(`tabs.${link.href}`)}
                    variant={tabActive === link.href ? "blue" : "white"}
                    className='b-list__navbar__navigation__button'
                    onClick={() => setTabActive(link.href)}
                  />
                )
              })
            }
          </div>
        </div>
        <div className='b-list__body'>
          {
            tabActive === "all" ?
              allBlogData.map((card, id) => {
                return (
                  <CardBlog {...card} key={id} keyDescription={t(`${card.keyDescription}.description`)} />
                )
              })
              : ""
          }
          {
            tabActive === "collection" ?
              collectionData.map((card, id) => {
                return (
                  <CardBlog {...card} key={id} keyDescription={t(`${card.keyDescription}.description`)} />
                )
              })
              : ""
          }
          {
            tabActive === "archive" ?
              archiveData.map((card, id) => {
                return (
                  <CardBlog {...card} key={id} keyDescription={t(`${card.keyDescription}.description`)} />
                )
              })
              : ""
          }
        </div>
      </Container>
    </>
  )
}

export default BlogList