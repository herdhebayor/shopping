/** @format */

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Products from './components/Products'
import './App.css'
import Footer from './components/Footer'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails'
import LogIn from './components/shared/LogIng'
import Signup from './components/shared/Signup'
import { ContextProvider } from './components/context/Context'
import ScrollToTop from './components/shared/ScrollTop'

function App() {
	return (
		<ContextProvider>
			<Router basename="/shopping">
				<ScrollToTop />
				{/* ScrollToTop component to reset scroll position on route change */}
				{/* This component will scroll to the top of the page whenever the route changes */}
				{/* It uses the useLocation hook from react-router-dom to detect route changes */}
				{/* and the useEffect hook to perform the scroll action */}
				<div className='App'>
					<Header />
					<div className='container'>
						<Routes>
							<Route exact path='/' element={<Products />} />
							<Route path='/product/:id' element={<ProductDetails />} />
							<Route path='/cart' element={<Cart />} />
							<Route path='/log-in' element={<LogIn />} />
							<Route path='/sign-up' element={<Signup />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</Router>
		</ContextProvider>
	)
}

export default App
