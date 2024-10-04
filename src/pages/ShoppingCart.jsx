import React, { useContext } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { CartContext } from "../context/CartContext";
import { Image } from "antd";
import "../App.css"
export default function ShoppingCart() {

  let Cartdata = JSON.parse(localStorage.getItem("E-Commerce-CartItems"))

  let cartedData = [...Cartdata]


  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      {/* <MDBContainer className="py-5 h-100"> */}
        <MDBRow className="justify-content-center align-items-center h-100" style={{width : "100%"}}>
          <MDBCol md="10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                Shopping Cart
              </MDBTypography>
              <div>
                <p className="mb-0">
                  <span className="text-muted">Sort by:</span>
                  <a href="#!" className="text-body">
                    price <i className="fas fa-angle-down mt-1"></i>
                  </a>
                </p>
              </div>
            </div>



            <div className="row gx-4 gy-4 mx-auto d-flex justify-content-center items-center" style={{width : "100%"}}>
              {
                cartedData.map((data, index) => (
                  <div className="cart-card d-flex justify-content-start align-items-center" style={{ backgroundColor: "white" , height: "100px" , marginLeft: "5px"}}>
                    <div className="image-div">
                      <Image style={{ width: "50px" }} src={data.image[0]} />
                    </div>
                    <div>
                      <p style={{paddingLeft:"10px"}}>{data.name}</p>
                      <p style={{paddingLeft:"10px"}}>Category</p>
                    </div>
                    <div>
                      <button>+</button>
                      <input type="number" style={{width: "50px"}} value={0} />
                      <button>-</button>
                    </div>
                  </div>
                ))
              }
            </div>


            {/* Card 2 - Duplicate as needed */}
            {/* <MDBCol lg="4" md="6" sm="12" className="mb-4">
        </MDBCol> */}

            {/* Card 3 - Duplicate as needed */}
            {/* <MDBCol lg="4" md="6" sm="12" className="mb-4"> */}
            {/* ... (Same card content as above) ... */}
            {/* </MDBCol> */}


            <MDBCard className="mb-4">
              <MDBCardBody className="p-4 d-flex flex-row">
                <MDBInput label="Discound code" wrapperClass="flex-fill" size="lg" />
                <button>Apply</button>
              </MDBCardBody>
            </MDBCard>

            <MDBCard>
              <MDBCardBody>
                <MDBBtn className="ms-3" color="warning" block size="lg">
                  Apply
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      {/* </MDBContainer> */}
    </section>
  );
}