import logo from "assets/images/logo.png";
import React from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BsBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
	return (
		<header>
			<div className="container justify-content-between d-flex">
				<div className="header-logo">
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
				</div>
				<div className="header-nav">
					<ul className="nav justify-content-center">
						<li className="nav-item">
							<a className="nav-link-custom" href="/#">
								Giới thiệu
							</a>
						</li>
						<li className="nav-item">
							<Link className="nav-link-custom" to="/category">
								<span> Đồng hồ nam </span>
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link-custom" href="/#">
								<span>Đồng hồ nữ</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link-custom" href="/#">
								<span>Đồng hồ đôi</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link-custom" href="/#">
								<span>Phụ kiện</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link-custom" href="/#">
								<span>Tin tức</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link-custom" href="/#">
								Liên hệ
							</a>
						</li>
					</ul>
				</div>
				<div className="header-user">
					<div className="nav justify-content-center">
						<a className="nav-link-custom " href="/#">
							<AiOutlineSearch />
						</a>
						<a className="nav-link-custom" href="/#">
							<AiOutlineUser />
						</a>
						<a className="nav-link-custom " href="/#">
							<BsBagFill />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
