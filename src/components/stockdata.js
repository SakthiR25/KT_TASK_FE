import React, { useState, useEffect } from 'react';
import './stockdata.css';

const StockView = () => {
  const [stockData, setStockData] = useState([]);

  // Simulating fetching data from an API
  useEffect(() => {
    // Replace this with your actual API call
    const fetchData = async () => {
      // Mock data representing stock data
      const mockData = [
        { branch: 'Branch A', quantity: 100, value: 5000 },
        { branch: 'Branch B', quantity: 150, value: 7500 },
        { branch: 'Branch A', quantity: 50, value: 2500 },
        { branch: 'Branch C', quantity: 200, value: 10000 }
      ];
      setStockData(mockData);
    };

    fetchData();
  }, []);

  // Calculate total quantities and values
  const branchTotals = stockData.reduce((totals, item) => {
    if (!totals[item.branch]) {
      totals[item.branch] = { quantity: 0, value: 0 };
    }
    totals[item.branch].quantity += item.quantity;
    totals[item.branch].value += item.value;
    return totals;
  }, {});

  const totalValue = Object.values(branchTotals).reduce((total, branch) => total + branch.value, 0);

  return (
    <div>
      <h2>Stock View</h2>
      <table>
        <thead>
          <tr>
            <th>Branch</th>
            <th>Quantity</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(branchTotals).map(([branch, totals], index) => (
            <tr key={index}>
              <td>{branch}</td>
              <td>{totals.quantity}</td>
              <td>${totals.value}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td><strong>Total</strong></td>
            <td>{Object.values(branchTotals).reduce((total, branch) => total + branch.quantity, 0)}</td>
            <td>${totalValue}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default StockView;
