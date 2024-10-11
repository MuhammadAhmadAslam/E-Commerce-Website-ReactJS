import MixedAutoSlider from "../components/MixedAutoSlider";
import SubscriptionForm from "../components/SubscriptionForm";
import Features from "../components/Features";
import LatestCollections from "../components/LatestCollections";
import { motion } from "framer-motion";
import BestSeller from "../components/BestSeller";
import GlassEffectCard from "../components/GlassEffectCard";
import HeaderDashed from "../components/HeaderDashed";




export let ProductCategry = [
	{
		Category: "Hat&Caps",
		subCategory: ["Men's cap", "Women's Caps", "Boys", "Girls",],
		Image: "https://t3.ftcdn.net/jpg/07/21/48/54/360_F_721485494_tStfZlPsB9iWiZSEbOO3vQIaIHJ5SXEl.jpg",
		path: "product/Hat&Caps"
	},
	{
		Category: "Undergarments",
		subCategory: [" Mens Undergarments", "Women", "Undergarments", "Boys", "Girls"],
		Image: "https://cdn.notonthehighstreet.com/fs/c1/0e/30de-3cd3-41e6-a21a-7011b66b78f1/original_quotemark0-personalised-underwear.jpg"
		, path: "product/Undergarments"
	},
	{
		Category: "Fragrances",
		subCategory: ["perfume for Mens", "Perfume for Women's", "Unisex"],
		Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyzzUGw4bWY43NnvVJhpL8-CthRab9vhTMw&s"
		, path: "product/Fragrances"
	},
	{
		Category: "Watches",
		subCategory: ["For mens", "For Womens"],
		Image: "https://akerfalk.se/cdn/shop/files/Aventyr_black_preeorder.webp?v=1725527012&width=799"
		, path: "product/Watches"
	},
	{
		Category: "FootWear",
		subCategory: [],
		Image: "https://www.shutterstock.com/image-photo/walk-modern-unisex-footwear-sneakers-260nw-2174646593.jpg"
		, path: 'product/FootWear'
	},
	{
		Category: "Cosmetics",
		subCategory: [],
		Image: "https://i.pinimg.com/736x/af/a5/33/afa533c99593187c4798050ccb8148b9.jpg"
		, path: "product/Cosmetics"
	},
]


// Dummy Fixed Data:
// import productsData from "../components/FixedData";


const Home = () => {

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="home-page text-center"
		>
			<div className="container">
				<MixedAutoSlider />

				<LatestCollections />

				<section style={{marginBottom : "50px", marginTop:"150px"}}>
					<HeaderDashed head1="All"
						head2="Categories"
						paragraph="Style, Comfort, and Quality – All in One Place" />
					<div className="row">
						{
							ProductCategry.map((data) => (
								<GlassEffectCard imageSrc={data.Image} text={data.Category} path={data.path} />
							))
						}
					</div>
				</section>


				<BestSeller />


				<Features />

				<SubscriptionForm />
			</div>
		</motion.section>
	);
};

export default Home;
