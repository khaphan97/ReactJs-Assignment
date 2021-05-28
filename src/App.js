import Footer from "components/Footer";
import Home from "features/Home";
import Product from "features/Product";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "App.scss";
import ScrollToTop from "components/ScrollToTop";
import Category from "features/Category";

function App() {
	return (
		<div className="app">
			<div id="wrapper">
				<Router>
					<ScrollToTop />
					<Header />
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/product">
							<Product />
						</Route>
						<Route path="/category">
							<Category />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</div>
		</div>
	);
}

export default App;
