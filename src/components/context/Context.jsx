/** @format */

import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const ProductContext = createContext()

export const ContextProvider = ({ children }) => {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [cart, setCart] = useState([])
	const [alert, setAlert] = useState(false)
	const [alertMsg,setAlertMsg] = useState('')
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [user, setUser] = useState(null)
	const [checkedOut, setCheckedOut] = useState(false)

	const navigate = useNavigate()


	useEffect(() => {
		fetchProducts()
	}, [])
	useEffect(() => {
		const storedUser = localStorage.getItem('user')
		const storedIsLoggedIn = localStorage.getItem('isLoggedIn')
		
		if (storedUser) {
			setUser(JSON.parse(storedUser))
		}
		if (storedIsLoggedIn === 'true') {
			setIsLoggedIn(true)
		}
	}, [])

	const fetchProducts = async () => {
		try {
			const response = await fetch('https://dummyjson.com/products')
			const data = await response.json()
			setProducts(data.products)
			setIsLoading(false)
			console.log('Products fetched successfully:', data.products)
		} catch (error) {
			console.error('Error fetching products:', error)
		}
	}
	//sign up function
	const signup = (userData) => {
		setUser(userData) // Save to state
		localStorage.setItem('user', JSON.stringify(userData))
		localStorage.setItem('isLoggedIn', 'true')
		setAlert(true)
		setAlertMsg('Signup successful! You are now logged in.')
		setIsLoggedIn(true)
		setTimeout(() => {
			setAlert(false)
			setAlertMsg('')
		}, 2000)
	}

	// Login with existing user credentials
	const login = ({ email, password }) => {
		const storedUser = JSON.parse(localStorage.getItem('user'))

		if (
			storedUser &&
			storedUser.email === email &&
			storedUser.password === password
		) {
			setUser(storedUser)
			setIsLoggedIn(true)
			localStorage.setItem('isLoggedIn', 'true')
			return { success: true, message: 'Login successful' }
		} else {
			return { success: false, message: 'Invalid credentials' }
		}
	}

	const logout = () => {
		if (window.confirm('Are you sure you want to log out')) {
			setIsLoggedIn(false)
			localStorage.removeItem('isLoggedIn')
		}
	}

	const addToCart = (product) => {
		const alreadyInCart = cart.find((item) => item.id === product.id)
		if (alreadyInCart) {
			return
		}
		// Initialize quantity to 1 when adding product to cart
		setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }])
		setAlert(true)
		setAlertMsg('Item added to cart')
		setTimeout(() => {
			setAlert(false)
			setAlertMsg('')
		}, 2000)
	}
	const deleteFromCart = (item) => {
		setCart((prevCart) => prevCart.filter((product) => product.id !== item.id))
	}
	const clearCart = () => {
		setCart([])
	}
	const increaseQuantity = (id) => {
		setCart((prevCart) =>
			prevCart.map((product) =>
				product.id === id
					? { ...product, quantity: product.quantity + 1 }
					: product
			)
		)
	}
	const decreaseQuantity = (id) => {
		setCart((prevCart) =>
			prevCart.map((product) =>
				product.id === id && product.quantity > 1
					? { ...product, quantity: product.quantity - 1 }
					: product
			)
		)
	}
	const showCheckout = () => {
		if (!isLoggedIn) {
			setAlert(true)
			setAlertMsg('Please log in to proceed to checkout')
			setTimeout(() => {
				setAlert(false)
				setAlertMsg('')
				navigate('/log-in')
			}, 2000) 
			return
		}
		setCheckedOut(true)
	}
	const checkout = () => {
		setAlert(true)
		setAlertMsg('Checkout successful! Thank you for your purchase.')
		setTimeout(() => {
			setAlert(false)
			setAlertMsg('')
		}, 2000) 
		clearCart()
		setCheckedOut(false)
	}
	const cartTotalPrice = cart
		.reduce((total, product) => {
			const price = Number(product.price) || 0
			const qty = Number(product.quantity) || 0
			return total + price * qty
		}, 0)
		.toFixed(2)

	const searchProducts = (searchTerm) => {
		if (!searchTerm) {
			fetchProducts()
			return
		}
		const filteredProducts = products.filter((product) =>
			product.title.toLowerCase().includes(searchTerm.toLowerCase())
		)
		if (filteredProducts.length === 0) {
			fetchProducts()
		}
		setProducts(filteredProducts)
	}
	const handleSearch = (e) => {
		const searchTerm = e.target.value
		searchProducts(searchTerm)
	}
	const handleSearchSubmit = (e) => {
		e.preventDefault()
		const searchTerm = e.target.search.value // e.target = form, search = input name
		searchProducts(searchTerm)
		e.target.search.value = '' // clear input
	}

	const subscribeToNewsletter = () => {
		setAlert(true)
		setAlertMsg('Thank you for subscribing to our newsletter!')
		setTimeout(() => {
			setAlert(false)
			setAlertMsg('')
		}, 2000) 
	}
	return (
		<ProductContext.Provider
			value={{
				products,
				setProducts,
				isLoading,
				setIsLoading,
				addToCart,
				cart,
				clearCart,
				cartTotalPrice,
				increaseQuantity,
				decreaseQuantity,
				alert,
				alertMsg,
				signup,
				user,
				login,
				isLoggedIn,
				setIsLoggedIn,
				logout,
				deleteFromCart,
				checkedOut,
				setCheckedOut,
				checkout,
				showCheckout,
				subscribeToNewsletter,
				handleSearchSubmit,
				handleSearch,
			}}
		>
			{children}
		</ProductContext.Provider>
	)
}

export default ProductContext
