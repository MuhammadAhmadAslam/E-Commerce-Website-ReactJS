import React from 'react'

const OrderDetail = ({ data, setOrder }) => {
       console.log(data);

       return (
              <div className="p-4">
                     <div className="overflow-x-auto" style={{
                            width: "100%",
                            backgroundColor: "transparent",
                     }}>
                            {
                                   data.map((product) => (

                                          <details style={{ backgroundColor: "white", fontSize: "25px", marginTop: "10px", padding: "10px" }}>
                                                 <summary>{product.firstName} Ordered</summary>
                                                 <p style={{ paddingLeft: "10px" }}>Name : {product.firstName}</p>
                                                 <p style={{ paddingLeft: "10px" }}>Last Name : {product.LastName}</p>
                                                 <p style={{ paddingLeft: "10px" }}>Phone Number : {product.phoneNumber}</p>
                                                 <p style={{ paddingLeft: "10px" }}>Email Address : {product.emailAddress}</p>
                                                 <p style={{ paddingLeft: "10px" }}>Address1 : {product.Address1}</p>
                                                 <p style={{ paddingLeft: "10px" }}>Address2 : {product.Address2}</p>
                                                 <p style={{ paddingLeft: "10px" }}>City : {product.city}</p>
                                                 <p style={{ paddingLeft: "10px" }}>Country : {product.Country}</p>
                                                 <p style={{ paddingLeft: "10px" }}>State : {product.state}</p>
                                                 <details>
                                                        <summary>Show Products</summary>
                                                        {
                                                               product.cartItems.map((data , index) => (
                                                                     <p>Product {index + 1} : {data.name} <br /> Qunatity : {data.quantity}</p>
                                                               ))
                                                        }
                                                 </details>
                                                 <p>Total Amount : $ {product.TotalAmount}</p>
                                          </details>
                                   ))
                            }
                     </div>
              </div>
       )
}

export default OrderDetail