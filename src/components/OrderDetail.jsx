import React from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';

const OrderDetail = ({ data , showButton , setOrder}) => {
  console.log(showButton);
  

  const setShipped = async (productId) => {
    try {
      console.log("Product ID: ", productId);
      if (!productId) {
        console.error("Product ID is undefined");
        return;
      }
      const docRef = doc(db, "Orders", productId);  
      await updateDoc(docRef, { orderStatus: 'shipped' });
      setOrder((prevOrders) => prevOrders.filter(order => order._id !== productId));
      console.log("Order status updated to 'shipped' for document ID: ", productId);
      window.location.reload()
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }

  return (
    <div className="p-4">
      <div className="overflow-x-auto" style={{
        width: "100%",
        backgroundColor: "transparent",
      }}>
        {
          data.map((product) => {
            // Log the product to inspect its structure
            console.log("Product: ", product);

            return (
              <div key={product._id || product.id} style={{ display: "flex", marginTop: "20px", backgroundColor: "white", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                <details style={{ backgroundColor: "white", fontSize: "25px", marginTop: "10px", width: "70%" }}>
                  <summary>{product.firstName} Ordered ({product.date} )</summary>
                  <p>Name : {product.firstName}</p>
                  <p>Last Name : {product.LastName}</p>
                  <p>Phone Number : {product.phoneNumber}</p>
                  <p>Email Address : {product.emailAddress}</p>
                  <p>Address1 : {product.Address1}</p>
                  <p>Address2 : {product.Address2}</p>
                  <p>Date : {product.date}</p>
                  <p>Time : {product.time}</p>
                  <p>City : {product.city}</p>
                  <p>Country : {product.Country}</p>
                  <p>State : {product.state}</p>
                  <details>
                    <summary>Show Products</summary>
                    {
                      product.cartItems.map((item, index) => (
                        <p key={index}>Product {index + 1} : {item.name} <br /> Quantity : {item.quantity}</p>
                      ))
                    }
                  </details>
                  <p>Total Amount : $ {product.TotalAmount}</p>
                </details>
                {
                     showButton ? 
                <button 
                  onClick={() => setShipped(product._id || product.id)}  // Use the correct key for product ID
                  style={{ width: "190px", backgroundColor: "goldenrod", color: "white", height: "50px"  ,  border: "none", marginTop: "20px", marginBottom: "20px" }}
                >
                  Mark As Shipped
                </button>
                : null
                }
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default OrderDetail;
