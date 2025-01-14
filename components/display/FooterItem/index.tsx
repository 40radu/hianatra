import React from 'react'
import "./style.scss"
import classNames from 'classnames';

interface FooterItemProps {
    children: React.ReactNode;
    title: string;
    className?: string
}

function FooterItem(props: FooterItemProps) {
    const { children, title, className } = props
    return (
        <div className={classNames("footer-item", `${className}`)}>
            <h3> {title}</h3>
            {children}
        </div>
    )
}

export default FooterItem