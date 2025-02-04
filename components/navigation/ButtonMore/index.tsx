import Icon, { IconVariant } from '@/components/Icon';
import React from 'react'
import "./style.scss"
interface ButtonMoreProps {
    label: string;
    color?: string;
    iconVariant?: IconVariant;
}

function ButtonMore(props: ButtonMoreProps) {
    const { label, color = "#FF1414", iconVariant = "red" } = props
    return (
        <div style={{ color: color } as React.CSSProperties} className={"btn-more"}>
            {label}
            <Icon variant={iconVariant} name='arrowRight' />
        </div>
    )
}

export default ButtonMore