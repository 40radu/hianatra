'use client'

import React, { useEffect, useRef, useState } from 'react'
import './style.scss'
import classNames from 'classnames'
import Icon from '@/components/Icon'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'

type LangList = "fr" | "en"

interface OptionProps {
	lang: LangList;
	onClick: () => void
}


export default function Selectlang() {
	const mainLang = useCurrentLocale()
	const changeLang = useChangeLocale()
	const [showOption, setShowOption] = useState(false)
	const selectRef = useRef<HTMLDivElement | null>(null)

	const setEnglishLanguage = () => {
		changeLang('en')
		toogleShowOption()
	}

	const setFrenchLanguage = () => {
		changeLang('fr')
		toogleShowOption()
	}

	const toogleShowOption = () => {
		setShowOption(!showOption)
	}

	const optionsData: OptionProps[] = [
		{
			lang: 'en',
			onClick: setEnglishLanguage
		},
		{
			lang: 'fr',
			onClick: setFrenchLanguage
		},
	]

	const handleClikOutSide = (e: MouseEvent) => {

		if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
			setShowOption(false)
		}
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClikOutSide)

		return (() => document.removeEventListener('mousedown', handleClikOutSide))

	}, [showOption])

	return (
		<div className="select-lang" ref={selectRef}>
			<div
				className='select-lang__default'
				onClick={toogleShowOption}>
				<p> {mainLang} </p>
				<Icon
					name='arrowDown'
					variant='black'
				/>
			</div>

			{
				showOption && <div className={classNames('select-lang__option', { showOption: showOption })} >
					{
						optionsData.map((option, index) => (
							<p onClick={option.onClick} key={`lang_${index}`}>
								{option.lang}
							</p>
						))
					}
				</div>
			}
		</div>
	)
}
