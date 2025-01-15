import classNames from 'classnames'
import React from 'react'

interface LineCurveProps {
  className?: string
}

function LineCurve(props: LineCurveProps) {
  const { className } = props
  return (
    <svg width="296" height="170" viewBox="0 0 296 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={classNames(`${className}`)}>
      <path d="M1 10.2134C1 10.2134 220.132 -29.1314 275.431 54.7902C305.367 100.222 292.047 189 292.047 189"
        stroke="#031EA9"
        strokeWidth="2" />
    </svg>
  )
}

export default LineCurve