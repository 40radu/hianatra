import React from 'react'
import "./style.scss"
import classNames from 'classnames';
interface HeadingProps {
    children: React.ReactNode;
    label: string;
    variantTitle?: "black" | "blue";
    align?: "center" | "start" | "end"
}

function Heading(props: HeadingProps) {
    const { children, label, align = "center", variantTitle = "blue" } = props
    return (
        <div
            className={(`heading`)}
            style={{ alignItems: align } as React.CSSProperties}
        >
            <h2 className={variantTitle}>{label}</h2>
            <p className={classNames("description-common")}>
                {children}
            </p>
        </div>
    )
}

export default Heading