import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
// Import Tooltip directly from Bootstrap
import { Tooltip } from "bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
	const [currentYear, setCurrentYear] = useState(null);

	// Set the current year
	const getCurrentYear = () => {
		const dateNow = new Date();
		setCurrentYear(dateNow.getFullYear());
	};

	useEffect(() => {
		// Initialize Bootstrap tooltips
		const tooltipTriggerList = document.querySelectorAll(
			'[data-bs-toggle="tooltip"]'
		);
		const tooltipList = [...tooltipTriggerList].map(
			(tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
		);

		getCurrentYear();

		// Cleanup tooltips on component unmount
		return () => {
			tooltipList.forEach((tooltip) => tooltip.dispose());
		};
	}, []);

	return (
		<footer className="mt-5 sec-padd" id="footer" style={{ backgroundColor: "black", color: "white" }}>
			<div className="container d-flex flex-wrap">
				<main className="col-12">
					<div className="row row-gap-5">
						{/* Logo and Description */}
						<article className="col-12 col-lg-6 text-center">
							<Link to="/" className="logo text-decoration-none text-dark">
								<h3 className="fs-3 mb-0" style={{
									WebkitTextFillColor: "transparent",
									backgroundImage: "linear-gradient(270deg, #fff09e, #c3812a, #fff09e, #c3812a)",
									WebkitBackgroundClip: "text",
									backgroundClip: "text"
								}}>
									E-Commerce  <span className="fw-medium">Shop</span>
								</h3>
							</Link>
							<p className="mt-3">
							At Our Store, we believe in providing high-quality products that enhance your lifestyle. From fragrance to footwear, we’ve got you covered. Stay stylish, stay confident!
							</p>
						</article>

						{/* Social Links */}
						<div className="social col-12 col-lg text-center">
							<h3 style={{
								WebkitTextFillColor: "transparent",
								backgroundImage: "linear-gradient(270deg, #fff09e, #c3812a, #fff09e, #c3812a)",
								WebkitBackgroundClip: "text",
								backgroundClip: "text"
							}}>COMPANY</h3>
							<ul className="ps-0 mt-3" style={{
								WebkitTextFillColor: "transparent",
								backgroundImage: "linear-gradient(270deg, #fff09e, #c3812a, #fff09e, #c3812a)",
								WebkitBackgroundClip: "text",
								backgroundClip: "text"
							}}>
								<li>
									<NavLink
										to="/"
										className="text-decoration-none c-gray d-inline-block p-1 px-5 nav-link-hovers"
										style={{
											WebkitTextFillColor: "transparent",
											backgroundImage: "linear-gradient(270deg, #fff09e, #c3812a, #fff09e, #c3812a)",
											WebkitBackgroundClip: "text",
											backgroundClip: "text"
										}}
									>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/about"
										className="text-decoration-none c-gray d-inline-block p-1 px-5"
									>
										About us
									</NavLink>
								</li>
								<li className="c-gray p-1">Delivery</li>
								<li className="c-gray p-1">Privacy Policy</li>
							</ul>
						</div>

						{/* Contact Information */}
						<div className="address col-12 col-lg text-center">
							<h3 className="mb-3" style={{
								WebkitTextFillColor: "transparent",
								backgroundImage: "linear-gradient(270deg, #fff09e, #c3812a, #fff09e, #c3812a)",
								WebkitBackgroundClip: "text",
								backgroundClip: "text"
							}}>GET IN TOUCH</h3>
							<ul className="d-flex flex-column align-items-center align-items-lg-start ps-0 gap-2">
								<li className="nav-link-hover" style={{
									color: "white",
									textDecoration: "none",
									paddingBottom: "10px",
									marginBottom: "2px"
								}}>+1-000-000-0000</li>
								<li style={{
									color: "white",
									textDecoration: "none",
									paddingBottom: "10px",
									marginBottom: "2px"
								}}>
									<a
										className="nav-link-hover"
										style={{
											color: "white",
											textDecoration: "none",
											paddingBottom: "10px",
											marginBottom: "2px"
										}}
										href="mailto:demo@gmail.com"
										title="get in touch"
									>
										demo@gmail.com
									</a>
								</li>
								<li style={{
									color: "white",
									textDecoration: "none",
									paddingBottom: "10px",
									marginBottom: "2px"
								}}>
									<a
										href="#"
										target="_blank"
										title="Go To Facebook"
										className=""
										style={{
											color: "#1877F2",
											textDecoration: "none",
											paddingBottom: "10px",
											marginBottom: "2px",
											fontSize: "28px"
										}}
									>
										<FaFacebook />
									</a>
									<a
										href="#"
										target="_blank"
										title="Go To Instagram"
										style={{
											textDecoration: "none",
											paddingBottom: "10px",
											marginBottom: "2px",
											fontSize: "28px"
										}}
									>
										<span
											style={{
												backgroundColor: "linear-gradient(to right, #feda75, #fa7e1e, #f56040, #fd1d1d, #833ab4)",
												padding: "10px", // add some padding to see the gradient effect
												borderRadius: "5px" // add some border radius to see the gradient effect
											}}
										>
											<FaInstagram style={{ color: "green" }} />
										</span>
									</a>
									<a
										href="#"
										target="_blank"
										title="Go To Facebook"
										className=""
										style={{
											color: "white",
											textDecoration: "none",
											paddingBottom: "10px",
											marginBottom: "2px",
											fontSize: "28px"
										}}
									>
										<FaSquareXTwitter />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</main>

				{/* Copyright Information */}
				<div className="copyrights border-t-gray mt-5 pt-4 col-12 text-center text-white">
					Copyright @{currentYear}
					<a
						href="#"
						target="_blank"
						className="text-decoration-none c-black p-2 fw-bold"
						style={{
							WebkitTextFillColor: "transparent",
							backgroundImage: "linear-gradient(270deg, #fff09e, #c3812a, #fff09e, #c3812a)",
							WebkitBackgroundClip: "text",
							backgroundClip: "text"
						}}
						data-bs-toggle="tooltip"
						data-bs-placement="top"
					>
						Ahmed
					</a>
					- All Rights Reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
