import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import AddProductModal from '../components/AddProductModal';
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../../Firebase/firebase';
export default function Dashboard() {

  const [isAddProductModalVisible, setAddProductModalVisible] = useState(false);

  const showAddProductModal = () => {
    setAddProductModalVisible(true);
  };

  const handleModalClose = () => {
    setAddProductModalVisible(false);
  };

  let [allProductLength , setAllProductLength] = useState(0)
  let [allLatestLength , setAllLatestLength] = useState(0)

  let gettingAllProduct = async  () => {
    onSnapshot(collection(db, "All Products"), (snapshot) => {
      console.log(`Collection document length: ${snapshot.size}`);
      setAllProductLength(snapshot.size)
      snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    });
  }


  let getingLatestProduct = async  () => {
    onSnapshot(collection(db, "Latest Products"), (snapshot) => {
      console.log(`Collection document length: ${snapshot.size}`);
      setAllLatestLength(snapshot.size)
      snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    });
  }

  useEffect(() => {
    gettingAllProduct()
    getingLatestProduct()
  } , [])

  return (
    <div className="row g-4 d-flex justify-content-center align-items-center mt-5" style={{display : "flex" , justifyContent : "center", alignItems : "center"}}>
      <Link to={"/dashboard/admin/products"}  className="col-md-4 col-sm-6" style={{textDecoration: "none"}}>
        <div className="bg-primary text-white p-4 rounded shadow">
          <h2 className="display-4">{allProductLength}</h2>
          <p>All Products</p>
        </div>
      </Link>
      <Link  to={"/dashboard/admin/pending-orders"}  className="col-md-4 col-sm-6" style={{textDecoration: "none"}}>
        <div className="bg-secondary text-white p-4 rounded shadow">
          <h2 className="display-4">0</h2>
          <p>Pending Orders</p>
        </div>
      </Link>
      <Link to={"/dashboard/admin/completed-orders"}  className="col-md-4 col-sm-6" style={{textDecoration: "none"}}>
        <div className="bg-success text-white p-4 rounded shadow">
          <h2 className="display-4">0</h2>
          <p>Completed Orders</p>
        </div>
      </Link>
      <Link to={"/dashboard/admin/latest-products"}  className="col-md-4 col-sm-6" style={{textDecoration: "none"}}>
        <div className="bg-success text-white p-4 rounded shadow">
          <h2 className="display-4">{allLatestLength}</h2>
          <p>Latest Products</p>
        </div>
      </Link>
      <Link to={"/dashboard/admin/trending-products"}  className="col-md-4 col-sm-6" style={{textDecoration: "none"}}>
        <div className="bg-primary text-white p-4 rounded shadow">
          <h2 className="display-4">0</h2>
          <p>Trending Products</p>
        </div>
      </Link>
      <div  onClick={showAddProductModal}  className="col-md-4 col-sm-6" style={{textDecoration: "none"}}>
        <div className="bg-secondary text-white p-4 rounded shadow">
          <h2 className="display-4">Product</h2>
          <p>Add Products</p>
        </div>
      </div>

      <AddProductModal 
        isVisible={isAddProductModalVisible} 
        onClose={handleModalClose} 
      />
    </div>
  );
}
