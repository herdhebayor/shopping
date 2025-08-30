/** @format */

import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductContext from './context/Context'
import DeliveryInfo from './shared/DeliveryInfo'
import BackBtn from './shared/BackBtn'

function ProductDetails() {
	const { addToCart, products,cartIsAdded } = useContext(ProductContext)
	const { id } = useParams()
	const product = products.find((p) => p.id.toString() === id)

	if (!product) {
		return <div className='empty'>Product not found</div>
	}

	return (
		<div className='detail-container'>
			<div>
				<div className='product-details'>
					<div className='product'>
						<div style={{ width: '300px', height: '300px', textAlign:'center' }}>
							<img
								src={product.images[0]}
								alt={product.title}
								className='product-image'
								style={{ width: '100%', height: '100%' }}
							/>
						</div>
						<div className='product-info' style={{ lineHeight: '1.5' }}>
							<h1 className='product-name'>{product.title}</h1>
							<p
								style={{
									borderBottom: '1px solid #ccc',
									paddingBottom: '10px',
								}}
							>
								<strong>
									Brand: {product.brand ? product.brand : 'Others'} |
								</strong>{' '}
								<strong>Category: {product.category}</strong>
							</p>
							<p className='product-description' style={{ margin: '10px 0' }}>
								{product.description}
							</p>
							<p className='product-price'>
								<strong>${product.price}</strong>{' '}
								<strike
									style={{
										fontSize: '1rem',
										backgroundColor: '#ffa994',
										color: '#fff',
									}}
								>
									{product.discountPercentage}%
								</strike>
							</p>
							<p className='availability'>
								{product.availabilityStatus === 'In Stock' ? (
									<span style={{ color: 'green' }}>In Stock</span>
								) : (
									<span style={{ color: 'red' }}>Out of Stock</span>
								)}
							</p>
							<p className='rating'>
								Rating: <strong>{product.rating}</strong>
							</p>
							<div className='product-actions'>
								<button
									className='add-to-cart-btn'
									onClick={() => addToCart(product)}
									disabled={product.availabilityStatus !== 'In Stock'}
								>
									Add to Cart
								</button>
							</div>
							<div style={{ marginTop: '20px', color: 'green' }}>
								<p>Call 0700 000 0011 to order this product</p>
								<p>
									Email us @ShopnInfo@gmail.com to know more about this product
								</p>
								<p>{product.returnPolicy}</p>
							</div>
						</div>
					</div>
					<div style={{ marginTop: '20px' }}>
						<h2 style={{ marginBottom: '20px', textAlign: 'center' }}>
							{product.reviews.length} Reviews
						</h2>
						<div className='product-reviews'>
							{product.reviews.map((review, index) => (
								<div
									key={index}
									className='review'
									style={{ marginBottom: '20px' }}
								>
									<p>
										<strong>{review.reviewerName}</strong>
									</p>
									<p>{review.comment}</p>
									<p>
										<strong>{review.rating}</strong> stars rating
									</p>
									<p style={{ fontStyle: 'italic' }}>{review.reviewerEmail}</p>
								</div>
							))}
						</div>
					</div>
				</div>
				<DeliveryInfo />
				<BackBtn />
				{cartIsAdded && (
					<div className='notification'>
						Product added to cart successfully!
					</div>
				)}
			</div>
		</div>
	)
}

export default ProductDetails
