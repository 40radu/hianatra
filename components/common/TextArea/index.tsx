import classNames from 'classnames'
import React from 'react'
import "./style.scss"
interface TextAreaProps {
    name: string;
    placeholder: string;
}

function TextArea(props: TextAreaProps) {
    const { name, placeholder } = props
    return (
        <div className={classNames("text-area")}>
            <textarea name={name} placeholder={placeholder} />
        </div>
    )
}

export default TextArea