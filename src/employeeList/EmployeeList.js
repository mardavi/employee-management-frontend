import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    (employee.name.toLowerCase().includes(search.toLowerCase()) || 
    employee.role.toLowerCase().includes(search.toLowerCase()) || 
    employee.department.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name, role, or department"
        value={search}
        onChange={handleSearch}
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
