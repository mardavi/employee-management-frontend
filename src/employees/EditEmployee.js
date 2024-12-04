import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const EditEmployee = () =>{
<<<<<<< HEAD
const { id } = useParams();
=======
const { pid } = useParams();
>>>>>>> origin/master

    const[employee, setEmployee] = useState({
        name: '',
        position: '',
        department: '',
        email: '',
        phone: '',
    });

<<<<<<< HEAD
    useEffect(() => {
        const fetchEmployee = async () => {
            try{
                const response = await fetch(`/api/employees/${id}`);
                const data = await response.json();
                setEmployee(data);
            } catch (error){
                console.error('Error fetching employee data:', error);
            }
        };
            if (id) {
                fetchEmployee();
            } 
        }, [id]);
=======
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchEmployee = async () => {
            try{
                const response = await fetch(`/api/employees/${pid}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch employee profile");
                  }
                const data = await response.json();
                setEmployee(data.employee);
                setError("")
            } catch (error){
                console.error('Error fetching employee data:', error);
                setError("Could not fetch employee profile")
            }
        };
            if (pid) {
                fetchEmployee();
            } 
        }, [pid]);
>>>>>>> origin/master

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({
            ...employee,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
<<<<<<< HEAD
            const response = await fetch('/api/employees/${match.params.id}',{
=======
            const response = await fetch(`/api/employees/${pid}`,{
>>>>>>> origin/master
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(employee),
            });
            
            if (response.ok){
                alert('Employee updated successfully');
            }else{
                alert('Failed to update employee');
            }
<<<<<<< HEAD
        } catch (error){
=======
        } catch (error) {
>>>>>>> origin/master
            console.error('Error updating employee:', error);
        }
    };

    return(
        <div>
            <h2> Edit Employee </h2>
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
                <button type="submit">Update Employee</button>
            </form>
        </div>
    );

};

export default EditEmployee;