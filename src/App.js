import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import { ProductContext } from './contexts/ProductContext';
import {CartContext } from './contexts/CartContext';
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<CartContext.Provider value={{ cart }}>
			<ProductContext.Provider value = {{products, addItem}} >;

			<Route exact path="/" component={Products} />
			</ProductContext.Provider>

			{/* Routes */}
			<Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
			<CartContext.Provider/>
		</div>
	);
}

export default App;
