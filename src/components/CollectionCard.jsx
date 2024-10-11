import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Image } from "antd";


const CollectionCard = ({ data: { _id, images, name, price, collectionName }, classPadding }) => {
	const navigate = useNavigate();   // Hook to programmatically navigate to product details
	const { currency } = useContext(ShopContext)


	return (
		<Link
			className={`collection-card trans-3 p-2 border-0 card box-shadow-gray cursor ${classPadding}`}
			to={`/products/${_id}/${collectionName}`}
			onClick={() => navigate(`/products/${_id}/${collectionName}`)}                // Navigate to product details on click
			data-aos={"fade-up"}
			style={{ color: "#0D6DB7", textDecoration: "none", height: "300px", marginBottom: "15px" }}
		>
			<figure className="overflow-hidden rounded" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Image
					src={images[0]}
					alt={name}
					className="card-img rounded  trans-3 img-scall"
					style={{ height: "200px" }}
				/>
			</figure>
			<article className="card-body text-start p-0">
				<h4 className="card-title fs-6 c-gray fw-normal" style={{ color: "#0D6DB7" , paddingLeft: "10px"}}>{name}</h4>
				<div className="price fw-bold fs-small c-d-gray" style={{paddingLeft: "10px"}}>{price}{currency}</div>
			</article>
		</Link>
	);
};

export default CollectionCard;
