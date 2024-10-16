import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Gallery from './pages/Gallery';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<Header />
			<Nav />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/gallery" element={<Gallery />} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
