import React from "react";
import "./style.scss";
import classNames from "classnames";
import Icon, { IconType, IconVariant } from "../../Icon";

interface ButtonProps {
    label: string;
    variant?: "blue" | "white";
    icon?: keyof IconType;
    iconVariant?: IconVariant;
}

export default function Button(props: ButtonProps) {
    const { label, variant = "blue", icon, iconVariant = "blue" } = props;
    return (
        <button className={classNames("btn", `btn--${variant}`)}>
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
