import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import FiltersSidebar from "../components/FiltersSidebar";
import AllCollections from "../components/AllCollections";
import { ShopContext } from "../context/ShopContext";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

// Dummy Fixed Data:
// import productsData from "../components/FixedData";

const Collection = () => {
	const { productsData, search } = useContext(ShopContext)
	// State to store filtered data based on user selection
	const [filteredData, setFilteredData] = useState([]);

	// Function to filter products based on categories and types
	const filterByData = ({ categories, types }) => {
		let newData = [...productsData];
		if (search !== '') {
			newData = newData.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
		}

		if (categories.length) {
			// Filter by selected categories
			newData = newData.filter(el => categories.includes(el.category));
		}
		if (types.length) {
			// Filter by selected subcategories (types)
			newData = newData.filter(el => types.includes(el.subCategory));
		}
		setFilteredData(newData);
		console.log(newData);
	}

	let arr = []
	let [data, setData] = useState([])

	let gettingData = async () => {
		onSnapshot(collection(db, "All Products"), (snapshot) => {
			snapshot.forEach((doc) => {
				console.log(doc.data());
				arr.push(doc.data())
			});
			setData(arr)
		});
	}
	useEffect(() => {
		gettingData()
	}, [])




	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="collection-page  pt-405"
			style={{width : "100%"}}
		>
			<div>
				<div style={{width: "100%"}} className="div-hae">
					{/* Sidebar with filters */}
					{/* <FiltersSidebar filterByData={filterByData} /> */}

					{/* Display all collections with the fetched data */}
					<div className="col-12 col-md-8 col-lg-9 col-xxl-10 position-relative" style={{minHeight:"70vh" , width: "100%"}}>
						{
							data.length ?
								<AllCollections data={data} />
								:
								<p className="nomatch-msg position-absolute top-50 start-50 fs-3 text-center">There are no data match your choice 🙄</p>
						}

					</div>
					{/* <AllCollections data={data} loading={loading} errorInFetch={errorInFetch} /> */}
				</div>
			</div>
		</motion.div>
	);
};

export default Collection;