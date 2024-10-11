import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";
import mainImg from "../assets/about_img.png";
import SubscriptionForm from "../components/SubscriptionForm";
import DescribedImage from "../components/DescribedImage";
import Features from "../components/Features";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="about-page text-center py-3 pt-5"
		>
			<div className="container">
				{/* Page header with dashed styling */}
				<HeaderDashed head1="ABOUT" head2="US" classStyle="fw-normal fs-3" />

				{/* Main image with descriptive text */}
				<DescribedImage img={mainImg} imgTitle="clothes image"
					styleInLarge="column-gap-xl-4"
					styleImg="col-xl-4"
					styleText="col-xl-6"
					sideText={
						<>
							<p style={{ color: "black" }}>

								Welcome to Our Store , your ultimate destination for premium lifestyle essentials. We specialize in bringing you a diverse range of products designed to elevate your style and confidence. From captivating fragrances and luxurious cosmetics to stylish hats and caps, we cater to your every need.
								<br />
								<br />
								Our collection also includes high-quality undergarments and fashionable footwear, ensuring that you feel comfortable and look your best from head to toe. At Our Store, we are committed to offering top-notch products that combine quality, comfort, and elegance, making you feel truly exceptional every day.

							</p>
							{/* Mission statement */}
							<div className="mission">
								<h4 className="my-3 mt-4" style={{
									WebkitTextFillColor: "transparent",
									backgroundImage: "linear-gradient(270deg, #fff09e, #c3812a, #fff09e, #c3812a)",
									WebkitBackgroundClip: "text",
									backgroundClip: "text",
									fontSize: "30px"
								}}>Our Mission</h4>
								<p className="mb-0" style={{ color: "black" }}>
									Our mission at Our Store is to empower customers with choice,
									convenience, and confidence. We&rsquo;re dedicated to providing a
									seamless shopping experience that exceeds expectations, from
									browsing and ordering to delivery and beyond.
								</p>
							</div>
						</>
					}
				/>

				{/* Why Choose Us section */}
				<section className="choose-us mt-6">
					<HeaderDashed head1="WHY" head2="CHOOSE US" />
					<section style={{display:"flex" , justifyContent: "start" , alignItems: "center" , textAlign: "left" , padding: "10px"}}>
						<ul>
							<li style={{paddingBottom:"10px"}}><strong>Premium Quality Products:</strong> We offer a carefully curated selection of high-quality fragrances, cosmetics, hats, caps, undergarments, and footwear, ensuring style and durability.</li>
							<li style={{paddingBottom:"10px"}}><strong>Affordable Pricing:</strong> Enjoy top-notch products at competitive prices without compromising on quality.</li>
							<li style={{paddingBottom:"10px"}}><strong>Diverse Selection:</strong> Whether you're looking for the perfect fragrance or stylish accessories, our diverse product categories cater to all your fashion and lifestyle needs.</li>
							<li style={{paddingBottom:"10px"}}><strong>Customer-Centric Service:</strong> We prioritize your satisfaction with dedicated customer support and a seamless shopping experience.</li>
							<li style={{paddingBottom:"10px"}}><strong>Secure Shopping:</strong> Shop with confidence, knowing that your transactions are secure and your personal information is protected.</li>
							<li style={{paddingBottom:"10px"}}><strong>Fast & Reliable Delivery:</strong> We ensure timely delivery, so you receive your products quickly and hassle-free.</li>
							<li style={{paddingBottom:"10px"}}><strong>Commitment to Style & Comfort:</strong> We believe in products that not only look good but feel great, ensuring you look and feel your best.</li>
						</ul>
					</section>

					<Features />
					{/* <div className="pros mt-4">
						<div className="row row-gap-4">
						
							<article className="col-12 col-lg-4">
								<div className="text-start border rounded p-4 h-100">
									<h4 className="fs-6 fw-bold">Quality Assurance:</h4>
									<p className="c-mm-gray mb-0 mt-4">
										We meticulously select and vet each product to ensure it meets
										our stringent quality standards.
									</p>
								</div>
							</article>
							<article className="col-12 col-lg-4">
								<div className="text-start border rounded p-4 h-100">
									<h4 className="fs-6 fw-bold">Convenience:</h4>
									<p className="c-mm-gray mb-0 mt-4">
										We meticulously select and vet each product to ensure it meets
										our stringent quality standards.
									</p>
								</div>
							</article>
							<article className="col-12 col-lg-4">
								<div className="text-start border rounded p-4 h-100">
									<h4 className="fs-6 fw-bold">Exceptional Customer Service:</h4>
									<p className="c-mm-gray mb-0 mt-4">
										Our team of dedicated professionals is here to assist you the
										way, ensuring your satisfaction is our top priority.
									</p>
								</div>
							</article>
						</div>
					</div> */}
				</section>

				{/* Subscription form for users */}
				<SubscriptionForm />
			</div>
		</motion.div>
	);
};

export default About;