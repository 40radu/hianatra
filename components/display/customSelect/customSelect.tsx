'use client'

import React, { useEffect, useRef, useState } from 'react'
import './customSelect.scss'
import classNames from 'classnames'
import Icon from '@/components/Icon'



const CustomSelect = () => {

    const [selectValue, setSelectValue] = useState('FR')
    const [showOption, setShowOption] = useState(false)
    const optionSelectRef = useRef<HTMLDivElement | null>(null)

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

    const handleClikOutSide = (e: MouseEvent) => {

        if (optionSelectRef.current && !optionSelectRef.current.contains(e.target as Node)) {
            setShowOption(false)
        }

    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClikOutSide)

        return (() => document.removeEventListener('mousedown', handleClikOutSide))

    }, [showOption])

    return (
        <div className="custom-select-container" ref={optionSelectRef}>
            <div
                className={classNames('default-select')}
                onClick={toogleShowOption}
            >
                <p> {selectValue} </p>
                <Icon
                    name='arrowDown'
                />
            </div>

            <div className={classNames('option-select', { showOption: showOption })} >
                <p onClick={setEnglishLanguage} > EN </p>
                <p onClick={setFrenchLanguage} > FR </p>
            </div>
        </div>
    )
}

export default CustomSelect