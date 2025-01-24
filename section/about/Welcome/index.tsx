import Container from '@/components/common/Container'
import Heading from '@/components/common/Heading'
import Button from '@/components/navigation/Button'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import "./style.scss"
import Link from 'next/link'

function Welcome() {
	return (
		<Container className={classNames("a-welcome")}>
			<span className={classNames("a-welcome__image")}>
				<Image src="/about/welcome.svg" alt='welcome image' width={547} height={547} priority/>
			</span >
			<div className={classNames("a-welcome__text")}>
				<Heading label='Bienvenue sur Hianatra.' align='start'>
					Vous pouvez rejoindre Hianatra <br /> et améliorer vos compétences <br /> pour votre <span className={classNames("decoration")}>avenir</span> radieux.
				</Heading>
				<p className={classNames("description")}>
					Lorem Ipsum has been the industr’s standard dummy text ever since unknown printer took galley type and scmbled make type specimen book. It has survived not only five centuries.
				</p>
				<Link href="/courses"><Button label='Commencer le cours'/></Link>
			</div>
		</Container>
	)
}

export default Welcome