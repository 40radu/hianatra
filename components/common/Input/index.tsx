import classNames from 'classnames'
import React from 'react'
import "./style.scss"
interface InputProps {
  type?: "text" | "password";
  name: string;
  placeholder: string;
  className?: string
}

function Input(props: InputProps) {
  const { name, type = "text", placeholder, className = "" } = props
  return (
    <div className={classNames("input", `${className}`)}>
      <input name={name} type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input