/** @format */

import React from 'react'
import Card from './shared/Card'
import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import ProductContext from './context/Context'
import LoadingImg from '../assets/Loading_icon.gif'

function Products() {
	const { products, isLoading } = useContext(ProductContext)
	const [errorLoading, setErrorLoading] = useState(false);

	useEffect(() => {
		let timeout;
	
		if (isLoading) {
		  // Start the 60-second timer
		  timeout = setTimeout(() => {
			setErrorLoading(true);
		  }, 30000); 
		}
	
		// Clear timeout if isLoading becomes false before 1 minute
		return () => clearTimeout(timeout);
	  }, [isLoading]);
	return (
		<div>
			{isLoading ? (
				<div
					style={{
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#fff',
						flexDirection: 'column',
						gap: '10px',
						padding: '50px',
					}}
				>
					{errorLoading ? (
						<div style={{textAlign:'center'}}>
							<p>
								Oops! seems like you're not connected to internet. connect to
								internet and try again
							</p>
							<button
								style={{
									marginTop:'10px',
									border:'1px solid',
									borderRadius:'5px',
									padding:'5px'
								}}
								onClick={() => {
									window.location.reload()
									setErrorLoading(false)
								}}
								
							>
								reload
							</button>
						</div>
					) : (
						<div>
							<p style={{textAlign:'center'}}>Loading...</p>
							<img
								src={LoadingImg}
								alt='loading'
								style={{ width: '300px', height: '200px' }}
							/>
						</div>
					)}
				</div>
			) : (
				<ul className='products'>
					{products.map((product) => (
						<Link
							to={`/product/${product.id}`}
							key={product.id}
							style={{ color: '#2e2e2e', textDecoration: 'none' }}
						>
							<li key={product.id}>
								<Card>
									<div className='product'>
										<img
											src={product.images[0]}
											alt={product.name}
											className='productImage'
										/>
										<div className='product-detail'>
											<p className='brand'>{product.title}</p>
											<p className='price'>
												<strong>${product.price}</strong>
											</p>
											<p className='rating'>
												Rating: <strong>{product.rating}</strong>
											</p>
										</div>
									</div>
								</Card>
							</li>
						</Link>
					))}
				</ul>
			)}
		</div>
	)
}

export default Products
