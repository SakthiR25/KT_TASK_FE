import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeForm.css';

const AddRow = ({ asset }) => (
  <tr>
    <td>{asset.serialNumber}</td>
    <td>{asset.make}</td>
    <td>{asset.model}</td>
    <td>{asset.type}</td>
  </tr>
);

const EmployeeForm = () => {
  const [assets, setAssets] = useState([]);
  const [newAsset, setNewAsset] = useState({
    serialNumber: '',
    make: '',
    model: '',
    type: '',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/assets');
      setAssets(response.data);
    } catch (error) {
      console.error('Error fetching assets:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewAsset({ ...newAsset, [e.target.name]: e.target.value });
  };

  const handleAddAsset = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/assets', newAsset);
      setAssets([...assets, response.data]);
      setNewAsset({ serialNumber: '', make: '', model: '', type: '' }); 
    } catch (error) {
      console.error('Error adding asset:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterType = (e) => {
    setFilterType(e.target.value);
  };

  const filteredAssets = assets.filter(asset => {
    return (
      (asset.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.model.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterType === '' || asset.type === filterType)
    );
  });

  return (
    <div className="asset-master-container">
      <h2>Asset Master</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by make or model..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <table className="asset-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Make</th>
            <th>Model</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredAssets.map(asset => (
            <AddRow key={asset.id} asset={asset} />
          ))}
        </tbody>
      </table>
      <div className="add-asset">
        <h3>Add Asset</h3>
        <input
          type="text"
          placeholder="Serial Number"
          name="serialNumber"
          value={newAsset.serialNumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Make"
          name="make"
          value={newAsset.make}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Model"
          name="model"
          value={newAsset.model}
          onChange={handleInputChange}
        />
        <select
          value={newAsset.type}
          onChange={handleInputChange}
          name="type"
        >
          <option value="">Select Type</option>
          <option value="Computer">Computer</option>
          <option value="Printer">Printer</option>
          <option value="Furniture">Furniture</option>
          {/* Add more options as needed */}
        </select>
        <button onClick={handleAddAsset}>Add Asset</button>
      </div>
    </div>
  );
};

export default EmployeeForm;
