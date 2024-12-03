import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EmployeeList.css';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/employees');
        setEmployees(response.data.employees);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    const searchMatch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.position.toLowerCase().includes(search.toLowerCase()) ||
      employee.department.toLowerCase().includes(search.toLowerCase());
    const filterMatch = filter ? employee.department === filter : true;

    return searchMatch && filterMatch;
});

  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      <input
        type="text"
        placeholder="Search by name, role, or department"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">Filter by Department</option>
        <option value="HR">HR</option>
        <option value="Engineering">Engineering</option>
        <option value="Marketing">Marketing</option>
      </select>
      <ul>
        {filteredEmployees
          .filter((employee) => (filter ? employee.department === filter : true))
          .map((employee) => (
            <li key={employee.id}>
              {employee.name} - {employee.role} ({employee.department})
            </li>
          ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
