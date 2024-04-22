import React, { useState } from 'react';
import './Issueasset.css'; // Import CSS file for styling

function IssueAsset() {
  const [assetCategory, setAssetCategory] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [issuedAssets, setIssuedAssets] = useState([]); // State to store issued assets

  const handleAssetCategoryChange = (event) => {
    setAssetCategory(event.target.value);
  };

  const handleEmployeeNameChange = (event) => {
    setEmployeeName(event.target.value);
  };

  const handleSubmit = () => {
    if (assetCategory && employeeName) {
      const newIssuedAsset = {
        category: assetCategory,
        employee: employeeName
      };
      setIssuedAssets([...issuedAssets, newIssuedAsset]); // Add the new issued asset to the state
      alert(`Issued asset category: ${assetCategory} to employee: ${employeeName}`);
      // Here you can perform further actions such as updating database records
    } else {
      alert("Please select asset category and enter employee name!");
    }
  };

  return (
    <div className="issue-asset-container">
      <h2>Issue Asset</h2>
      <div className="form-group">
        <label htmlFor="assetCategory">Asset Category:</label>
        <select id="assetCategory" name="assetCategory" value={assetCategory} onChange={handleAssetCategoryChange}>
          <option value="">Select an asset category...</option>
          <option value="Laptop">Laptop</option>
          <option value="Mobile Phone">Mobile Phone</option>
          <option value="Screw Driver">Screw Driver</option>
          <option value="Drill Machine">Drill Machine</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="employeeName">Employee Name:</label>
        <input type="text" id="employeeName" name="employeeName" value={employeeName} onChange={handleEmployeeNameChange} />
      </div>
      <button onClick={handleSubmit}>Issue Asset</button>

      {/* Display issued assets in a data table */}
      <table>
        <thead>
          <tr>
            <th>Asset Category</th>
            <th>Employee Name</th>
          </tr>
        </thead>
        <tbody>
          {issuedAssets.map((asset, index) => (
            <tr key={index}>
              <td>{asset.category}</td>
              <td>{asset.employee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IssueAsset;
