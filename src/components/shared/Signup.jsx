/** @format */

import React from 'react'
import './Signup.css' // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'
import BackBtn from './BackBtn'
import ProductContext from '../context/Context'

function Signup() {
	const { signup,signedUp,setSignedUp} = useContext(ProductContext)
	const [showPassword, setShowPassword] = useState(false)
	const [showPasswordErr, setShowPasswordErr] = useState(false)
	
	const navigate = useNavigate();
	const [form, setForm] = useState({ username: '', email: '', password: '', address:'', gender:'', phone:'',confirmPassword:'' });
	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev)
	}
	
		const handleChange = (e) => {
		  setForm({ ...form, [e.target.name]: e.target.value });
		};
	  
		const handleSubmit = (e) => {
		  e.preventDefault();
		  if (!form.password || !form.confirmPassword) {
			setShowPasswordErr(true)
			return;
		  }
		
		  if (form.password !== form.confirmPassword) {
			setShowPasswordErr(true)
			return;
		  }
		  signup(form); // Save to context and optionally localStorage
		  setShowPasswordErr(false)
		  navigate('/')
		};
	return (
		<div>
			<div className='signup-form'>
				<h2>Sign-Up</h2>
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<label htmlFor='username'>Name</label>
						<input
							type='text'
							id='username'
							name='username'
							className='form-control'
							placeholder='Enter your full name'
							onChange={handleChange}
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							className='form-control'
							placeholder='Enter your email address'
							onChange={handleChange}
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='address'>Address</label>
						<input
							type='text'
							id='address'
							name='address'
							className='form-control'
							placeholder='Enter address'
							onChange={handleChange}
							required
						/>
					</div>
					<div className='form-group' style={{ display: 'flex', gap: '10px' }}>
						<div>
							<label htmlFor='phone'>Phone Number</label>
							<input
								type='tel'
								id='phone'
								name='phone'
								className='form-control'
								placeholder='Enter phone number'
								onChange={handleChange}
								required
							/>
						</div>
						<div className=''>
							<label htmlFor='gender'>Gender</label>
							<input
								type='tel'
								id='gender'
								name='gender'
								className='form-control'
								placeholder='Male or Female'
								onChange={handleChange}
								required
							/>
						</div>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<div style={{ position: 'relative' }}>
							<input
								type={showPassword ? 'text' : 'password'}
								id='password'
								name='password'
								placeholder='Enter your password'
								onChange={handleChange}
								required
							/>
							<div
								className='passwordReveal'
								onClick={togglePasswordVisibility}
							>
								{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
							</div>
						</div>
					</div>
					<div className='form-group'>
						<label htmlFor='confirmPassword'>Confirm Password</label>
						<div style={{ position: 'relative' }}>
							<input
								type={showPassword ? 'text' : 'password'}
								id='confirmPassword'
								name='confirmPassword'
								placeholder='Confirm password'
								onChange={handleChange}
								required
							/>
							{showPasswordErr && (
								<span style={{ color: 'red', fontSize: '.8rem' }}>
									Password do not match
								</span>
							)}
							<div
								className='passwordReveal'
								onClick={togglePasswordVisibility}
							>
								{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
							</div>
						</div>
					</div>
					<button type='submit' className='btn btn-primary'>
						Signup
					</button>
					<p className='mt-2'>
						Already have an account? <Link to='/log-in'>Login</Link>
					</p>
				</form>
			</div>
			<BackBtn />
			{signedUp && (
				<div className='notification'>Product added to cart successfully!</div>
			)}
		</div>
	)
}

export default Signup
