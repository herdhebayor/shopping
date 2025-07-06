/** @format */

import React from 'react'
import { createContext, useState, useEffect } from 'react'

const ProductContext = createContext()

export const ContextProvider = ({ children }) => {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [cart, setCart] = useState([])
	const [cartIsAdded, setCartIsAdded] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [user, setUser] = useState(null)
	const [signedUp, setSignedUp] = useState(false)
	const [checkedOut, setCheckedOut] = useState(false)

	useEffect(() => {
		fetchProducts()
	}, [])
	useEffect(() => {
		const storedUser = localStorage.getItem('user')
		if (storedUser) {
			setUser(JSON.parse(storedUser))
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
		// Optional: persist
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
			return { success: true }
		} else {
			return { success: false, message: 'Invalid credentials' }
		}
	}

	const logout = () => {
		if (window.confirm('Are you sure you want to log out')) {
			setIsLoggedIn(false)
			setSignedUp('false')
		}
	}

	const addToCart = (product) => {
		const alreadyInCart = cart.find((item) => item.id === product.id)
		if (alreadyInCart) {
			return
		}
		// Initialize quantity to 1 when adding product to cart
		setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }])
		setCartIsAdded(true)
		setTimeout(() => {
			setCartIsAdded(false)
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
			alert('Please log in to proceed with checkout.')
			window.location.href = '/log-in' // Redirect to login page
			return
		}
		setCheckedOut(true)
	}
	const checkout = () => {
		alert('Checkout successful!')
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
			alert('No products found')
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
		alert(`Thank you for subscribing to our newsletter!`)
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
				cartIsAdded,
				signup,
				user,
				login,
				isLoggedIn,
				setIsLoggedIn,
				signedUp,
				setSignedUp,
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
