import ProductItem from "components/ListProduct/ProductItem";
import ProductWidget from "features/Product/components/ProductWidget";
import React from "react";
import { Col, Row } from "react-bootstrap";

function Category(props) {
	const CATEGORIES = [
		{
			name: "Đồng hồ nam",
			url: "/category/1",
		},
		{
			name: "Đồng hồ nữ",
			url: "/category/2",
		},
		{
			name: "Đồng hồ đôi",
			url: "/category/2",
		},
	];

	const BRANDS = [
		{
			name: "Casio",
			url: "/",
		},
		{
			name: "Casio",
			url: "/",
		},
		{
			name: "Casio",
			url: "/",
		},
		{
			name: "Casio",
			url: "/",
		},
		{
			name: "Casio",
			url: "/",
		},
	];

	return (
		<div className="container">
			<Row className="my-4">
				<Col xs={12} lg={3} md={3}>
					<ProductWidget
						widgetTitle="Danh Mục Sản Phẩm"
						widgetType="filterWidget"
						widgetItems={CATEGORIES}
					/>
					<ProductWidget
						widgetTitle="Thương hiệu"
						widgetType="filterWidget"
						widgetItems={BRANDS}
					/>
				</Col>
				<Col xs={12} lg={9} md={9}>
					<div className="d-flex flex-wrap">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    </div>
				</Col>
			</Row>
		</div>
	);
}

export default Category;
