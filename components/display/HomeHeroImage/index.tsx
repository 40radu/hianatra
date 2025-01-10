import Icon from "@/components/Icon"
import "./style.scss"
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

function HomeHeroImage() {
    return (
        <div className={classNames("h-image")}>
            <Image className={classNames("dashed")}
                src="/bg-dashed.png" width={1920} height={1024} alt='hero' />
            <div className={classNames("circle")}>
                <span className={classNames("main-img")}>
                    <Image src="/home/hero.png" width={1920} height={1024} alt='hero' />
                </span>
            </div>
            <span className={classNames("h-image__logo", "css")}>
                <Icon name="css" />
            </span>
            <span className={classNames("h-image__logo", "device")}>
                <Icon name="device" />
            </span>
            <span className={classNames("h-image__logo", "html")}>
                <Icon name="html" />
            </span>
        </div>
    )
}

export default HomeHeroImage