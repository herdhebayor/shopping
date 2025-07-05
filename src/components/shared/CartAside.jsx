/** @format */

import React from 'react'
import { useContext } from 'react'
import ProductContext from '../context/Context'

function CartAside() {
	const { cartTotalPrice, showCheckout } = useContext(ProductContext)
	return (
		<div className='cartAside'>
			<div className='cartAsideInner'>
				<p className='header'>CART SUMMARY</p>
				<p style={{ display: 'flex', justifyContent: 'space-between',marginBlock:'10px' }}>
					Subtotal <strong>${cartTotalPrice}</strong>
				</p>
				<button className='checkout' onClick={showCheckout}>Checkout Cart</button>
			</div>
			<div className='return'>
				<p>RETURN POLICY</p>
				<p>Product that are eligible for return within 7 days</p>
			</div>
		</div>
	)
}

export default CartAside
