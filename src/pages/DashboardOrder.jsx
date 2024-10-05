import React, { useState } from 'react';
import WebsiteNavbar from '../components/Navbar';
import AddProductModal from '../components/AddProductModal';

const DashBoardOrder = () => {
  const [isAddProductModalVisible, setAddProductModalVisible] = useState(false);

  const showAddProductModal = () => {
    setAddProductModalVisible(true);
  };

  const handleModalClose = () => {
    setAddProductModalVisible(false);
  };

  return (
    <div>
      <h1 className='text-center mt-5'>Dashboard Order</h1>
      <div className='d-flex justify-content-center gap-4 mt-5 mb-5 flex-wrap'>
        <button
          style={{ padding: "10px", border: "none", backgroundColor: "#9B80FD", color: "white", width: "150px" }}
        >
          Order
        </button>
        <button
          onClick={showAddProductModal} // Open the modal on click
          style={{ padding: "10px", border: "none", backgroundColor: "#9B80FD", color: "white", width: "150px" }}
        >
          Add Product
        </button>
        <button
          style={{ padding: "10px", border: "none", backgroundColor: "#9B80FD", color: "white", width: "150px" }}
        >
          Edit Product
        </button>
        <button
          style={{ padding: "10px", border: "none", backgroundColor: "#9B80FD", color: "white", width: "150px" }}
        >
          Delete Product
        </button>
        <button
          style={{ padding: "10px", border: "none", backgroundColor: "#9B80FD", color: "white", width: "150px" }}
        >
          Delete Product
        </button>
      </div>

      {/* Add Product Modal */}
      <AddProductModal 
        isVisible={isAddProductModalVisible} 
        onClose={handleModalClose} 
      />
    </div>
  );
}

export default DashBoardOrder;
