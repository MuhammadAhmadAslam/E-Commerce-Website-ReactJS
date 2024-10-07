import { CloseOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React , {useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
export default function CheckoutModal({ isVisible, onClose }) {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  let {cartItems , setCartItems} = useContext(CartContext)
  

  const inputStyle = {
    width: "100%",
    border: "1px solid #9B80FD",
    outline: "none",
    height: "40px",
    color: "black",
    padding: "10px",
  };

  const textareaStyle = {
    ...inputStyle,
    height: "150px",
    resize: "none",
  };

  const buttonStyle = {
    backgroundColor: "#9B80FD",
    border: "none",
    color: "white",
    width: "100%",
    height: "50px",
    marginTop: "30px",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
  };


  let [firstName , setFirstName] = useState('')
  let [LastName , setLastName] = useState('')
  let [phoneNumber , setPhoneNumber] = useState('')
  let [emailAddress , setEmailAddress] = useState('')
  let [Address1 , setAddress1] = useState('')
  let [Address2 , setAddress2] = useState('')
  let [city , setCity] = useState('')
  let [Country , setCountry] = useState('USA')
  let [state , setState] = useState('')
  let [loading , setLoading] = useState(false)
  
  const handleSubmit = async (values) => {
    setLoading(true)
        let CheckOutObj = {
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
            orderStatus : "pending"
        }
        console.log(CheckOutObj);
        
        if (!firstName || !LastName || !phoneNumber || !emailAddress || !Address1 || !Address2 || !city || !Country || !state) {
          alert("Please Fill All The Fields")
        } else {
          const docRef = await addDoc(collection(db, "Orders"), CheckOutObj);
          console.log("Document written with ID: ", docRef.id);
          onClose()
          setCartItems([])
          localStorage.setItem("")
        }
        setLoading(false)
  }; 

  return (
    <Modal
      title={<div style={{ textAlign: "center" }}>Checkout</div>}
      open={isVisible}
      onCancel={onClose}
      footer={null}
      closeIcon={<CloseOutlined style={{ fontSize: "16px" }} />}
      centered
    >
        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>First Name</label>
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
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>Last Name</label>
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
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>Phone Number</label>
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
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>Email Address</label>
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
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>Address 1</label>
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
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>Address 2</label>
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
              setCountry(event.target.value)
              console.log(Country)
              }
            }
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
          <button
            style={buttonStyle}
            type="submit"
            onClick={handleSubmit}
          >
            {
              loading ? "Processing..." : "CheckOut"
            }
          </button>
        </div>
    </Modal>
  );
};