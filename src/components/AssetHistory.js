import React, { useState, useEffect } from 'react';
import './AssetHistory.css';
const AssetHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const mockHistory = [
      {
        "description": "Asset purchased",
        "date": "2023-01-15"
      },
      {
        "description": "Maintenance check",
        "date": "2023-05-20"
      },
      {
        "description": "Upgraded software",
        "date": "2023-09-10"
      },
      {
        "description": "Replacement of parts",
        "date": "2023-12-05"
      },
      {
        "description": "Asset decommissioned",
        "date": "2024-03-01"
      }
    ];

    // Simulate API call delay with setTimeout
    const fetchAssetHistory = () => {
      setTimeout(() => {
        setHistory(mockHistory);
      }, 1000); // Simulating 1 second delay
    };

    fetchAssetHistory();

    // No cleanup needed for this effect
  }, []);

  return (
    <div className="asset-history">
      <h2>Asset History</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((event, index) => (
            <tr key={index}>
              <td>{event.description}</td>
              <td>{event.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetHistory;
