import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import '../ordermanagement/OrderManagement.css'

const OrderManagement = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    email: "",
    product: "",
    quantity: "",
  });

  const handleInputChange = (e) => {
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = () => {
    const { name, email, product, quantity } = orderDetails;
  
    if (!name || !email || !product || !quantity) {
      alert("Please fill out all fields!");
      return;
    }
  
    try {
      const workbook = XLSX.utils.book_new();
      const worksheetData = [
        ["Name", "Email", "Product", "Quantity"], 
        [name, email, product, quantity],        
      ];
      const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  
      XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
  
      const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
      const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = "OrderDetails.xlsx";
  
      document.body.appendChild(link);
      link.click();
  
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
  
      alert("Order placed and Excel file generated!");
      setOrderDetails({ name: "", email: "", product: "", quantity: "" });
    } catch (error) {
      console.error("Error generating Excel file:", error);
      alert("There was an issue generating the Excel file. Please try again.");
    }
  };
  
  

  return (
    <div className="order-management-container p-4">
      <h2 className="text-center mb-4">Order Management</h2>
    
      <form className="order-form row g-3">
        <div className="col-12">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control order-input-name"
            id="name"
            name="name"
            value={orderDetails.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input
            type="email"
            className="form-control order-input-email"
            id="email"
            name="email"
            value={orderDetails.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="product" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control order-input-product"
            id="product"
            name="product"
            value={orderDetails.product}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            className="form-control order-input-quantity"
            id="quantity"
            name="quantity"
            value={orderDetails.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-12 order-two-bttn">
          <Link to='/'><button
            type="button"
            className="btn btn-success order-submit-btn"
            onClick={handleOrder}
            required

          >
            Place Order
          </button>
          </Link>
          
        
       
        <Link to='/'><button
            type="button"
            className="btn btn-success order-submit-btn flex-end"
            required
          >
            cancel
          </button>
          </Link>
          
        </div>
      </form>
    </div>
  );
};

export default OrderManagement;
