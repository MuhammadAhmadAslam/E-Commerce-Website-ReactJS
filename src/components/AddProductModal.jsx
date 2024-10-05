// import React, { useState } from "react";
// import { Modal } from "antd";
// import { CloseOutlined } from "@ant-design/icons";

// const AddProductModal = ({ isVisible, onClose }) => {
//     const [imageFiles, setImageFiles] = useState([]);

//     const handleImageChange = (event) => {
//         const files = Array.from(event.target.files);
//         setImageFiles((prevFiles) => [...prevFiles, ...files]); // Add new files to the existing state
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault(); // Prevent default form submission
//         console.log("Image files: ", imageFiles);
//         // Handle product submission here
//     };

//     return (
//         <Modal
//             title={<div style={{ textAlign: "center" }}>Add Product</div>}
//             open={isVisible}
//             onCancel={onClose}
//             footer={null}
//             closeIcon={<CloseOutlined style={{ fontSize: "16px" }} />}
//             centered
//         >
//             <form onSubmit={handleSubmit}>
//                 <div style={{ marginBottom: "10px" }}>
//                     <label htmlFor="Title" style={{ color: "#9B80FD", fontSize: "21px" }}>Title</label>
//                     <input placeholder="Enter a Title" type="text" id="Title" style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "40px", color: "black", padding: "10px" }} />
//                 </div>
//                 <div style={{ marginBottom: "10px" }}>
//                     <label htmlFor="slogan" style={{ color: "#9B80FD", fontSize: "21px" }}>Slogan</label>
//                     <input placeholder="Enter A Slogan For Product" type="text" id="slogan" style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "40px", color: "black", padding: "10px" }} />
//                 </div>
//                 <div style={{ marginBottom: "10px" }}>
//                     <label htmlFor="price" style={{ color: "#9B80FD", fontSize: "21px" }}>Price</label>
//                     <input placeholder="Enter A Price In Number" type="number" id="price" style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "40px", color: "black", padding: "10px" }} />
//                 </div>
//                 <div style={{ marginBottom: "10px" }}>
//                     <label htmlFor="description" style={{ color: "#9B80FD", fontSize: "21px" }}>Description</label>
//                     <textarea placeholder="Enter A Description Of A Product" id="description" style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "150px", resize: "none", color: "black", padding: "10px" }}></textarea>
//                 </div>
//                 <div style={{ marginBottom: "10px" }}>
//                     <label htmlFor="reviews" style={{ color: "#9B80FD", fontSize: "21px" }}>Reviews</label>
//                     <input placeholder="Enter A Reviews In Number" type="number" id="reviews" style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "40px", color: "black", padding: "10px" }} />
//                 </div>
//                 <div style={{ marginBottom: "10px" }}>
//                     <label style={{ color: "#9B80FD", fontSize: "21px" }}>Category For Website Display</label>
//                     <select style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "40px", color: "black", padding: "10px" }}>
//                         <option value="">All Products</option>
//                         <option value="">Trending Products</option>
//                         <option value="">Latest Products</option>
//                     </select>
//                 </div>
//                 <div style={{ marginBottom: "10px" }}>
//                     <label htmlFor="category" style={{ color: "#9B80FD", fontSize: "21px" }}>Category</label>
//                     <input placeholder="Enter A Category Of Product" type="text" id="category" style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "40px", color: "black", padding: "10px" }} />
//                 </div>
//                 <div style={{ marginBottom: "10px" }}>
//                     <label htmlFor="image" style={{ color: "#9B80FD", fontSize: "21px" }}>Images</label>
//                     <input
//                         type="file"
//                         id="image"
//                         multiple // Allow multiple files
//                         onChange={handleImageChange}
//                         style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "40px", color: "black", padding: "10px" }}
//                     />
//                 </div>

//                 <div>
//                     <button style={{ backgroundColor: "#9B80FD", border: "none", color: "white", width: "100%", height: "50px", marginTop: "30px" }} type="submit">Add Product</button>
//                 </div>
//             </form>
//         </Modal>
//     );
// };

// export default AddProductModal;


import React, { useState } from "react";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";

const AddProductModal = ({ isVisible, onClose }) => {
  const { register, handleSubmit } = useForm();
  const [imageFiles, setImageFiles] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImageFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Handle product submission here
  };

  return (
    <Modal
      title={<div style={{ textAlign: "center" }}>Add Product</div>}
      open={isVisible}
      onCancel={onClose}
      footer={null}
      closeIcon={<CloseOutlined style={{ fontSize: "16px" }} />}
      centered
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="Title" style={{ color: "#9B80FD", fontSize: "21px" }}>
            Title
          </label>
          <input
            {...register("title")}
            placeholder="Enter a Title"
            type="text"
            id="Title"
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "40px",
              color: "black",
              padding: "10px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="slogan" style={{ color: "#9B80FD", fontSize: "21px" }}>
            Slogan
          </label>
          <input
            {...register("slogan")}
            placeholder="Enter A Slogan For Product"
            type="text"
            id="slogan"
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "40px",
              color: "black",
              padding: "10px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="price" style={{ color: "#9B80FD", fontSize: "21px" }}>
            Price
          </label>
          <input
            {...register("price")}
            placeholder="Enter A Price In Number"
            type="number"
            id="price"
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "40px",
              color: "black",
              padding: "10px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="description" style={{ color: "#9B80FD", fontSize: "21px" }}>
            Description
          </label>
          <textarea
            {...register("description")}
            placeholder="Enter A Description Of A Product"
            id="description"
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "150px",
              resize: "none",
              color: "black",
              padding: "10px",
            }}
          ></textarea>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="reviews" style={{ color: "#9B80FD", fontSize: "21px" }}>
            Reviews
          </label>
          <input
            {...register("reviews")}
            placeholder="Enter A Reviews In Number"
            type="number"
            id="reviews"
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "40px",
              color: "black",
              padding: "10px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>
            Category For Website Display
          </label>
          <select
            {...register("categoryForWebsiteDisplay")}
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: " none",
              height: "40px",
              color: "black",
              padding: "10px",
            }}
          >
            <option value="">All Products</option>
            <option value="">Trending Products</option>
            <option value="">Latest Products</option>
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="category" style={{ color: "#9B80FD", fontSize: "21px" }}>
            Category
          </label>
          <input
            {...register("category")}
            placeholder="Enter A Category Of Product"
            type="text"
            id="category"
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "40px",
              color: "black",
              padding: "10px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="image" style={{ color: "#9B80FD", fontSize: "21px" }}>
            Images
          </label>
          <input
            type="file"
            id="image"
            multiple // Allow multiple files
            onChange={handleImageChange}
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "40px",
              color: "black",
              padding: "10px",
            }}
          />
        </div>

        <div>
          <button
            style={{
              backgroundColor: "#9B80FD",
              border: "none",
              color: "white",
              width: "100%",
              height: "50px",
              marginTop: "30px",
            }}
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddProductModal;