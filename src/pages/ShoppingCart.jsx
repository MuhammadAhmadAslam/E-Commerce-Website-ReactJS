import React, { useContext, useState, useEffect } from "react";
import { Button, Image, Modal } from "antd";
import { DeleteOutlined } from '@ant-design/icons'; // Ant Design delete icon
import "../App.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CheckoutModal from "../components/CheckOutModal";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

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
    let newFilter = cartedData.filter((product) => product._id !== data._id);
    localStorage.setItem("E-Commerce-CartItems", JSON.stringify(newFilter));
    setCartItems(newFilter);
  }

  function calculateTotal() {
    return cartedData.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  let [pendingOrders, setPendingOrders] = useState([]);
  let [activeOrderState, setActiveOrderState] = useState([]);

  let ordersId = localStorage.getItem("Order ID");
  let orderIdArray = JSON.parse(ordersId) || [];

  let activeOrder = [];
  let arr = [];

  let gettingPendingOrder = async () => {
    onSnapshot(collection(db, "Orders"), (snapshot) => {
      const pendingOrders = snapshot.docs.filter(
        (doc) => doc.data().orderStatus === "pending"
      );
      console.log(`Pending orders length: ${pendingOrders.length}`);
      arr = pendingOrders.map((doc) => doc.data());
      setPendingOrders(arr);
    });
  };

  useEffect(() => {
    gettingPendingOrder();
  }, []);

  let activeUserPendingOrder = () => {
    if (pendingOrders.length > 0 && orderIdArray.length > 0) {
      const filteredOrders = pendingOrders.filter((order) =>
        orderIdArray.includes(order.id)
      );
      setActiveOrderState(filteredOrders);
    } else {
      setActiveOrderState([]);
    }
  };

  useEffect(() => {
    activeUserPendingOrder();
  }, [pendingOrders]);

  console.log(activeOrderState, "activeOrderState");

  const [isOrderModalVisible, setOrderModalVisible] = useState(false); // State to control modal visibility

  const openOrderModal = () => {
    setOrderModalVisible(true); // Open modal
  };

  const closeOrderModal = () => {
    setOrderModalVisible(false); // Close modal
  };

  return (
    <section className="h-100" style={{ backgroundColor: "#F5F5F5", paddingTop: "60px" }}>
      <div className="container h-100" style={{ width: "100%" }}>
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
            <div>
              <button className="mb-0" style={{border : "none" , backgroundColor : "transparent"}} onClick={openOrderModal}>
                <span className="text-muted">Active Orders</span>
                <a href="#" className="text-body">({activeOrderState.length}) <i className="fas fa-angle-down mt-1"></i></a>
              </button>
            </div>
          </div>



          <Modal
            title={`You Have (${activeOrderState.length}) Order Active Yet`}
            visible={isOrderModalVisible}
            onCancel={closeOrderModal}
            footer={null} // Customize footer if needed
          >
            {
              activeOrderState.length > 0 ?
              activeOrderState.map((product , index) => (
                <section>

                  <h3>Order {index + 1}</h3>
                  <p><strong> Order ID :</strong> {product.id}</p>
                  <p><strong>Total Amount : </strong>  $  {product.TotalAmount}</p>
                  <details>
                    <summary style={{fontSize : "21px" , marginBottom: "30px"}}>Products</summary>
                    {
                      product.cartItems.map((cartItem) => (
                          <p> <strong> Product Title</strong>  {cartItem.name}</p>
                      ))
                    }
                  </details>
                </section>
              ))
              :
              <section>
                <h1>You Have No Active Orders Yet</h1>
              </section>
            }
          </Modal>


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
                    <Button onClick={() => updateQunatity(data, "plus")}> + </Button>
                    <h4 style={{ textAlign: "center", margin: "0 15px", marginTop: "5px" }}>{data.quantity}</h4>
                    <Button onClick={() => updateQunatity(data, "minus")}> - </Button>
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
                <div style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
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

                  <CheckoutModal isVisible={isModalVisible} onClose={closeModal} calculateTotal={calculateTotal} />
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
              <Link style={{ color: "black" }} to={"/collection"}>
                Shop Trending Products Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}



