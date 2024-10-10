import { useParams } from "react-router-dom"
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import FiltersSidebar from "../components/FiltersSidebar";
import AllCollections from "../components/AllCollections";
import { ShopContext } from "../context/ShopContext";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
const SingleCategoryDetail = () => {
       let { productName } = useParams()

       const { productsData, search } = useContext(ShopContext)
       // State to store filtered data based on user selection
       const [filteredData, setFilteredData] = useState([]);

       let [product, setProduct] = useState([])
       // Function to filter products based on categories and types
       
       let arr = []
       let fetchingData = async () => {
              onSnapshot(collection(db, productName), (snapshot) => {
                     snapshot.forEach((doc) => {
                            console.log(doc.data())
                            arr.push(doc.data())
                     })
                     setProduct(arr)
              })
       }
       
       const filterByData = async ({ categories, types }) => {
              let newData =  [...product];
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
       console.log(product , "product");
       

       useEffect(() => {
              fetchingData()
       }, [])
       return (
              <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="collection-page py-3 pt-405"
              >
                     <div className="mx-auto">
                            <div className="row row-gap-4">
                                   {/* Sidebar with filters */}
                                   {/* <FiltersSidebar filterByData={filterByData} /> */}

                                   {/* Display all collections with the fetched data */}
                                   <div className="col-12 col-md-8 col-lg-9 col-xxl-10 position-relative">
                                          {
                                   product.length?
                                   <AllCollections data={product} />
                                   :
                                   <div style={{display: "flex" , width: "100%" , justifyContent: "center", alignItems:"center" , height:"90vh"}}>
                                   <p className="text-center" style={{fontSize : "35px"}}>There are no data match your choice 🙄</p>
                                   </div>
                            }

                                   </div>
                                   {/* <AllCollections data={data} loading={loading} errorInFetch={errorInFetch} /> */}
                            </div>
                     </div>
              </motion.div>
       )
}
export default SingleCategoryDetail