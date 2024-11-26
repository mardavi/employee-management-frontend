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
        const response = await fetch('/api/employess',{
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
}

export default AddEmployee;
