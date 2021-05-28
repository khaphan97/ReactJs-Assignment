import ProductItem from "components/ListProduct/ProductItem";
import React from "react";
import {
	Breadcrumb,
	Button,
	Col,
	Dropdown,
	InputGroup,
	Row,
	Tab,
	Table,
	Tabs,
	Carousel,
} from "react-bootstrap";
import Slider from "react-slick";
ProductDetails.propTypes = {};

function ProductDetails(props) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: true
	};

	return (
		<Col lg={9} md={12} xs={12}>
			<Row>
				<Col lg={6} md={12} xs={12}>
					<div className="product-img">
						<img
							src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dong-ho-citizen-au1080-20a-nam-eco-drive-day-vai-600x600.jpg"
							alt=""
						/>
					</div>
				</Col>
				<Col lg={6} md={12} xs={12}>
					<div className="product-detail">
						<Breadcrumb className="bg-light">
							<Breadcrumb.Item href="#">Trang chủ</Breadcrumb.Item>
							<Breadcrumb.Item active>Đồng hồ nam</Breadcrumb.Item>
						</Breadcrumb>
						<h3 className="product-title">ĐỒNG HỒ CITIZEN AU1080-20A NAM ECO-DRIVE DÂY VẢI</h3>
						<Dropdown.Divider></Dropdown.Divider>
						<h4 className="product-price">5,040,000 ₫</h4>
						<p className="product-desc">
							Đồng hồ nam Citizen AU1080-20A nổi bật Pin sử dụng công nghệ hiện đại Eco-Drive (Năng
							Lượng Ánh Sáng), với thiết kế theo phong cách thời trang với dây đeo chất liệu bằng
							vải tông màu kem trẻ trung.
						</p>
						<form action="">
							<InputGroup className="mb-3">
								<input
									className="text-center"
									type="number"
									min={1}
									default={1}
									style={{ width: "50px" }}
								/>
								<Button variant="warning" type="submit" className="text-white ml-2">
									Thêm vào giỏ hàng
								</Button>
							</InputGroup>
						</form>
						<Dropdown.Divider></Dropdown.Divider>
						<p className="product-code">Mã: AU1080-20A</p>
						<p className="product-cate">
							Danh mục:{" "}
							<a href="/#" className="direct-link">
								Đồng hồ nam
							</a>
						</p>
					</div>
				</Col>
			</Row>
			<Dropdown.Divider></Dropdown.Divider>

			<div className="product-footer my-4">
				<Tabs defaultActiveKey="more-detail" id="uncontrolled-tab-example">
					<Tab eventKey="more-detail" title="Thông tin bổ sung">
						<div className="border-bottom border-left border-right">
							<Table striped>
								<tbody>
									<tr>
										<th>CHẤT LIỆU DÂY</th>
										<td>
											<a href="/#" className="direct-link">
												Dây vải
											</a>
										</td>
									</tr>
									<tr>
										<th>CHẤT LIỆU MẶT KÍNH</th>
										<td>
											<a href="/#" className="direct-link">
												Kính Sapphire
											</a>
										</td>
									</tr>
									<tr>
										<th>Thương Hiệu</th>
										<td>
											<a href="/#" className="direct-link">
												Citizen
											</a>
										</td>
									</tr>
									<tr>
										<th>XUẤT XỨ</th>
										<td>
											<a href="/#" className="direct-link">
												Nhật Bản
											</a>
										</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</Tab>
					<Tab eventKey="rating" title="Đánh giá chi tiết"></Tab>
					<Tab eventKey="contact" title="Chính sách bảo hành">
						<div className="p-3 border-bottom border-left border-right">
							<p>Chính sách bảo hành của riêng mỗi hãng:</p>
							<p>CASIO: Bảo hành chính hãng máy 1 năm, pin 1,5 năm</p>
							<p>CITIZEN: Bảo hành chính hãng toàn cầu máy 1 năm, pin 1 năm</p>
							<p>SEIKO: Bảo hành chính hãng toàn cầu máy 1 năm, pin 1 năm</p>
							<p>ORIENT: Bảo hành chính hãng toàn cầu máy 1 năm, pin 1 năm</p>
							<p>OP: Bảo hành chính hãng máy 2 năm, pin 1 năm</p>
							<p>RHYTHM: Bảo hành chính hãng máy 1 năm, pin 1 năm</p>
							<p>OGIVAL: Bảo hành chính hãng máy 2 năm, pin 1 năm</p>
							<p>ELLE: Bảo hành chính hãng máy 2 năm, pin 2 năm</p>
							<p>TISSOT: Bảo hành chính hãng máy 2 năm, pin 1 năm</p>
						</div>
					</Tab>
				</Tabs>

				<div className="related-product my-4">
					<Dropdown.Divider></Dropdown.Divider>
					<h4 className="section-title">Sản phẩm tương tự</h4>
					<Slider {...settings}>
						<ProductItem/>
						<ProductItem/>
						<ProductItem/>
						<ProductItem/>
						<ProductItem/>
						<ProductItem/>
						<ProductItem/>
						<ProductItem/>
					</Slider>
				</div>
			</div>
		</Col>
	);
}

export default ProductDetails;
