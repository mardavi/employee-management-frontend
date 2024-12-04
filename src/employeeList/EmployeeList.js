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

<<<<<<< HEAD
  const filteredEmployees = employees.filter((employee) =>
    (employee.name.toLowerCase().includes(search.toLowerCase()) || 
    employee.role.toLowerCase().includes(search.toLowerCase()) || 
    employee.department.toLowerCase().includes(search.toLowerCase()))
  );
=======
    return searchMatch && filterMatch;
});

const handleDelete = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/api/employees/${id}`);
    if (response.status === 200) {
      setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp.id !== id));
      alert("Employee profile deleted successfully");
    }
  } catch (error) {
    console.error("Error deleting employee profile:", error);
    alert("Failed to delete employee profile");
  }
};

const handleEditClick = () => {
  setEditEmployee(viewEmployee);
};


const handleEditChange = (e) => {
  const { name, value } = e.target;
  setEditEmployee({
    ...editEmployee,
    [name]: value,
  });
};


const handleUpdateSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.patch(
      `http://localhost:8080/api/employees/${editEmployee.id}`,
      editEmployee
    );
    if (response.status === 200) {
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp.id === editEmployee.id ? response.data.employee : emp
        )
      );
      alert("Employee updated successfully");
      setIsEditing(false);
    } else {
      alert("Failed to update employee");
    }
  } catch (error) {
    console.error("Error updating employee:", error);
    alert("An error occurred");
  }
};
>>>>>>> parent of 490bc61 (fixed names)

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
<<<<<<< HEAD
        {filteredEmployees
          .filter((employee) => (filter ? employee.department === filter : true))
          .map((employee) => (
            <li key={employee.id}>
              {employee.name} - {employee.role} ({employee.department})
=======
      {filteredEmployees.map((employee) => (
    <li key={employee.id}>
      {employee.name} - {employee.role} ({employee.department})
      <button onClick={() => setViewEmployee(employee)}>View</button>
      <button onClick={() => handleDelete(employee.id)}>Delete</button>
>>>>>>> parent of 490bc61 (fixed names)
            </li>
          ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
