/** @format */

import React from 'react'
import Logo from '../assets/logo-2.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import ProductContext from './context/Context'
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaYoutube,
	FaTiktok,
} from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

function Footer() {
	const { subscribeToNewsletter } = useContext(ProductContext)
	return (
		<div className='footer'>
			<div>
				<img src={Logo} alt='logo' style={{ width: '80px', height: '80px' }} />
				<form style={{ width: '350px' }} onSubmit={subscribeToNewsletter}>
					<h4 style={{ marginBottom: '20px' }}>
						Subscribe to our news letter to receive update on our new products
					</h4>
					<div>
						<label className='news-label' htmlFor='email'>
							Email
						</label>
						<input
							type='email'
							className='newsletter-email'
							placeholder='Enter your email'
							required
						/>
					</div>
					<div
						style={{
							display: 'flex',
							gap: '20px',
							fontSize: '.7rem',
							alignItems: 'center',
						}}
					>
						<input type='checkbox' className='check' required />
						<label htmlFor='check'>
							By clicking you agree to our terms and condition
						</label>
					</div>
					<button type='submit' className='submit-btn'>
						Submit
					</button>
				</form>
			</div>
			<div style={{'display':'flex',justifyContent:'space-between', 'gap':'50px'}}>
				<div className='footer-links'>
					<ul>
						<li>
							<Link to='./' style={{ color: '#fff', textDecoration: 'none' }}>
								Home
							</Link>
						</li>
						<li>
							<Link to='./' style={{ color: '#fff', textDecoration: 'none' }}>
								Contact Us
							</Link>
						</li>
						<li>
							<Link
								to='./cart'
								style={{ color: '#fff', textDecoration: 'none' }}
							>
								Cart
							</Link>
						</li>
						<li>
							<Link to='./' style={{ color: '#fff', textDecoration: 'none' }}>
								Chat with Us
							</Link>
						</li>
						<li>
							<Link to='./' style={{ color: '#fff', textDecoration: 'none' }}>
								Our Products
							</Link>
						</li>
						<li>
							<Link to='./' style={{ color: '#fff', textDecoration: 'none' }}>
								Services
							</Link>
						</li>
						<li>
							<Link
								to='./cart'
								style={{ color: '#fff', textDecoration: 'none' }}
							>
								Orders
							</Link>
						</li>
						<li>
							<Link to='./' style={{ color: '#fff', textDecoration: 'none' }}>
								Payment system
							</Link>
						</li>
						<li>
							<Link to='./' style={{ color: '#fff', textDecoration: 'none' }}>
								Links
							</Link>
						</li>
					</ul>
				</div>
				<div className='footer-links'>
					<ul>
						<li>
							<Link to='./' style={{ color: '#fff', textDecoration: 'none' }}>
								About Us
							</Link>
						</li>
						<li>
							<Link to='./' style={{ color: '#fff', textDecoration: 'none' }}>
								Official stores
							</Link>
						</li>
						<li>
							<Link to='./' style={{ color: '#fff', textDecoration: 'none' }}>
								Terms and conditions
							</Link>
						</li>
						<li>
							<Link to='./' style={{ color: '#fff', textDecoration: 'none' }}>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link to='./' style={{ color: '#fff', textDecoration: 'none' }}>
								Report a problem
							</Link>
						</li>
						<li>
							<Link to='./' style={{ color: '#fff', textDecoration: 'none' }}>
								Return Policy
							</Link>
						</li>
						<li>
							<Link to='./' style={{ color: '#fff', textDecoration: 'none' }}>
								Official offices
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='footer-socials'>
				<h2>Follow Us</h2>
				<div style={{ display: 'flex', gap: '5px', marginTop: '20px' }}>
					<Link to='https://www.facebook.com'>
						<FaFacebookSquare size={30} color='#fff' />
					</Link>
					<Link to='https://www.twitter.com'>
						<FaSquareXTwitter size={30} color='#fff' />
					</Link>
					<Link to='https://www.instagram.com'>
						<FaInstagramSquare size={30} color='#fff' />
					</Link>
					<Link to='https://www.youtube.com'>
						<FaYoutube size={30} color='#fff' />
					</Link>
					<Link to='https://www.tiktok.com'>
						<FaTiktok size={30} color='#fff' />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer
