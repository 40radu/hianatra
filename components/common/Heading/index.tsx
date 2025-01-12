import React from 'react'
import "./style.scss"
import classNames from 'classnames';
interface HeadingProps {
    children: React.ReactNode;
    label: string;
    variantTitle?: "black" | "blue";
    align?: "center" | "start" | "end";
    textAlign? : "left" | "center" | "right";
}

function Heading(props: HeadingProps) {
    const { children, label, align = "center", variantTitle = "blue" , textAlign = "left"} = props
    return (
        <div
            className={(`heading`)}
            style={{ alignItems: align } as React.CSSProperties}
        >
            <h2 className={variantTitle}>{label}</h2>
            <p className={classNames("description-common")} style={{textAlign : textAlign}}>
                {children}
            </p>
        </div>
    )
}

export default Heading