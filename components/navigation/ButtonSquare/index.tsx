import classNames from 'classnames';
import React from 'react'
import "./style.scss"

interface ButtonSquareProps {
  label: string;
  variant?: "blue" | "white";
  className?: string;
  type?: "submit" | "button"
}

function ButtonSquare(props: ButtonSquareProps) {
  const { label, className = "", type = "button", variant = "blue" } = props
  return (
    <button
      className={classNames("btn-square", `btn-square__${variant}`, `${className}`)}
      type={type}
    >
      <span>{label}</span>
    </button>
  )
}

export default ButtonSquare