'use client'

import React, { useEffect, useRef, useState } from 'react'
import './style.scss'
import classNames from 'classnames'
import Icon from '@/components/Icon'

type LangList = "FR" | "EN"

interface OptionProps {
	lang: LangList;
	onClick: () => void
}


export default function Selectlang() {

	const [selectValue, setSelectValue] = useState<LangList>('FR')
	const [showOption, setShowOption] = useState(false)
	const selectRef = useRef<HTMLDivElement | null>(null)

	const setEnglishLanguage = () => {
		setSelectValue('EN')
		setShowOption(false)
	}

	const setFrenchLanguage = () => {
		setSelectValue('FR')
		setShowOption(false)
	}

	const toogleShowOption = () => {
		setShowOption(!showOption)
	}

	const optionsData: OptionProps[] = [
		{
			lang: 'EN',
			onClick: setEnglishLanguage
		},
		{
			lang: 'FR',
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
		<div className="custom-select-container" ref={selectRef}>
			<div
				className={classNames('custom-select-container__default-select')}
				onClick={toogleShowOption}
			>
				<p> {selectValue} </p>
				<Icon
					name='arrowDown'
				/>
			</div>

			<div className={classNames('custom-select-container__option-select', { showOption: showOption })} >
				{
					optionsData.map((option, index) => (
						<p onClick={option.onClick} key={`lang_${index}`}>
							{option.lang}
						</p>
					))
				}
			</div>
		</div>
	)
}
