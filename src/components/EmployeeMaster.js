
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeMaster.css';
import { background } from '@chakra-ui/react';


const EmployeeMaster = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ name: '', email: '', phone: '', active: true });
  const [searchQuery, setSearchQuery] = useState('');
  const [showActive, setShowActive] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/employeemaster');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleAddEmployee = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/employeemaster', newEmployee);
      setEmployees([...employees, response.data]);
      setNewEmployee({ name: '', email: '', phone: '', active: true }); // Clear input fields
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/employeemaster/${id}`);
      setEmployees(employees.find(employee => employee.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };
  

  const handleToggleActive = async (id, currentActiveStatus) => {
    try {
      const updatedEmployees = employees.map(employee => {
        if (employee.id === id) {
          return { ...employee, active: !currentActiveStatus };
        }
        return employee;
      });
      
      // Send a request to the backend to toggle the active status
      await axios.put(`http://localhost:5000/api/employees/${id}/toggleInactive`, { inactive: !currentActiveStatus });
  
      // Update the employee state in the frontend with the toggled status
      setEmployees(updatedEmployees);
    } catch (error) {
      console.error('Error toggling active status:', error);
    }
  };
  

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employees.filter(employee => {
    return (
      (employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.phone.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (showActive ? employee.active : true)
    );
  });

  return (
    <div className="employee-master-container">
      <h2>Employee Master</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search employees..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <label>
          Show Active:
          <input
            type="checkbox"
            checked={showActive}
            onChange={() => setShowActive(!showActive)}
          />
        </label>
      </div>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.active ? 'Active' : 'Inactive'}</td>
              

              <td className='btn'>
                <button onClick={() => handleToggleActive(employee.id)}style={{ background: ' #FCF55F',color:'black'}}>
                  {employee.active ? 'Deactivate' : 'Activate'}
                </button>
                <button className="DELETBTN"onClick={() => handleDeleteEmployee(employee.id)}style={{ background: ' #EE4B2B', color:'black', marginTop:'1rem' }}>
  Delete
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-employee">
        <h3>Add Employee</h3>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newEmployee.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={newEmployee.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={newEmployee.phone}
          onChange={handleInputChange}
        />
        <button onClick={handleAddEmployee}>Add Employee</button>
      </div>

    </div>
  );
};

export default EmployeeMaster;








