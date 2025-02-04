import React from 'react'

interface TwoLineCurveProps {
  className?: string;
}

function TwoLineCurve(props: TwoLineCurveProps) {
  const { className = "" } = props
  return (
    <svg width="600" height="692" viewBox="0 0 600 692" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M1 691C1 691 95.6448 582.685 172 549.538C234.985 522.195 296 533.422 342 521.484C388 509.547 448 450.455 411.5 350.178C375 249.901 348.909 211.185 375 128.734C409.196 20.6668 598.5 1 598.5 1" stroke="#031EA9" />
      <path d="M85 691C85 691 166.418 582.685 232.103 549.538C286.286 522.195 338.774 533.422 378.346 521.484C417.917 509.547 469.532 450.455 438.133 350.178C406.734 249.901 384.289 211.185 406.734 128.734C436.151 20.6668 599 1 599 1" stroke="#031EA9" />
    </svg>
  )
}

export default TwoLineCurve