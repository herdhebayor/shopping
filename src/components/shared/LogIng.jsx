/** @format */

import React from 'react'
import './LogIn.css'
import { Link,useNavigate } from 'react-router-dom'
import { useState, useContext  } from 'react'
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'
import BackBtn from './BackBtn'
import ProductContext from '../context/Context'

function LogIng() {
	const navigate =useNavigate()
	const { login, setIsLoggedIn } = useContext(ProductContext);
	const [showPassword, setShowPassword] = useState(false)
	const [form, setForm] = useState({ email: '', password: '' });
	const [error, setError] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev)
	}

	
	
  
	const handleChange = (e) => {
	  setForm({ ...form, [e.target.name]: e.target.value });
	};
  
	const handleSubmit = (e) => {
	  e.preventDefault();
  
	  const result = login(form);
	  if (result.success) {
		alert('Login successful!');
		setIsLoggedIn(true)
		navigate('/')
		// optionally navigate to another page using useNavigate from react-router-dom
	  } else {
		setError(true);
	  }
	};
	return (
		<div>
			<div className='login-form'>
				<form onSubmit={handleSubmit}>
					<h1 style={{ marginBottom: '10px' }}>Welcome Back!</h1>
					<p style={{ marginBottom: '10px' }}>
						Please enter your email and password to login.
					</p>
					<hr style={{ marginBottom: '10px' }} />
					<h2 style={{ marginBottom: '10px' }}>Login</h2>

					 <span className='error'>{error ? "Incorrect password or email" : ""}</span> 
					<div className='form-group'>
						<label htmlFor='email'>Email:</label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='Enter your email'
							required
							onChange={handleChange}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Password:</label>
						<div style={{ position: 'relative' }}>
							<input
								type={showPassword ? 'text' : 'password'}
								id='password'
								name='password'
								placeholder='Enter your password'
								required
								onChange={handleChange}
							/>
							<div
								className='passwordReveal'
								onClick={togglePasswordVisibility}
							>
								{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
							</div>
						</div>
					</div>
					<button type='submit'>Login</button>
					<p>
						Don't have an account? <Link to='/sign-up'>Sign-up</Link>
					</p>
				</form>
			</div>
			<BackBtn />
		</div>
	)
}

export default LogIng
