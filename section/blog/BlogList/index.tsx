'use client'

import React, { useState } from 'react'
import Container from '@/components/common/Container'
import ButtonSquare from '@/components/navigation/ButtonSquare'
import './style.scss'
import { blogLinksData, blogListData, listTabBlog } from './data'
import BodyTabsBlog from '@/components/display/BodyTabsBlog'

function BlogList() {
  const [tabActive, setTabActive] = useState<listTabBlog>("all")
  const dataBlogActive = blogListData.find((blog) => blog.type === tabActive)

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
                    label={link.label}
                    variant={tabActive === link.href ? "blue" : "white"}
                    className='b-list__navbar__navigation__button'
                    onClick={() => setTabActive(link.href)}
                  />
                )
              })
            }
          </div>
        </div>
        <BodyTabsBlog cardsList={dataBlogActive!.content} />
      </Container>
    </>
  )
}

export default BlogList