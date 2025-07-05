/** @format */

import React from 'react'
import { useContext } from 'react'
import ProductContext from './context/Context'
import { IoCloseSharp } from 'react-icons/io5'

function CartCheckout() {
	const { cart, cartTotalPrice, checkout, setCheckedOut, deleteFromCart } =
		useContext(ProductContext)
	return (
		<div className='wrapper'>
			{cart.length > 0 ? (
				<div className='checkout'>
					<h2>Checkout</h2>
					<ul>
						{cart.map((item) => (
							<li key={item.id}>
								<strong>{item.title}</strong> - ${item.price} x {item.quantity}{' '}
								= ${(item.price * item.quantity).toFixed(2)}
								<span
									style={{ color: 'red', cursor: 'pointer' }}
									onClick={() => deleteFromCart(item)}
								>
									<IoCloseSharp color='#ff6b2c' size='20' />
								</span>
							</li>
						))}
					</ul>
					<p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
						<strong>Total: ${cartTotalPrice}</strong>
					</p>
					<button
						onClick={checkout}
						className='btn'
						style={{ marginTop: '10px' }}
					>
						Checkout
					</button>
				</div>
			) : (
				<div>Nothing to checkout</div>
			)}
			<button className='close-btn' onClick={() => setCheckedOut(false)}>
				<IoCloseSharp color='#fff' size='30' />
			</button>
		</div>
	)
}

export default CartCheckout
