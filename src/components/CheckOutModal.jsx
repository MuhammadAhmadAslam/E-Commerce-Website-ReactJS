import { CloseOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import emailjs from "emailjs-com"; // Import EmailJS
import { InputCursorText } from "react-bootstrap-icons";

export default function CheckoutModal({ isVisible, onClose, calculateTotal }) {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  let { cartItems, setCartItems } = useContext(CartContext);

  const inputStyle = {
    width: "100%",
    border: "1px solid #9B80FD",
    outline: "none",
    height: "40px",
    color: "black",
    padding: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#9B80FD",
    border: "none",
    color: "white",
    width: "100%",
    height: "50px",
    marginTop: "30px",
  };

  const textareaStyle = {
    ...inputStyle,
    height: "150px",
    resize: "none",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
  };

  let [firstName, setFirstName] = useState("");
  let [LastName, setLastName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [emailAddress, setEmailAddress] = useState("");
  let [Address1, setAddress1] = useState("");
  let [Address2, setAddress2] = useState("");
  let [city, setCity] = useState("");
  let [Country, setCountry] = useState("USA");
  let [state, setState] = useState("");
  let [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    if (
      !firstName ||
      !LastName ||
      !phoneNumber ||
      !emailAddress ||
      !Address1 ||
      !Address2 ||
      !city ||
      !Country ||
      !state
    ) {
      alert("Please Fill All The Fields");
      setLoading(false);
      return;
    }
  
    const newDocRef = doc(collection(db, "Orders"));
    const uniqueId = newDocRef.id;
  

    const productDetails = cartItems.map(item => {
      return {
        id: item.id,
        name: item.name,
      };
    });

    let CheckOutObj = {
      id: uniqueId,
      firstName,
      LastName,
      phoneNumber,
      emailAddress,
      Address1,
      Address2,
      city,
      Country,
      state,
      cartItems,
      orderStatus: "pending",
      TotalAmount: Number(calculateTotal().toFixed(2)),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
  
    try {
      // Save to Firebase
      await setDoc(newDocRef, CheckOutObj);
      console.log("Document written with ID: ", uniqueId);
  
      // Web3Forms Integration
      const formData = new FormData();
      formData.append("access_key", "3e389474-3a6a-4d6a-b9f7-cbfebbd79d29"); // Replace with your Web3Forms access key
      formData.append("first_name", firstName);
      formData.append("last_name", LastName);
      formData.append("email", emailAddress);
      formData.append("phone", phoneNumber);
      formData.append("address1", Address1);
      formData.append("address2", Address2);
      formData.append("city", city);
      formData.append("country", Country);
      formData.append("state", state);
      formData.append("cart_items", JSON.stringify({productDetails})); // Include cart items in the email
      formData.append("total_amount", calculateTotal().toFixed(2));
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log("Form Submitted Successfully", data);
        setOrderPlaced(true); // Show success modal
      } else {
        console.error("Form submission error: ", data);
        setErrorOccurred(true); // Show error modal
      }
  
      onClose();
      setCartItems([]);
      localStorage.setItem("E-Commerce-CartItems", JSON.stringify([]));
  
      let existingIds = localStorage.getItem("Order ID");
      let idsArray;
  
      if (existingIds) {
        try {
          idsArray = JSON.parse(existingIds);
          if (!Array.isArray(idsArray)) {
            idsArray = [];
          }
        } catch (error) {
          console.error("Error parsing Order IDs: ", error);
          idsArray = [];
        }
      } else {
        idsArray = [];
      }
  
      idsArray.push(uniqueId);
      localStorage.setItem("Order ID", JSON.stringify(idsArray));
      console.log(idsArray, "updated Order IDs");
  
      await Swal.fire({
        title: "Success!",
        text: "Your order has been placed successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setErrorOccurred(true);
      await Swal.fire({
        title: "Ooops!",
        text: "Error Occuring During Process Of CheckOut Check Your Internet Connection",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  
    setLoading(false);
  };
  
  return (
    <section>
      <Modal
        title={<div style={{ textAlign: "center" }}>Checkout</div>}
        open={isVisible}
        onCancel={onClose}
        footer={null}
        closeIcon={<CloseOutlined style={{ fontSize: "16px" }} />}
        centered
      >
      <form onSubmit={handleSubmit}>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>
            First Name
          </label>
          <input
            name="firstName"
            placeholder="Your First Name"
            type="text"
            style={inputStyle}
            required
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>
            Last Name
          </label>
          <input
            name="lastName"
            placeholder="Your Last Name"
            type="text"
            style={inputStyle}
            required
            value={LastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>
            Phone Number
          </label>
          <input
            name="phoneNumber"
            placeholder="Phone Number"
            type="text"
            style={inputStyle}
            required
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>
            Email Address
          </label>
          <input
            name="email"
            placeholder="Email Address"
            type="email"
            style={inputStyle}
            required
            value={emailAddress}
            onChange={(event) => setEmailAddress(event.target.value)}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>
            Address 1
          </label>
          <input
            name="address1"
            placeholder="Address 1"
            type="text"
            style={inputStyle}
            required
            value={Address1}
            onChange={(event) => setAddress1(event.target.value)}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>
            Address 2
          </label>
          <input
            name="address2"
            placeholder="Address 2"
            type="text"
            style={inputStyle}
            required
            value={Address2}
            onChange={(event) => setAddress2(event.target.value)}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>City</label>
          <input
            name="city"
            placeholder="City"
            type="text"
            style={inputStyle}
            required
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>Country</label>
          <select
            name="country"
            style={inputStyle}
            required
            value={Country}
            onChange={(event) => {
              setCountry(event.target.value);
              console.log(Country);
            }}
          >
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>State</label>
          <input
            name="state"
            placeholder="State"
            type="text"
            style={inputStyle}
            required
            value={state}
            onChange={(event) => setState(event.target.value)}
          />
        </div>

        <div>
          <input
            style={buttonStyle}
            type="submit"
            value={loading ? "Processing..." : "CheckOut"}
          />
        </div>
      </form>
      </Modal>

      <Modal
        title={
          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Order Placed Successfully!
          </div>
        }
        open={orderPlaced}
        onCancel={() => setOrderPlaced(false)}
        footer={null}
        closeIcon={<CloseOutlined style={{ fontSize: "26px" }} />}
        centered
        style={{ marginBottom: "90px" }}
      >
        <p style={{ fontSize: "22px", textAlign: "center" }}>
          Your order has been placed successfully. Thank you for shopping with
          us!
        </p>
      </Modal>

      <Modal
        title={
          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Error Occured
          </div>
        }
        open={errorOccurred}
        onCancel={() => setErrorOccurred(false)}
        footer={null}
        closeIcon={<CloseOutlined style={{ fontSize: "26px" }} />}
        centered
        style={{ marginBottom: "90px" }}
      >
        <p style={{ fontSize: "22px", textAlign: "center" }}>
          Sorry, an error occurred while placing your order. Please Check Your
          Internet Connection
        </p>
      </Modal>
    </section>
  );
}
