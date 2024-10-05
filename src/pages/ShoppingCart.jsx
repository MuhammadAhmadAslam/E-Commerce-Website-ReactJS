import React, { useContext , useState } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { Button, Image } from "antd";
import { DeleteOutlined } from '@ant-design/icons'; // Ant Design delete icon
import "../App.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CheckoutModal from "../components/CheckOutModal";

// export default function ShoppingCart() {
//   let Cartdata = JSON.parse(localStorage.getItem("E-Commerce-CartItems")) || [];
//   let cartedData = Array.isArray(Cartdata) ? [...Cartdata] : [];
//   let { setCartItems } = useContext(CartContext)


//   function updateQunatity(data, operator) {
//     const updatedProduct = { ...data };

//     if (operator === "plus") {
//       updatedProduct.quantity++;
//     } else if (operator === "minus" && updatedProduct.quantity > 1) {
//       updatedProduct.quantity--;
//     }


//     const updatedCart = cartedData.map((product) =>
//       product._id === updatedProduct._id ? updatedProduct : product
//     );

//     localStorage.setItem("E-Commerce-CartItems", JSON.stringify(updatedCart));
//     setCartItems(updatedCart);
//   }


//   function removeItem(data) {
//     let newFilter = cartedData.filter((product) => product._id != data._id)
//     localStorage.setItem("E-Commerce-CartItems", JSON.stringify(newFilter));
//     setCartItems(newFilter)
//   }

//   return (
//     <section className="h-100" style={{ backgroundColor: "#eee", paddingTop: "60px" }}>
//       <div className="justify-content-center align-items-center h-100 container" style={{ width: "100%" }}>
//         <div>
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h1 className="fw-normal mb-0 text-black">
//               Shopping Cart
//             </h1>
//             <div>
//               <p className="mb-0">
//                 <span className="text-muted">Sort by:</span>
//                 <a href="#" className="text-body">
//                   price <i className="fas fa-angle-down mt-1"></i>
//                 </a>
//               </p>
//             </div>
//           </div>

//           <div className="row mx-auto d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
//             {cartedData.map((data, index) => (
//               <div
//                 className="cart-card d-flex flex-column justify-content-start p-3"
//                 key={index}
//                 style={{
//                   backgroundColor: "white",
//                   borderRadius: "8px",
//                   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                   marginBottom: "10px",
//                   width: "100%" // Ensures full width for the card
//                 }}
//               >
//                 {/* Row 1: Image and Product Info */}
//                 <div className="d-flex align-items-center mb-2" style={{ flexWrap: "wrap" }}>
//                   <div className="image-div" style={{ marginRight: "10px" }}>
//                     <Image style={{ width: "50px", height: "auto", objectFit: "cover" }} src={data.image[0]} />
//                   </div>
//                   <div className="d-flex flex-column" style={{ flexGrow: 1 }}>
//                     <p className="mb-1 fw-bold">{data.name}</p>
//                     <p className="text-muted mb-0">Category</p>
//                     <p className="text-muted mb-0"> $ {data.price}</p>
//                   </div>
//                 </div>

//                 {/* Row 2: Quantity Controls and Dustbin Icon */}
//                 <div className="d-flex justify-content-end align-items-center mt-2" style={{ flexWrap: "wrap" }}>
//                   <div className="d-flex align-items-center">
//                     <button
//                       onClick={() => updateQunatity(data, "plus")}
//                       className="btn btn-sm btn-dark me-2"
//                       style={{ minWidth: "32px", height: "32px" }}
//                     >
//                       +
//                     </button>
//                     <h4
//                       style={{
//                         textAlign: "center",
//                         marginLeft: "5px",
//                         marginRight: "15px",
//                         marginTop: "15px",

//                       }}
//                     >
//                       {data.quantity}
//                     </h4>
//                     <button
//                       onClick={() => updateQunatity(data, "minus")}
//                       className="btn btn-sm btn-dark me-2"
//                       style={{ minWidth: "32px", height: "32px" }}
//                     >
//                       -
//                     </button>
//                   </div>
//                   <DeleteOutlined
//                     onClick={() => removeItem(data)}
//                     style={{ fontSize: "20px", color: "red", cursor: "pointer", marginLeft: "15px" }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Apply Coupon Section */}

// {
//   cartedData.length > 0 ? 
//           <div className="row" style={{backgroundColor : "white", padding: "10px"}}>
//             <div className="col-sm-12 col-lg-6 col-md-6 d-flex justify-content-center align-items-center flex-col-reverse" style={{flexWrap : "wrap" , padding: "6px"}}>
//               <input type="text" placeholder="Enter Coupoun Code" />
//               <button>Apply</button>
//             </div>
//           <div className="col-sm-12 col-lg-6 col-md-6 d-flex justify-content-start flex-column">
//             <strong>Total Amount</strong>
//             <p style={{paddingTop : "14px"}}>
//             <strong>Delievery Charges : </strong>
//                 $0
//             </p>
//             <p>
//             <strong>Discount : </strong>
//                 $0
//             </p>
//             <p>
//             <strong>Total Charge : </strong>
//                 $
//             </p>
    
//           </div>
//           </div> :
//           <div style={{ height : "50vh" , display : "flex" , justifyContent :"center" , alignItems : "center" , flexDirection : "column"}}>
//           <h1 style={{textAlign : "center"}}>Your Cart Is Empty</h1>
//           <Link style={{color : "black" }} to={'/'}>Shop Trending Products Now</Link>

//           </div>
// }

//           {/* Checkout Button */}

//         </div>
//       </div>
//     </section>
//   );
// }
export default function ShoppingCart() {
  let Cartdata = JSON.parse(localStorage.getItem("E-Commerce-CartItems")) || [];
  let cartedData = Array.isArray(Cartdata) ? [...Cartdata] : [];
  let { setCartItems } = useContext(CartContext);


  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  function updateQunatity(data, operator) {
    const updatedProduct = { ...data };

    if (operator === "plus") {
      updatedProduct.quantity++;
    } else if (operator === "minus" && updatedProduct.quantity > 1) {
      updatedProduct.quantity--;
    }

    const updatedCart = cartedData.map((product) =>
      product._id === updatedProduct._id ? updatedProduct : product
    );

    localStorage.setItem("E-Commerce-CartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  }

  function removeItem(data) {
    let newFilter = cartedData.filter((product) => product._id != data._id);
    localStorage.setItem("E-Commerce-CartItems", JSON.stringify(newFilter));
    setCartItems(newFilter);
  }

  function calculateTotal() {
    return cartedData.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  return (
    <section className="h-100" style={{ backgroundColor: "#F5F5F5", paddingTop: "60px" }}>
      <div className="container h-100" style={{ width: "100%" }}>
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
            <div>
              <p className="mb-0">
                <span className="text-muted">Sort by:</span>
                <a href="#" className="text-body">price <i className="fas fa-angle-down mt-1"></i></a>
              </p>
            </div>
          </div>

          <div className="row mx-auto d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
            {cartedData.map((data, index) => (
              <div
                className="cart-card d-flex flex-column justify-content-start p-3"
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  marginBottom: "15px",
                  width: "100%",
                }}
              >
                {/* Product Info */}
                <div className="d-flex align-items-center mb-2" style={{ flexWrap: "wrap" }}>
                  <div className="image-div" style={{ marginRight: "15px" }}>
                    <Image style={{ width: "60px", height: "auto", objectFit: "cover", borderRadius: "8px" }} src={data.image[0]} />
                  </div>
                  <div className="d-flex flex-column" style={{ flexGrow: 1 }}>
                    <p className="mb-1 fw-bold text-primary">{data.name}</p>
                    <p className="text-muted mb-0">Category</p>
                    <p className="text-muted mb-0">$ {data.price}</p>
                  </div>
                </div>

                {/* Quantity Controls and Dustbin Icon */}
                <div className="d-flex justify-content-end align-items-center mt-2" style={{ flexWrap: "wrap" }}>
                  <div className="d-flex align-items-center">
                    <Button   onClick={() => updateQunatity(data, "plus")}> + </Button>
                    <h4 style={{ textAlign: "center", margin: "0 15px", marginTop: "5px" }}>{data.quantity}</h4>
                    <Button   onClick={() => updateQunatity(data, "minus")}> - </Button>
                    {/* <button
                      onClick={() => updateQunatity(data, "minus")}
                      className="btn btn-sm btn-outline-dark me-2"
                      style={{ minWidth: "32px", height: "32px" }}
                    >
                      -
                    </button> */}
                  </div>
                  <DeleteOutlined
                    onClick={() => removeItem(data)}
                    style={{ fontSize: "24px", color: "#FF4C4C", cursor: "pointer", marginLeft: "15px" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Apply Coupon and Checkout Section */}
          {cartedData.length > 0 ? (
            <div className="row coupon-checkout-section" style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", marginTop: "25px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}>
              <div className="col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center" style={{ padding: "10px" }}>
                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  style={{
                    padding: "12px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    marginBottom: "10px",
                    width: "90%",
                  }}
                />
                <button
                  style={{
                    backgroundColor: "#0D6DB7",
                    color: "white",
                    borderRadius: "6px",
                    padding: "10px 20px",
                    border: "none",
                    width: "90%",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#094c8a"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#0D6DB7"}
                >
                  Apply Coupon
                </button>
              </div>

              <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-start" style={{ padding: "10px" }}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <strong>Total Amount:</strong>
                  <span>$ {calculateTotal().toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <strong>Delivery Charges:</strong>
                  <span>$ 0</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <strong>Discount:</strong>
                  <span>$ 0</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <strong>Total Charge:</strong>
                  <span className="text-primary fw-bold">$ {calculateTotal().toFixed(2)}</span>
                </div>
                <div style={{display : "flex" , justifyContent : "end" , alignItems : "center"}}>
                <button
                  style={{
                    backgroundColor: "#0D6DB7",
                    color: "white",
                    borderRadius: "6px",
                    padding: "10px 20px",
                    border: "none",
                    width: "80%",
                    marginTop: "20px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                  onClick={openModal}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#094c8a"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#0D6DB7"}
                >
                 CheckOut
                </button>

                <CheckoutModal isVisible={isModalVisible} onClose={closeModal} />
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                height: "50vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1 style={{ textAlign: "center" }}>Your Cart Is Empty</h1>
              <Link style={{ color: "black" }} to={"/"}>
                Shop Trending Products Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
