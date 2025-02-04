import Icon from "@/components/Icon"
import "./style.scss"
import Image from 'next/image'
import React from 'react'

function HomeHeroImage() {
	return (
		<div className="h-image">
			<Image className="dashed"
				src="/bg-dashed.png" width={1920} height={1024} alt='hero' />
			<div className="circle">
				<span className="main-img">
					<Image src="/home/hero.svg" width={1920} height={1024} alt='hero' />
				</span>
			</div>
			<span className="h-image__logo css">
				<Icon name="css" />
			</span>
			<span className="h-image__logo device">
				<Icon name="device" />
			</span>
			<span className="h-image__logo html">
				<Icon name="html" />
			</span>
		</div>
	)
}

export default HomeHeroImage