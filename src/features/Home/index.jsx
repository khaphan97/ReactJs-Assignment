import ListProduct from "components/ListProduct";
import React from "react";
import MainBanner from "./components/MainBanner";
import SubBanner from "./components/SubBanner";
import "./HomePage.scss";

function Home(props) {
	return (
		<main>
			<section className="banner-main">
				<MainBanner />
			</section>

			<ListProduct sectionTitle="Đồng Hồ Nam" />

			<SubBanner />

			<ListProduct sectionTitle="Đồng Hồ Nữ" />

			<ListProduct sectionTitle="Phụ Kiện" />
		</main>
	);
}

export default Home;
