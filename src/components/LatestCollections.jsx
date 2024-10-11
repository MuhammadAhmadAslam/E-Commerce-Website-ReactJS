// import HeaderDashed from "./HeaderDashed";
// // import FetchWaitingMsg from "./FetchWaitingMsg";
// // import FetchErrorMsg from "./FetchErrorMsg";
// import CollectionCard from "./CollectionCard";
// import { ShopContext } from "../context/ShopContext";
// import { memo, useContext, useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../Firebase/firebase";

// const LatestCollections = () => {
// 	// const {productsData} = useContext(ShopContext);
// 	// console.log(productsData);

// 	let [productsData , setProductData] = useState([])
// 	let array = []
// 	let gettingData = async () => {
// 		const querySnapshot = await getDocs(collection(db, "Latest Products"));
// 		querySnapshot.forEach((doc) => {
// 			array.push(doc.data())
// 			console.log(doc.id, " => ", doc.data());
// 		});
// 		setProductData(array)
// 	}
// 	useEffect(() => gettingData() , [])

// 	return (
// 		<section className="latest-collections mt-6">
// 			{/* Header with title and description */}
// 			<HeaderDashed
// 				head1="LATEST"
// 				head2="COLLECTIONS"
// 				paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
// 			/>
// 			<main className="d-flex row-gap-3 flex-wrap mt-5">
// 				{/* Conditional rendering based on loading and error states */}
// 				{
// 					// loading ? (
// 					// 	<FetchWaitingMsg />
// 					// ) : errorInFetch ? (
// 					// 	<FetchErrorMsg />
// 					// ) : (
// 					// Sort data by id and display the first 10 items
// 					productsData.sort((a, b) => {
// 						a = a.date;
// 						b = b.date;
// 						return b - a
// 					}).slice(0, 10).map((product) => (
// 						<CollectionCard key={product._id} data={product} />
// 					))
// 					// )
// 				}
// 			</main>
// 		</section>
// 	);
// };

// export default memo(LatestCollections);


import HeaderDashed from "./HeaderDashed";
import CollectionCard from "./CollectionCard";
import { useState, useEffect, memo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

const LatestCollections = () => {
    const [productsData, setProductData] = useState([]);
    
    const gettingData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Latest Products"));
            const productArray = [];
            querySnapshot.forEach((doc) => {
                productArray.push({ ...doc.data(), id: doc.id }); // Use doc.id as the key
            });
            setProductData(productArray);
        } catch (error) {
            console.error("Error fetching latest products: ", error);
        }
    };

    useEffect(() => {
        gettingData();
    }, []);

    return (
        <section className="latest-collections mt-6">
            {/* Header with title and description */}
            <HeaderDashed
                head1="LATEST"
                head2="COLLECTIONS"
                paragraph="Discover the Newest Trends and Timeless Classics"
            />
            <main className="d-flex row-gap-3 flex-wrap mt-5" style={{justifyContent: "center" , alignItems: "center"}}>
                {/* Conditional rendering based on data */}
                {productsData.length > 0 ? (
                    productsData
                        .sort((a, b) => {
                            // Ensure date exists before sorting, otherwise use a default value (0)
                            const dateA = a.date ? new Date(a.date) : 0;
                            const dateB = b.date ? new Date(b.date) : 0;
                            return dateB - dateA;
                        })
                        .slice(0, 10) // Limit to 10 items
                        .map((product) => (
                            <CollectionCard key={product.id} data={product} />
                        ))
                ) : (
                    <p>No latest collections available at the moment.</p>
                )}
            </main>
        </section>
    );
};

export default memo(LatestCollections);
