import React, { useState } from 'react';
import './Returnasset.css'; 

function ReturnAsset() {
  const [assetCategory, setAssetCategory] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [returnReason, setReturnReason] = useState('');
  const [returnedAssets, setReturnedAssets] = useState([]); // State to store returned assets

  const handleAssetCategoryChange = (event) => {
    setAssetCategory(event.target.value);
  };

  const handleEmployeeNameChange = (event) => {
    setEmployeeName(event.target.value);
  };

  const handleReturnReasonChange = (event) => {
    setReturnReason(event.target.value);
  };

  const handleSubmit = () => {
    if (assetCategory && employeeName && returnReason) {
      const newReturnedAsset = {
        category: assetCategory,
        employee: employeeName,
        reason: returnReason
      };
      setReturnedAssets([...returnedAssets, newReturnedAsset]); // Add the new returned asset to the state
      alert(`Returned asset category: ${assetCategory} from employee: ${employeeName}. Reason: ${returnReason}`);
    } else {
      alert("Please select asset category, enter employee name, and provide a reason for return!");
    }
  };

  return (
    <div className="return-asset-container">
      <h2>Return Asset</h2>
      <div className="form-group">
        <label htmlFor="assetCategory">Asset Category:</label>
        <select id="assetCategory" name="assetCategory" value={assetCategory} onChange={handleAssetCategoryChange}>
          <option value="">Select an asset category...</option>
          <option value="Laptop">Laptop</option>
          <option value="Mobile Phone">Mobile Phone</option>
          <option value="Screw Driver">Screw Driver</option>
          <option value="Drill Machine">Drill Machine</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="employeeName">Employee Name:</label>
        <input type="text" id="employeeName" name="employeeName" value={employeeName} onChange={handleEmployeeNameChange} />
      </div>
      <div className="form-group">
        <label htmlFor="returnReason">Reason for Return:</label>
        <input type="text" id="returnReason" name="returnReason" value={returnReason} onChange={handleReturnReasonChange} />
      </div>
      <button onClick={handleSubmit}>Return Asset</button>

      {/* Display returned assets in a data table */}
      <table>
        <thead>
          <tr>
            <th>Asset Category</th>
            <th>Employee Name</th>
            <th>Reason for Return</th>
          </tr>
        </thead>
        <tbody>
          {returnedAssets.map((asset, index) => (
            <tr key={index}>
              <td>{asset.category}</td>
              <td>{asset.employee}</td>
              <td>{asset.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReturnAsset;
