import React from 'react'
interface MorePointsProps {
    colorType?: string;
    className?: string;
}

function MorePoints(props: MorePointsProps) {
    const { colorType = "#FFFFFF", className = "" } = props
    return (
        <span style={{ color: colorType  } as React.CSSProperties} className={`${className}`}>
            <svg width="200" height="100" viewBox="0 0 310 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2">
                    <circle cx="25" cy="15" r="5" fill="currentColor" />
                    <circle cx="45" cy="15" r="5" fill="currentColor" />
                    <circle cx="65" cy="15" r="5" fill="currentColor" />
                    <circle cx="85" cy="15" r="5" fill="currentColor" />
                    <circle cx="105" cy="15" r="5" fill="currentColor" />
                    <circle cx="125" cy="15" r="5" fill="currentColor" />
                    <circle cx="145" cy="15" r="5" fill="currentColor" />
                    <circle cx="165" cy="15" r="5" fill="currentColor" />
                    <circle cx="185" cy="15" r="5" fill="currentColor" />
                    <circle cx="205" cy="15" r="5" fill="currentColor" />
                    <circle cx="225" cy="15" r="5" fill="currentColor" />
                    <circle cx="245" cy="15" r="5" fill="currentColor" />
                    <circle cx="265" cy="15" r="5" fill="currentColor" />
                    <circle cx="285" cy="15" r="5" fill="currentColor" />
                    <circle cx="25" cy="35" r="5" fill="currentColor" />
                    <circle cx="45" cy="35" r="5" fill="currentColor" />
                    <circle cx="65" cy="35" r="5" fill="currentColor" />
                    <circle cx="85" cy="35" r="5" fill="currentColor" />
                    <circle cx="105" cy="35" r="5" fill="currentColor" />
                    <circle cx="125" cy="35" r="5" fill="currentColor" />
                    <circle cx="145" cy="35" r="5" fill="currentColor" />
                    <circle cx="165" cy="35" r="5" fill="currentColor" />
                    <circle cx="185" cy="35" r="5" fill="currentColor" />
                    <circle cx="205" cy="35" r="5" fill="currentColor" />
                    <circle cx="225" cy="35" r="5" fill="currentColor" />
                    <circle cx="245" cy="35" r="5" fill="currentColor" />
                    <circle cx="265" cy="35" r="5" fill="currentColor" />
                    <circle cx="285" cy="35" r="5" fill="currentColor" />
                    <circle cx="25" cy="55" r="5" fill="currentColor" />
                    <circle cx="45" cy="55" r="5" fill="currentColor" />
                    <circle cx="65" cy="55" r="5" fill="currentColor" />
                    <circle cx="85" cy="55" r="5" fill="currentColor" />
                    <circle cx="105" cy="55" r="5" fill="currentColor" />
                    <circle cx="125" cy="55" r="5" fill="currentColor" />
                    <circle cx="145" cy="55" r="5" fill="currentColor" />
                    <circle cx="165" cy="55" r="5" fill="currentColor" />
                    <circle cx="185" cy="55" r="5" fill="currentColor" />
                    <circle cx="205" cy="55" r="5" fill="currentColor" />
                    <circle cx="225" cy="55" r="5" fill="currentColor" />
                    <circle cx="245" cy="55" r="5" fill="currentColor" />
                    <circle cx="265" cy="55" r="5" fill="currentColor" />
                    <circle cx="285" cy="55" r="5" fill="currentColor" />
                    <circle cx="25" cy="75" r="5" fill="currentColor" />
                    <circle cx="45" cy="75" r="5" fill="currentColor" />
                    <circle cx="65" cy="75" r="5" fill="currentColor" />
                    <circle cx="85" cy="75" r="5" fill="currentColor" />
                    <circle cx="105" cy="75" r="5" fill="currentColor" />
                    <circle cx="125" cy="75" r="5" fill="currentColor" />
                    <circle cx="145" cy="75" r="5" fill="currentColor" />
                    <circle cx="165" cy="75" r="5" fill="currentColor" />
                    <circle cx="185" cy="75" r="5" fill="currentColor" />
                    <circle cx="205" cy="75" r="5" fill="currentColor" />
                    <circle cx="225" cy="75" r="5" fill="currentColor" />
                    <circle cx="245" cy="75" r="5" fill="currentColor" />
                    <circle cx="265" cy="75" r="5" fill="currentColor" />
                    <circle cx="285" cy="75" r="5" fill="currentColor" />
                </g>
            </svg>

        </span>
    )
}

export default MorePoints