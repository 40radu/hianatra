import classNames from 'classnames'
import React from 'react'

interface CircleDashed {
	className?: string
}

function CircleDashed(props: CircleDashed) {
	const { className = "" } = props
	return (
		<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={classNames(`${className}`)}>
			<rect x="1" y="1" width="98" height="98" rx="49" stroke="#031EA9" strokeWidth="2" strokeDasharray="10 10" />
			<circle cx="50" cy="50" r="44.1" stroke="#031EA9" strokeWidth="1.8" strokeDasharray="3.6 7.2 10.8 14.4" />
		</svg>
	)
}

export default CircleDashed