import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import Fade from "react-reveal/Fade";
import "./ProductList.scss";
ListProduct.propTypes = {};

function ListProduct(props) {
	const { sectionTitle } = props;

	return (
		<section className="products-male py-5">
			<div className="container">
				<Fade right>
					<h2 className="section-title">{sectionTitle}</h2>
				</Fade>
				<div className="products-container">
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
				</div>
			</div>
		</section>
	);
}

export default ListProduct;
