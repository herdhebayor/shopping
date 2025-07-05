/** @format */

import React from 'react'
import { FaCartArrowDown,FaSearch  } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Icon from "../assets/logo-2.png"
import { useContext } from 'react'
import ProductContext from './context/Context'

function Header() {
	const { cart,isLoggedIn,logout,user } = useContext(ProductContext)
	return (
		<>
			<div className='navbar'>
				<div className='App-logo' style={{ width: '80px' }}>
					<Link to='/'>
						<img src={Icon} alt='logo' style={{ width: '100%' }} />
					</Link>
				</div>

				<form className='nav-input-group'>
					<input type='search' placeholder='Search' />
					<button type='submit'>
						<FaSearch color='#ff6b2c' />
					</button>
				</form>
				<div style={{ display: 'flex' }}>
					<Link to='/cart' className='cart-icon'>
						<div className='cart'>
							<span className='cart-icon'>
								<FaCartArrowDown color='#ff6b2c' size='30' />
							</span>
							<span className='cart-count'>{cart.length}</span>
						</div>
					</Link>
					<div
						className='user'
						style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
					>
						{isLoggedIn ? (
							<div style={{display:'flex',gap:'10px',alignItems:'center'}}>
							<div className='user-name' >{user.username[0]}</div>
							<button className='btn logout' onClick={logout}>Log out</button>
							</div>
						) : (
							<>
								<Link to='/log-in'>
									<button className='btn login'>Login</button>
								</Link>
								<Link to='/sign-up'>
									<button className='btn signup'>Sign Up</button>
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
