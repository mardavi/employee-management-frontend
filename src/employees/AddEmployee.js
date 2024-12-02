import React, { useState } from 'react';

const AddEmployee = () => {
    const [employee, setEmployee] = useState ({
        name:'',
        position:'',
        department:'',
        email:'',
        phone:'',
    });

const handleChange = (e) => {
    const{ name, value } = e.target;
    setEmployee({
        ...employee,
        [name]: value,
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        const response = await fetch('http://localhost:8080/api/employees',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
        });

        if (response.ok) {
            alert('Employee added successfully');
        } else {
            alert('Failed to add employee');
        }
    } catch(error){
        console.error('Error:', error);
        alert('An error occurred');
    }
};

return(
    <div>
        <h2> Add Employee </h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label>Position: </label>
                <input
                type="text"
                name="position"
                value={employee.position}
                onChange={handleChange}
                required
                />
            </div>

            <div>
                <label>Department: </label>
                <input
                type="text"
                name="department"
                value={employee.department}
                onChange={handleChange}
                required
                />
            </div>

            <div>
                <label>Email: </label>
                <input
                type="text"
                name="email"
                value={employee.email}
                onChange={handleChange}
                required
                />
            </div>

            <div>
                <label>Phone: </label>
                <input
                type="text"
                name="phone"
                value={employee.phone}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit">Add Employee</button>
        </form>
    </div>
);

};
export default AddEmployee;
