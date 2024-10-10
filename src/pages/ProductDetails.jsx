// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "boxicons/css/boxicons.min.css";
// import CollectionCard from "../components/CollectionCard";
// import HeaderDashed from "../components/HeaderDashed";
// // import FetchErrorMsg from "../components/FetchErrorMsg";
// import FetchWaitingMsg from "../components/FetchWaitingMsg";
// import { motion } from "framer-motion";
// import { ShopContext } from "../context/ShopContext";
// import { Image } from "antd";
// import { CartContext } from "../context/CartContext";
// import { arrayRemove, doc, getDoc } from "firebase/firestore";
// import { db } from "../../Firebase/firebase";
// import { StarFilled } from "@ant-design/icons";
// import { collection, getDocs } from "firebase/firestore";

// const ProductDetails = () => {
// 	const { productId, collectionName } = useParams();
// 	const { productsData } = useContext(ShopContext);

// 	console.log(collectionName, "collection name");
// 	console.log(productId, "product Id");



// 	const [productData, setProductData] = useState(null);
// 	const [loading, setLoading] = useState(true);
// 	// const [fetchingError, setFetchingError] = useState(null);
// 	const [activeSize, setActiveSize] = useState(null);
// 	const [activeImage, setActiveImage] = useState(0);
// 	// const [allFetchedData, setAllFetchedData] = useState([]);

// 	let gettingData = async () => {
// 		const docRef = doc(db, collectionName, productId);
// 		const docSnap = await getDoc(docRef);

// 		if (docSnap.exists()) {
// 			console.log("Document data:", docSnap.data());
// 			setProductData(docSnap.data())
// 		} else {
// 			// docSnap.data() will be undefined in this case
// 			console.log("No such document!");
// 		}
// 		setLoading(false)
// 	}

// 	useEffect(() => {
// 		gettingData()
// 	}, [productId, productsData]);


// let [relatedProduct , setRelatedProduct] = useState([])


// 	// Function to find related products based on category
// 	let array = []
// 	const findRelatedProducts = async () => {
// 		if (!productData || !productsData.length) {
// 			return <h1 className="text-center my-5">Loading...</h1>;
// 		}
// 		const relatedProducts = await getDocs(collection(db, collectionName));
// 		relatedProducts.forEach((doc) => {
// 			array.push(doc.data())
// 		});
// 		setRelatedProduct(array)




// 		return (
// 			<main className="d-flex row-gap-3 flex-wrap mt-4">
// 				{relatedProduct.slice(0, 5).map((pro, i) => {
// 					return <CollectionCard key={i} data={pro} />
// 				})}
// 			</main>
// 		)
// 	};

// 	console.log(relatedProduct.slice(0 , 5) , "related product");

// 	let { addItemToCart, isItemAdded, cartItems } = useContext(CartContext)

// 	console.log(cartItems, "cart items");

// 	let random = Math.floor(Math.random() * 6)


// 	useEffect(() => {
// 		findRelatedProducts()
// 	} , [])

// 	console.log(productData);

// 	return (

// 		<motion.section
// 			initial={{ opacity: 0 }}
// 			animate={{ opacity: 1 }}
// 			exit={{ opacity: 0 }}
// 			className="product-details overflow-hidden"
// 		>
// 			{loading ? (
// 				<FetchWaitingMsg />
// 			)
// 				: (
// 					<div className="container mt-5">
// 						<main className="product-wrapper d-flex gap-3 gap-lg-5 flex-wrap align-items-start">
// 							{/* Product Images */}
// 							<figure className="d-flex flex-column flex-sm-row-reverse row-gap-3 column-gap-2 col-12 col-sm justify-content-sm-between">
// 								<Image
// 									style={{ maxHeight: "390px" }}
// 									src={`${productData.images[0]}`}
// 									className="col-12 col-sm-9"
// 									alt={productData.name}
// 								/>
// 								<div className="samples col-2 col-sm d-flex flex-sm-column gap-1">
// 									{productData.images.map((img, i) => (
// 										<Image
// 											src={`${img}`}
// 											className={`w-100 trans-3 preview-img ${activeImage === i ? "active" : ""
// 												}`}
// 											alt={productData.name}
// 											key={i}
// 											role="button"
// 											onMouseOver={() => setActiveImage(i)}
// 										/>
// 									))}
// 								</div>
// 							</figure>
// 							{/* Product Info */}
// 							<article className="col-12 col-sm col-lg-8 mb-3">
// 								<strong className="mt-3 mrt-0 fs-2"> {productData.name}</strong>
// 								{/* Product Rating */}
// 								<div className="rating">
// 									<div className="stars mb-3">
// 										{
// 											random * <StarFilled style={{ color: "green" }} />
// 										}
// 										<span className="ms-2">({productData.reviews})</span>
// 									</div>
// 									<span className="fw-bold fs-2 d-block mb-3">
// 										&#x24;{productData.price}
// 									</span>
// 								</div>
// 								{/* Product Description */}
// 								<em className="c-gray">{productData.description}</em>
// 								{/* Select Size */}
// 								<br />
// 								{/* Add to Cart Button */}
// 								<button onClick={() => addItemToCart(productData)} disabled={isItemAdded(productData._id) ? true : false} className="addcart-btn btn rounded-0 bg-black  c-white mt-4 trans-3 mb-2 py-2 px-4" style={{ color: "linear-gradient(270deg, #fff09e, #c3812a, #fff09e, #c3812a)", cursor: "pointer" }}>
// 									{
// 										isItemAdded(productData._id) ? "Added" : "Add To Cart"
// 									}
// 								</button>
// 								{/* Product Description and Reviews */}
// 								<ul className="features ps-0 mt-4 border-top pt-3">
// 									<li className="mb-1"><strong>100% Original product.</strong></li>
// 									<li className="mb-1">
// 										<strong>Cash on delivery is available on this product.</strong>
// 									</li>
// 									<li className="mb-1">
// 										<strong>Easy return and exchange policy within 7 days.</strong>
// 									</li>
// 								</ul>
// 							</article>
// 						</main>
// 						{/* Product Description and Reviews */}
// 						<article className="description d-flex flex-column mt-6 mb-6">
// 							<ul className="d-flex ps-0 mb-0">
// 								<li className="py-2 px-4 border-gray fw-bold border-bottom-0 active">
// 									Description
// 								</li>
// 								<li className="py-2 px-4 border-gray border-start-0 border-bottom-0">
// 									Reviews ({productData.reviews})
// 								</li>
// 							</ul>
// 							<div className="description-text border-gray p-3 c-gray">
// 								{productData.description}
// 							</div>
// 						</article>
// 						{/* Related Products */}
// 						<div className="related-products  mt-5">
// 							<HeaderDashed
// 								head1="RELATED"
// 								head2="PRODUCTS"
// 								classStyle="mt-5 mb-3"
// 							/>
// 							{findRelatedProducts()}
// 						</div>
// 					</div>
// 				)}
// 		</motion.section>
// 	)
// };

// export default ProductDetails;


import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import CollectionCard from "../components/CollectionCard";
import HeaderDashed from "../components/HeaderDashed";
import FetchWaitingMsg from "../components/FetchWaitingMsg";
import { motion } from "framer-motion";
import { ShopContext } from "../context/ShopContext";
import { Image } from "antd";
import { CartContext } from "../context/CartContext";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { StarFilled } from "@ant-design/icons";

const ProductDetails = () => {
	const { productId, collectionName } = useParams();
	const { productsData } = useContext(ShopContext);

	const [productData, setProductData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [activeImage, setActiveImage] = useState(0);
	const [relatedProducts, setRelatedProducts] = useState([]);

	const { addItemToCart, isItemAdded } = useContext(CartContext);

	// Fetch product details
	const fetchProductData = async () => {
		const docRef = doc(db, collectionName, productId);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			setProductData(docSnap.data());
		} else {
			console.log("No such document!");
		}
		setLoading(false);
	};

	// Fetch related products
	const fetchRelatedProducts = async () => {
		if (!productData) return;

		try {
			const relatedProductsSnap = await getDocs(collection(db, collectionName));
			let related = [];
			relatedProductsSnap.forEach((doc) => {
				related.push(doc.data());
			});

			// Set only first 5 related products (or less if fewer exist)
			setRelatedProducts(related.slice(0, 5));
		} catch (error) {
			console.error("Error fetching related products:", error);
		}
	};

	useEffect(() => {
		fetchProductData();
	}, [productId, productsData]);

	useEffect(() => {
		if (productData) {
			fetchRelatedProducts();
		}
	}, [productData]);

	if (loading) {
		return <FetchWaitingMsg />;
	}

	let random = Math.floor(Math.random() * 6);

	return (

		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="product-details overflow-hidden"
		>
			<div className="container mt-5">
				<main className="product-wrapper d-flex gap-3 gap-lg-5 flex-wrap align-items-start">
					{/* Product Images */}
					<figure className="d-flex flex-column flex-sm-row-reverse row-gap-3 column-gap-2 col-12 col-sm justify-content-sm-between">
						<Image
							style={{ maxHeight: "390px" }}
							src={`${productData.images[0]}`}
							className="col-12 col-sm-9"
							alt={productData.name}
						/>
						<div className="samples col-2 col-sm d-flex flex-sm-column gap-1">
							{productData.images.map((img, i) => (
								<Image
									src={`${img}`}
									className={`w-100 trans-3 preview-img ${activeImage === i ? "active" : ""
										}`}
									alt={productData.name}
									key={i}
									role="button"
									onMouseOver={() => setActiveImage(i)}
								/>
							))}
						</div>
					</figure>
					{/* Product Info */}
					<article className="col-12 col-sm col-lg-8 mb-3">
						<strong className="mt-3 mrt-0 fs-2"> {productData.name}</strong>
						{/* Product Rating */}
						<div className="rating">
							<div className="stars mb-3">
								{[...Array(random)].map((_, i) => (
									<StarFilled key={i} style={{ color: "green" }} />
								))}
								<span className="ms-2">({productData.reviews})</span>
							</div>
							<span className="fw-bold fs-2 d-block mb-3">
								&#x24;{productData.price}
							</span>
						</div>
						{/* Product Description */}
						<em className="c-gray">{productData.description}</em>
						{/* Select Size */}
						<br />
						{/* Add to Cart Button */}
						<button onClick={() => addItemToCart(productData)} disabled={isItemAdded(productData._id) ? true : false} className="addcart-btn btn rounded-0 bg-black  c-white mt-4 trans-3 mb-2 py-2 px-4" style={{ color: "linear-gradient(270deg, #fff09e, #c3812a, #fff09e, #c3812a)", cursor: "pointer" }}>
							{
								isItemAdded(productData._id) ? "Added" : "Add To Cart"
							}
						</button>
						{/* Product Description and Reviews */}
						<ul className="features ps-0 mt-4 border-top pt-3">
							<li className="mb-1"><strong>100% Original product.</strong></li>
							<li className="mb-1">
								<strong>Cash on delivery is available on this product.</strong>
							</li>
							<li className="mb-1">
								<strong>Easy return and exchange policy within 7 days.</strong>
							</li>
						</ul>
					</article>
				</main>
				{/* Product Description and Reviews */}
				<article className="description d-flex flex-column mt-6 mb-6">
					<ul className="d-flex ps-0 mb-0">
						<li className="py-2 px-4 border-gray fw-bold border-bottom-0 active">
							Description
						</li>
						<li className="py-2 px-4 border-gray border-start-0 border-bottom-0">
							Reviews ({productData.reviews})
						</li>
					</ul>
					<div className="description-text border-gray p-3 c-gray">
						{productData.description}
					</div>
				</article>
				{/* Related Products */}


				<div className="related-products mt-5">
					<HeaderDashed head1="RELATED" head2="PRODUCTS" classStyle="mt-5 mb-3" />
					<main className="d-flex row-gap-3 flex-wrap mt-4">
						{relatedProducts.map((pro, i) => (
							<CollectionCard key={i} data={pro} />
						))}
					</main>
				</div>
			</div>
		</motion.section>
	);
};

export default ProductDetails;
