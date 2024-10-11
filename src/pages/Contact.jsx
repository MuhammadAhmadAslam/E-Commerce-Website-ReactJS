import { motion } from "framer-motion";
import mainImg from "../assets/contact_img.webp";
import DescribedImage from "../components/DescribedImage";
import SubscriptionForm from "../components/SubscriptionForm";
import HeaderDashed from "../components/HeaderDashed";
import Features from "../components/Features";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="contact-page text-center py-3 pt-5"
		>
			<div className="container">
				{/* Header with dashed style */}
				<HeaderDashed head1="CONTACT" head2="US" classStyle="fw-normal fs-3" />

				{/* Described Image Section */}
				<DescribedImage
					img={mainImg}
					imgTitle="desk image"
					styleInLarge="justify-content-center column-gap-xl-4"
					styleImg="col-xl-5"
					styleText="col-xl-5"
					sideText={
						<>
							{/* Store Information */}
							<div className="our-store">
								<h3 className="c-d-gray" style={{
									WebkitTextFillColor: "transparent",
									backgroundImage: "linear-gradient(270deg, #fff09e, #c3812a, #fff09e, #c3812a)",
									WebkitBackgroundClip: "text",
									backgroundClip: "text"
								}}>Our Store</h3>
								<address className="my-4 text-black">
									<span>54709 Willms Station</span>
									<br />
									<span>Suite 350, Washington, USA</span>
								</address>
								<div className="telephone text-black">
									Tel: (415) 555-0132
									<br />
									Email: admin@-shop.com
								</div>
							</div>
							{/* Careers Information */}
							<div className="careers mt-5">
								<h4 className="c-d-gray">Careers at E-Commerce Shop</h4>
								<span className="d-block my-4 text-black">
									Learn more about our teams and job openings.
								</span>
								<Link style={{
									WebkitTextFillColor: "transparent",
									backgroundImage: "linear-gradient(270deg, #fff09e, #c3812a, #fff09e, #c3812a)",
									WebkitBackgroundClip: "text",
									backgroundClip: "text",
									border: "1px solid black",
									paddingLeft: "20px",
									paddingRight: "20px",
									paddingTop: "7px",
									paddingBottom: "7px"
								}}
								to={'/collection'}>
									Explore Products
								</Link>
							</div>
						</>
					}
				/>

				{/* Subscription Form */}
				<SubscriptionForm />

				<Features />
			</div>
		</motion.div>
	);
};

export default Contact;
