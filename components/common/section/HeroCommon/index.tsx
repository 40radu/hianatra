import React from 'react'
import Container from '../../Container'
import classNames from 'classnames'
import CircleDashed from '@/components/vector/CircleDashed'
import LineCurve from '@/components/vector/LineCurve'
import MorePoints from '@/components/vector/MorePoints'
import Medal from '@/components/vector/Medal'
import TwoLineCurve from '@/components/vector/TwoLineCurve'
import "./style.scss"

interface HeroCommonProps {
  smallTitle: string;
  largeTitle: string;
}

function HeroCommon(props: HeroCommonProps) {
  const { largeTitle, smallTitle } = props
  return (
    <section className={classNames("hero-common", "hero-common__bg")}>
      <Container tag='div' className={classNames("hero-common__container")}>
        <div className={classNames("content")}>
          <h1>
            {smallTitle} <span className='primary'> {largeTitle} </span>
            <CircleDashed className={classNames("vector", "hero-common__circle-dashed")} />
          </h1>
          <Medal className={classNames("hero-common__medal")} />
        </div>
      </Container>
      <LineCurve className={classNames("vector", "hero-common__line")} />
      <MorePoints colorType='#031EA9' className={classNames("vector", "hero-common__points")} />
      <TwoLineCurve className={classNames("vector", "hero-common__two-line")} />
    </section>
  )
}

export default HeroCommon