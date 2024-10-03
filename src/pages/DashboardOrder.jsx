import React from 'react'
import WebsiteNavbar from '../components/Navbar'

const DashBoardOrder = () => {
       return (
              <section>
                     <h1 className='text-center mt-5'>Dashboard Order</h1>
                     <div className='d-flex justify-content-center gap-4 mt-5 mb-5'>
                     <button style={{paddingLeft: "10px" , paddingRight: "10px" , paddingTop: "10px" , paddingBottom: "10px" , border : "none" , backgroundColor: "#6B6B6B" , color: "white" , width: "150px"}}>Order</button>
                     <button style={{paddingLeft: "10px" , paddingRight: "10px" , paddingTop: "10px" , paddingBottom: "10px" , border : "none" , backgroundColor: "#6B6B6B" , color: "white" , width: "150px"}}>Add Product</button>
                     <button style={{paddingLeft: "10px" , paddingRight: "10px" , paddingTop: "10px" , paddingBottom: "10px" , border : "none" , backgroundColor: "#6B6B6B" , color: "white" , width: "150px"}}>Edit Product</button>
                     <button style={{paddingLeft: "10px" , paddingRight: "10px" , paddingTop: "10px" , paddingBottom: "10px" , border : "none" , backgroundColor: "#6B6B6B" , color: "white" , width: "150px"}}>Delete Product</button>
                     <button style={{paddingLeft: "10px" , paddingRight: "10px" , paddingTop: "10px" , paddingBottom: "10px" , border : "none" , backgroundColor: "#6B6B6B" , color: "white" , width: "150px"}}>Delete Product</button>
                     </div>
              </section>
       )
}

export default DashBoardOrder