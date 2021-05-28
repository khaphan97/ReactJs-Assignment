import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import { IoBagAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
ProductItem.propTypes = {};

function ProductItem(props) {
	return (
		<Fade right>
			<div className="product-item">
				<div className="out-of-stock-label">Hết hàng</div>
				<div className="product-thumb">
					<a href="/#" className="product-add-to-cart" alt="" title="Thêm vào giỏ hàng">
						<IoBagAdd />
					</a>
					<Link to="/product">
						<img
							src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/13900AA05.BDC102-600x600-300x300.jpg"
							alt=""
						/>
					</Link>
				</div>
				<div className="product-text">
					<p className="product-cate text-muted">Đồng hồ nam</p>
					<Link to="/product" className="product-name">
						ĐỒNG HỒ LOUIS ERARD 13900AA05.BDC102 NAM PIN DÂY DA
					</Link>
					<span className="product-price">18,195,300 ₫</span>
				</div>
			</div>
		</Fade>
	);
}

export default ProductItem;
