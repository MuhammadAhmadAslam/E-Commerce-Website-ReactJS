const HeaderDashed = ({ head1, head2, paragraph, classStyle }) => {
	return (
		<header id="section-header" className="text-capitalize">
			<h2 className={`d-flex gap-1 gap-sm-2 align-items-center justify-content-center ${classStyle}`}>
				<span className="text-black">{head1}</span>{" "}
				<span style={{
					WebkitTextFillColor: "transparent",
					backgroundImage: "linear-gradient(270deg, #fff09e, #c3812a, #fff09e, #c3812a)",
					WebkitBackgroundClip: "text",
					backgroundClip: "text"
				}}>{head2}</span>{" "}
				<span className="line-span wd-40 ms-1"></span>
			</h2>
			{paragraph && <p className="c-gray px-3 fs-small">{paragraph}</p>}

		</header>
	);
};

export default HeaderDashed;
