import { useState } from "react";

const SubscriptionForm = () => {
	const [emailValue, setEmailValue] = useState('');

	const handleForm = (e) => {
		e.preventDefault();
		console.log('subecibed sucessfully');
		setEmailValue('')
	}

	return (
		<section id="subscription-form" className="sec-padd">
			<div className="container d-flex flex-column gap-3">
				{/* Section Title */}
				<h3>Subscribe now & get 20% off</h3>

				{/* Description */}
				<p className="c-gray fs-small">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</p>

				{/* Subscription Form */}
				<form className="form d-flex" onSubmit={handleForm}>
					<input
						type="email"
						className="col-8 col-sm-9 px-3 border-gray outline-0"
						placeholder="Enter Your Email"
						onChange={(e) => setEmailValue(e.target.value)}
						value={emailValue}
						required
					/>
					{/* <button className="btn rounded-0 py-203 bg-black c-white col-4 col-sm-3 fs-tiny" onClick={handleForm}> */}
					<button
						style={{
							background: "linear-gradient(270deg, #fff09e, #c3812a, #fff09e, #c3812a)",
							border: "none",
							color: "black",
							borderRadius: "5px",
							padding: "10px 20px"
						}}
						className="rounded-0 py-203 col-4 col-sm-3 fs-tiny"
					>
						SUBSCRIBE
					</button>
				</form>
			</div>
		</section>
	);
};

export default SubscriptionForm;
