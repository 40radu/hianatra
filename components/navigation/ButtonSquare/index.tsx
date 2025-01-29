import classNames from 'classnames';
import React from 'react'
import "./style.scss"

interface ButtonSquareProps {
  label: string;
  variant?: "blue" | "white";
  className?: string;
  type?: "submit" | "button"
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function ButtonSquare(props: ButtonSquareProps) {
  const { label, className = "", type = "button", variant = "blue", onClick } = props
  return (
    <button
      className={classNames("btn-square", `btn-square__${variant}`, `${className}`)}
      type={type} onClick={onClick}
    >
      <span>{label}</span>
    </button>
  )
}

export default ButtonSquare