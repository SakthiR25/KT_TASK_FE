// src/components/Asset.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import '../styles.css';

const Asset = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    api.get('/assets')
      .then(response => {
        setAssets(response.data);
      })
      .catch(error => {
        console.error('Error fetching assets:', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>Assets</h2>
        <ul>
          {assets.map(asset => (
            <li key={asset._id}>{asset.serialNumber}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Asset;
