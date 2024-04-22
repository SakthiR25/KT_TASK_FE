import React, { useState } from 'react';
import './ScrapAsset.css'; // Import CSS file for styling

function ScrapAsset() {
  const [assetCategory, setAssetCategory] = useState('');
  const [reason, setReason] = useState('');
  const [scrappedAssets, setScrappedAssets] = useState([]); // State to store scrapped assets

  const handleAssetCategoryChange = (event) => {
    setAssetCategory(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = () => {
    if (assetCategory && reason) {
      const newScrappedAsset = {
        category: assetCategory,
        reason: reason
      };
      setScrappedAssets([...scrappedAssets, newScrappedAsset]); // Add the new scrapped asset to the state
      alert(`Asset category ${assetCategory} has been marked as obsolete. Reason: ${reason}`);
      // Here you can perform further actions such as updating database records
    } else {
      alert("Please select an asset category and provide a reason for scrapping!");
    }
  };

  return (
    <div className="scrap-asset-container">
      <h2>Scrap Asset</h2>
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
        <label htmlFor="reason">Reason for Scrapping:</label>
        <input type="text" id="reason" name="reason" value={reason} onChange={handleReasonChange} />
      </div>
      <button onClick={handleSubmit}>Scrap Asset</button>

      {/* Display scrapped assets in a data table */}
      <table>
        <thead>
          <tr>
            <th>Asset Category</th>
            <th>Reason for Scrapping</th>
          </tr>
        </thead>
        <tbody>
          {scrappedAssets.map((asset, index) => (
            <tr key={index}>
              <td>{asset.category}</td>
              <td>{asset.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScrapAsset;
