import classNames from 'classnames'
import React from 'react'
import "./style.scss"
interface InputProps {
    type?: "text" | "password";
    name: string;
    placeholder: string;
}

function Input(props: InputProps) {
    const { name, type = "text", placeholder } = props
    return (
        <div className={classNames("input")}>
            <input name={name} type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input