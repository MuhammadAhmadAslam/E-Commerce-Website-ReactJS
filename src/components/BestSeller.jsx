// import { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import HeaderDashed from "./HeaderDashed";
// import CollectionCard from "./CollectionCard";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../Firebase/firebase";

// const BestSeller = () => {
// 	// const { productsData } = useContext(ShopContext);
// 	let [productsData , setProductData] = useState([])
// 	let array = []
// 	let gettingData = async () => {
// 		const querySnapshot = await getDocs(collection(db, "Trending Products"));
// 		querySnapshot.forEach((doc) => {
// 			array.push(doc.data())
// 			console.log(doc.id, " => ", doc.data());
// 		});
// 		setProductData(array)
// 	}
// 	useEffect(() => gettingData() , [])

// 	return (
// 		<div className="best-seller py-5">
// 			<HeaderDashed
// 				head1="Trending "
// 				head2="Products"
// 				paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio"
// 			/>
// 			<section>
//                 <div className="row justify-content-center">
// 				{productsData.map((product) => (
//                     <div key={product._id} className="col-6 col-md-4 col-lg-3 col-xl mt-3" style={{maxWidth: '350px'}}>
//                         <CollectionCard data={product} classPadding="px-0" />
//                     </div>
// 				))}
//                 </div>
// 			</section>
// 		</div>
// 	);
// };

// export default BestSeller;


import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import HeaderDashed from "./HeaderDashed";
import CollectionCard from "./CollectionCard";

const BestSeller = () => {
    const [productsData, setProductData] = useState([]);
    
    const gettingData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Trending Products"));
            const productArray = [];
            querySnapshot.forEach((doc) => {
                productArray.push({ ...doc.data(), id: doc.id }); // Using doc.id instead of product._id
            });
            setProductData(productArray);
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    };

    useEffect(() => {
        gettingData();
    }, []);

    return (
        <div className="best-seller py-5">
            <HeaderDashed
                head1="Trending "
                head2="Products"
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio"
            />
            <section>
                <div className="row justify-content-center">
                    {productsData.length > 0 ? (
                        productsData.map((product) => (
                            <div key={product.id} className="col-6 col-md-4 col-lg-3 col-xl mt-3" style={{maxWidth: '350px'}}>
                                <CollectionCard data={product} classPadding="px-0" />
                            </div>
                        ))
                    ) : (
                        <p>No trending products available right now.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default BestSeller;
