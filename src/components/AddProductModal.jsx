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
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Updated imports
import { app } from "../../Firebase/firebase"; // Ensure you initialize the app in firebase.js

const AddProductModal = ({ isVisible, onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [imageFiles, setImageFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const storage = getStorage(app); // Initialize storage
  const firestore = getFirestore(app); // Initialize Firestore

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImageFiles(files);
  };



  // Upload images to Firebase
  const uploadImagesToFirebase = async (imageFiles) => {
    const storage = getStorage(); // Correct initialization for Firebase Storage
    
    const uploadPromises = imageFiles.map((file) => {
      const storageRef = ref(storage, `${file.name}`); // Use ref correctly with modular syntax
      const uploadTask = uploadBytesResumable(storageRef, file); // Upload file using the new syntax
  
      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
          },
          (error) => {
            console.error('Upload failed:', error);
            reject(error); // Reject promise on error
          },
          () => {
            // Upload completed successfully, now get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              resolve(downloadURL); // Resolve the promise with the download URL
            });
          }
        );
      });
    });
  
    // Wait for all uploads to complete and return the URLs
    return Promise.all(uploadPromises);
  };
  

  const onSubmit = async (data) => {
    if (imageFiles.length === 0) {
        alert("Please upload at least one image.");
        return;
    }

    setLoading(true);

    try {
        // Upload images to Firebase and get their URLs, pass `imageFiles` here
        const imageUrls = await uploadImagesToFirebase(imageFiles);

        // Determine collection based on selected category
        const selectedCollection = data.categoryForWebsiteDisplay || "All Products";
        const collectionRef = collection(firestore, selectedCollection); // Updated Firestore reference

        // Add product data to Firestore
        await addDoc(collectionRef, {
            title: data.title,
            slogan: data.slogan,
            price: data.price,
            description: data.description,
            reviews: data.reviews,
            category: data.category,
            images: imageUrls, // Add image URLs
            createdAt: new Date(),
        });

        alert("Product added successfully!");
        reset(); // Reset the form
        setImageFiles([]); // Reset image files
        onClose(); // Close modal

    } catch (error) {
        console.error("Error adding product:", error);
        alert("There was an error adding the product. Please try again.");
    } finally {
        setLoading(false);
    }
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
          <label htmlFor="Title" style={{ color: "#9B80FD", fontSize: "21px" }}>Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            placeholder="Enter a Title"
            type="text"
            id="Title"
            style={inputStyle}
          />
          {errors.title && <span style={errorStyle}>{errors.title.message}</span>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="slogan" style={{ color: "#9B80FD", fontSize: "21px" }}>Slogan</label>
          <input
            {...register("slogan", { required: "Slogan is required" })}
            placeholder="Enter a Slogan"
            type="text"
            id="slogan"
            style={inputStyle}
          />
          {errors.slogan && <span style={errorStyle}>{errors.slogan.message}</span>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="price" style={{ color: "#9B80FD", fontSize: "21px" }}>Price</label>
          <input
            {...register("price", { required: "Price is required" })}
            placeholder="Enter Price in Numbers"
            type="number"
            id="price"
            style={inputStyle}
          />
          {errors.price && <span style={errorStyle}>{errors.price.message}</span>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="description" style={{ color: "#9B80FD", fontSize: "21px" }}>Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            placeholder="Enter a Description"
            id="description"
            style={textareaStyle}
          ></textarea>
          {errors.description && <span style={errorStyle}>{errors.description.message}</span>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="reviews" style={{ color: "#9B80FD", fontSize: "21px" }}>Reviews</label>
          <input
            {...register("reviews", { required: "Reviews count is required" })}
            placeholder="Enter Reviews"
            type="number"
            id="reviews"
            style={inputStyle}
          />
          {errors.reviews && <span style={errorStyle}>{errors.reviews.message}</span>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>Category For Website Display</label>
          <select
            {...register("categoryForWebsiteDisplay", { required: "Category is required" })}
            style={inputStyle}
          >
            <option value="All Products">All Products</option>
            <option value="Trending Products">Trending Products</option>
            <option value="Latest Products">Latest Products</option>
          </select>
          {errors.categoryForWebsiteDisplay && <span style={errorStyle}>{errors.categoryForWebsiteDisplay.message}</span>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="category" style={{ color: "#9B80FD", fontSize: "21px" }}>Category</label>
          <input
            {...register("category", { required: "Category is required" })}
            placeholder="Enter a Category"
            type="text"
            id="category"
            style={inputStyle}
          />
          {errors.category && <span style={errorStyle}>{errors.category.message}</span>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="image" style={{ color: "#9B80FD", fontSize: "21px" }}>Images</label>
          <input
            type="file"
            id="image"
            multiple
            onChange={handleImageChange}
            style={inputStyle}
          />
          {imageFiles.length === 0 && <span style={errorStyle}>Please upload at least one image.</span>}
        </div>

        <div>
          <button
            style={buttonStyle}
            type="submit"
            disabled={loading}
          >
            {loading ? "Adding Product..." : "Add Product"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

// Style constants
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

export default AddProductModal;
