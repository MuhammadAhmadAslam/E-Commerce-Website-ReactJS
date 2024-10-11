import React, { useState, useEffect } from 'react'
import { doc, deleteDoc, onSnapshot, collection } from "firebase/firestore";
import { db } from '../../Firebase/firebase';
import Swal from 'sweetalert2';

const Tables = ({ data, setData, name }) => {

  console.log(data);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, name), (snapshot) => {
      setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return unsubscribe;
  }, []);

  async function deleteProduct(_id) {
    await deleteDoc(doc(db, name, _id));
    await Swal.fire({
      title: 'Success!',
      text: 'Your Product Has Been Deleted SuccessFully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });

  }
  return (
    <div className="p-4">
      <div className="overflow-x-auto" style={{
        width: "100%",
        backgroundColor: "transparent",
      }}>
        <table className="min-w-full border border-gray-200" style={{
          width: "100%",
          backgroundColor: "transparent"
        }}>
          <thead>
            <tr className="bg-blue-500 text-black" style={{
              backgroundColor: "white",
              marginBottom: "40px"
            }}>
              <th className="py-3 px-4 text-left" >Product Title</th>
              <th className="py-3 px-4 text-left" >Product Price</th>
              <th className="py-3 px-4 text-left" >Product ID</th>
              <th className="py-3 px-4 text-left" >Product Category</th>
              <th className="py-3 px-4 text-left" >Delete Product</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((product) => (
                <tr key={product._id} className="border-b border-gray-200 mt-5" style={{ backgroundColor: "white", marginTop: "10px", color: "black" }}>
                  <td className="py-3 px-4" style={{ color: "black" }}>{product.name}</td>
                  <td className="py-3 px-4"> $ {product.price}</td>
                  <td className="py-3 px-4">
                    {product._id}
                  </td>
                  <td className="py-3 px-4">
                    {product.category}
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => deleteProduct(product._id)}
                      style={{
                        backgroundColor : "goldenrod",
                        padding: "10px",
                        width : "160px",
                        color:"black",
                        border : "none"
                      }}
                          >
                          Delete Product
                    </button>
                </td>
                </tr>

          ))
            }
        </tbody>
      </table>
    </div>
    </div >
  )
}

export default Tables