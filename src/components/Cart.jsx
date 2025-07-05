/** @format */

import React from 'react'
import { useContext } from 'react'
import ProductContext from './context/Context'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import CartAside from './shared/CartAside'
import CartCheckout from './CartCheckout'
//import BackBtn from './shared/BackBtn'

function Cart() {
	const {
		cart,
		increaseQuantity,
		decreaseQuantity,
		deleteFromCart,
		checkedOut,
	} = useContext(ProductContext)
	return (
		<div className='cart-container'>
			{cart.length >= 1 ? (
				<div className='cart-inner'>
					<ul>
						{cart.map((product) => (
							<li key={product.id}>
								<div style={{ display: 'flex', justifyContent:'space-between',justifyItems:'center' }}>
									<div style={{ display: 'flex', gap: '10px',alignItems:'center' }}>
										<img
											src={product.thumbnail}
											alt={product.name}
											className='cart-image'
										/>
										<div>
											<h2>{product.title}</h2>
											<p>Brand:{product.band ? product.brand : 'Others'}</p>
											<p
												style={
													product.stock > 1
														? { color: 'green',fontSize:'.8rem' }
														: { color: 'rgb(255, 0, 0)',fontSize:'.8rem' }
												}
											>{`Only ${product.stock}pcs left`}</p>
										</div>
									</div>
									<div>
										<h2 className='cart-item-price'>
											<strong>${product.price}</strong>
										</h2>
									</div>
								</div>
								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginTop:'10px' }}>
									<button className='remove' onClick={()=> deleteFromCart(product)}><MdDeleteOutline color='#ff6b2c' size='25'/> Remove</button>
									<div className='count-container'>
										<button 
										disabled={product.quantity >= product.stock}
										onClick={() => increaseQuantity(product.id)}>
											<FaPlus/>
										</button>
										<p>{product.quantity}</p>
										<button 
										disabled={product.quantity <= 1}
										onClick={() => decreaseQuantity(product.id)}>
											<FaMinus/>  
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
					
				</div>
			) : (
				<div className='cart-inner-empty'>
					<h1>Your cart is empty</h1>
				</div>
			)}
            <CartAside/>
			{
				checkedOut && (
					<CartCheckout />
				)
			}
		</div>
	)
}

export default Cart
