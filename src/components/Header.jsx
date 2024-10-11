import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Header = () => {
       return (
              <header
		className='headers'
              style={{
                backgroundColor: "black",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "10px",
                height: "50px",
                paddingTop: "20px"
              }}
            >
              <div className="container icon-div" style={{display:"flex" , justifyContent: "end" , gap: "10px"}}>
              <a
										href="#"
										target="_blank"
										title="Go To Facebook"
										className="header-icons"
										style={{
											color: "#1877F2",
											textDecoration: "none",
											paddingBottom: "10px",
											marginBottom: "2px",
											fontSize: "28px"
										}}
									>
										<FaFacebook />
									</a>
									<a
										href="#"
										target="_blank"
										title="Go To Instagram"
										className='header-icons'
										style={{
											textDecoration: "none",
											paddingBottom: "10px",
											marginBottom: "2px",
											fontSize: "28px"
										}}
									>
										<span
											style={{
												backgroundColor: "linear-gradient(to right, #feda75, #fa7e1e, #f56040, #fd1d1d, #833ab4)",
												padding: "10px", // add some padding to see the gradient effect
												borderRadius: "5px" // add some border radius to see the gradient effect
											}}
										>
											<FaInstagram style={{ color: "#f09433" }} />
										</span>
									</a>
									<a
										href="#"
										target="_blank"
										title="Go To Twiiter"
										className="header-icons"
										style={{
											color: "white",
											textDecoration: "none",
											paddingBottom: "10px",
											marginBottom: "2px",
											fontSize: "28px"
										}}
									>
										<FaSquareXTwitter />
									</a>
              </div>
            </header>
       )
}

export default Header