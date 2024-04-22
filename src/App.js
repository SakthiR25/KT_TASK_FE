import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling
import EmployeeMaster from './components/EmployeeMaster';
import EmployeeForm from './components/EmployeeForm';
import AssetCategorySelector from './components/AssetCategoryMaster';
import IssueAsset from './components/Issueasset';
import ReturnAsset from './components/Returnasset';
import ScrapAsset from './components/ScrapAsset';
import AssetHistory from './components/AssetHistory';
import StockView from './components/stockdata';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Set default state to true

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        {/* <h1>Asset Management System</h1> */}
      </header>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#employee">Employee Management</a></li>
            <li><a href="#asset">Asset Management</a></li>
            <li><a href="#reports">Reports</a></li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="content">
          <section id="employee" className="section">
            <h2>Employee Management</h2>
            <div className="employee-section">
              <EmployeeMaster />
              <EmployeeForm />
            </div>
          </section>
          <section id="asset" className="section">
            <h2>Asset Management</h2>
            <div className="asset-section">
              <AssetCategorySelector />
              <IssueAsset />
              <ReturnAsset />
              <ScrapAsset />
            </div>
          </section>
          <section id="reports" className="section">
            <h2>Reports</h2>
            <div className="report-section">
              <AssetHistory />
              <StockView />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
