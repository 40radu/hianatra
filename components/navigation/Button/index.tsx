import React from "react";
import "./style.scss";
import Icon, { IconType, IconVariant } from "../../Icon";

interface ButtonProps {
	label: string;
	variant?: "blue" | "white" | "transparent";
	icon?: keyof IconType;
	iconVariant?: IconVariant;
	className?: string;
	type?: "submit" | "button";
	onClick?: () => void
}

export default function Button(props: ButtonProps) {
	const { label, variant = "blue", icon, iconVariant = "blue", className = "", type = "button", onClick } = props;
	return (
		<button type={type} className={`btn btn--${variant} ${className}`} onClick={onClick}>
			{
				icon &&
				<span>
					<Icon name={icon} variant={iconVariant} />
				</span>
			}
			<span>{label}</span>
		</button>
	);
}
