import React, { useState } from "react";
import axios from 'axios';

function BusinessForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    businessName: "",
    productName: "",
    productWeight: "",
    selectedProducts: [],
    address: "",
  });

  const productWeights = ["100g", "250g", "500g", "1kg", "5kg"];
  const products = ["P1", "P2", "P3", "P4", "P5"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      selectedProducts: checked
        ? [...prevData.selectedProducts, value]
        : prevData.selectedProducts.filter((item) => item !== value),
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/submit', formData);
      console.log('Response:', response.data.message);
      alert('Form submitted successfully!');
  
      // Reset the form data
      setFormData({
        name: "",
        phoneNo: "",
        businessName: "",
        productName: "",
        productWeight: "",
        selectedProducts: [],
        address: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };
  

  return (
    <>
      <div className="mt-10">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-6 max-w-md mx-auto"
        >
          <div>
            <label className="block font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Phone Number:</label>
            <input
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Business Name:</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Product Name:</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Product Weight:</label>
            <select
              name="productWeight"
              value={formData.productWeight}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            >
              <option value="">Select weight</option>
              {productWeights.map((weight) => (
                <option key={weight} value={weight}>
                  {weight}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium">Select Products:</label>
            <div className="space-y-1">
              {products.map((product) => (
                <label
                  key={product}
                  className="inline-flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    name="selectedProducts"
                    value={product}
                    checked={formData.selectedProducts.includes(product)}
                    onChange={handleCheckboxChange}
                    className="form-checkbox"
                  />
                  <span>{product}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium">Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              rows="3"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default BusinessForm;
