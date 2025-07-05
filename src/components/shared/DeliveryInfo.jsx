/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

function DeliveryInfo() {
	return (
		<div className='info-container'>
			<h2>Delivery Information</h2>
			<p>
				At Shopn, we deliver quality products at unbeatable prices, right to
				your doorstep fast, reliable, and hassle-free. From everyday essentials
				to the latest trends, we make shopping easy and enjoyable for everyone."
			</p>
			<p>
				Door to door delivery within Lagos. We ensure your products are
				delivered to you within three working days of placing your order.
			</p>
			<p>
				Delivery to pick up station takes two working days within Lagos and
				three working days outside Lagos.
			</p>
			<p>
				Door to door delivery outside Lagos takes four days after placing your
				order
			</p>
			<Link to='/cart' className='cart-link'>
				<button
					style={{
						backgroundColor: '#ff6b2c',
						width: '100%',
						color: '#fff',
						padding: '10px',
						borderRadius: '5px',
						border: 'none',
						cursor: 'pointer',
					}}
				>
					View Cart
				</button>
			</Link>
		</div>
	)
}

export default DeliveryInfo
