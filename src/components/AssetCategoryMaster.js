import React, { useState } from 'react';
import './AssetCategorySelector.css'; // Import CSS file for styling

function AssetCategorySelectorWithDataTable() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [data, setData] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedCategory) {
      fetchData(selectedCategory);
    } else {
      alert("Please select an asset category!");
    }
  };

  const fetchData = (category) => {
    // Replace this with actual API call to fetch data based on selected category
    // For demonstration purpose, I'm just setting some dummy data
    let dummyData = [];
    if (category === "Laptop") {
      dummyData = [
        { id: 1, name: "Laptop 1", price: "$1000" },
        { id: 2, name: "Laptop 2", price: "$1200" },
      ];
    } else if (category === "Mobile Phone") {
      dummyData = [
        { id: 1, name: "Phone 1", price: "$500" },
        { id: 2, name: "Phone 2", price: "$600" },
        // Add more mobile phone data as needed
      ];
    }
    // Add more else if conditions for other categories
    
    setData(dummyData);
  };

  return (
    <div className="asset-category-container"> 
      <h2>Asset Category Selector</h2>
      <label htmlFor="assetCategory">Select Asset Category:</label>
      <select id="assetCategory" name="assetCategory" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select an asset category...</option>
        <option value="Laptop">Laptop</option>
        <option value="Mobile Phone">Mobile Phone</option>
        <option value="Mobile Phone">HardDisk</option>
        <option value="Mobile Phone">Computer</option>
        <option value="Mobile Phone">Macbook</option>

        {/* Add more options as needed */}
      </select>
      <br/><br/>
      <button onClick={handleSubmit}>Submit</button>

      {/* Display data in table */}
      <h3>Selected Category: {selectedCategory}</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AssetCategorySelectorWithDataTable;
