import React, { useEffect, useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
=======
import './EmployeeList.css';
>>>>>>> origin/master

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
<<<<<<< HEAD
=======
  const [isEditing, setIsEditing] = useState(false);
  const [viewEmployee, setViewEmployee] = useState(null);
  const [editEmployee, setEditEmployee] = useState(null);
>>>>>>> origin/master

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get('/api/employees');
        setEmployees(response.data);
=======
        const response = await axios.get('http://localhost:8080/api/employees');
        setEmployees(response.data.employees);
>>>>>>> origin/master
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, []);

<<<<<<< HEAD
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
=======
  const filteredEmployees = employees.filter((employee) => {
    const searchMatch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.position.toLowerCase().includes(search.toLowerCase()) ||
      employee.department.toLowerCase().includes(search.toLowerCase());
    const filterMatch = filter ? employee.department === filter : true;

    return searchMatch && filterMatch;
});

const handleDelete = async (pid) => {
  try {
    const response = await axios.delete(`http://localhost:8080/api/employees/${pid}`);
    if (response.status === 200) {
      setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp.pid !== pid));
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
      `http://localhost:8080/api/employees/${editEmployee.pid}`,
      editEmployee
    );
    if (response.status === 200) {
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp.pid === editEmployee.pid ? response.data.employee : emp
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

  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
>>>>>>> origin/master
      <input
        type="text"
        placeholder="Search by name, role, or department"
        value={search}
<<<<<<< HEAD
        onChange={handleSearch}
=======
        onChange={(e) => setSearch(e.target.value)}
>>>>>>> origin/master
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
            </li>
          ))}
      </ul>
=======
      {filteredEmployees.map((employee) => (
    <li key={employee.pid}>
      {employee.name} - {employee.role} ({employee.department})
      <button onClick={() => setViewEmployee(employee)}>View</button>
      <button onClick={() => handleDelete(employee.pid)}>Delete</button>
            </li>
          ))}
      </ul>

      {viewEmployee && !editEmployee && (
        <div className="view-details">
          <h3>View Employee Details</h3>
          <p><strong>Name:</strong> {viewEmployee.name}</p>
          <p><strong>Position:</strong> {viewEmployee.position}</p>
          <p><strong>Department:</strong> {viewEmployee.department}</p>
          <p><strong>Email:</strong> {viewEmployee.email}</p>
          <p><strong>Phone:</strong> {viewEmployee.phone}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => setViewEmployee(null)}>Close</button>
        </div>
      )}

      {editEmployee && (
        <div className="edit-form">
          <h3>Edit Employee</h3>
          <form onSubmit={handleUpdateSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={editEmployee.name}
                onChange={handleEditChange}
              />
            </div>
            <div>
              <label>Position:</label>
              <input
                type="text"
                name="position"
                value={editEmployee.position}
                onChange={handleEditChange}
              />
            </div>
            <div>
              <label>Department:</label>
              <input
                type="text"
                name="department"
                value={editEmployee.department}
                onChange={handleEditChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={editEmployee.email}
                onChange={handleEditChange}
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={editEmployee.phone}
                onChange={handleEditChange}
              />
            </div>
            <button type="submit">Update</button>
            <button onClick={() => setEditEmployee(null)}>Cancel</button>
          </form>
        </div>
      )}
>>>>>>> origin/master
    </div>
  );
}

export default EmployeeList;
<<<<<<< HEAD
=======

>>>>>>> origin/master
