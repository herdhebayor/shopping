/** @format */

import ProductContext from '../context/Context'
import React, { useContext } from 'react'

function Alert({ type }) {
	const { alertMsg } = useContext(ProductContext)
	return (
		<div
			className='notification'
			style={
				type === 'success'
					? { backgroundColor: 'green' }
					: { backgroundColor: '#E75A1F' }
			}
		>
			{alertMsg}
		</div>
	)
}

export default Alert
