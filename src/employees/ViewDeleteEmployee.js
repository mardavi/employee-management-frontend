import React, { useState } from "react";

const ViewDeleteEmployee = () => {
    const [employee, setEmployee] = useState(null);
    const [employeeId, setEmployeeId] = useState("");
    const [error, setError] = useState("");

        const fetchEmployee = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/employees/${employeeId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch employee data.");
                }
                const data = await response.json();
                setEmployee(data.employee);
                setError("");
            } catch (error) {
                setError(error.message);
                setEmployee(null);
            }
        };

            const handleDelete = async () => {
                try {
                    await fetch(`http://localhost:8080/api/employees/${employeeId}`, {
                        method: "DELETE",
                    });
                    setEmployee(null);
                    setEmployeeId("");
                    setError("");    
                } catch(error) {
                    console.error("Error deleting employee: ", error);
                    setError("Failed to delete.");
                }
                };

                return (
                    <div>
                        <h1>View or Delete Employee</h1>
                        <input type="text" placeholder="Enter Employee ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}/>
                        <button onClick={fetchEmployee}>View Employee</button>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        {employee && (
                            <div>
                                <h3>{employee.name}</h3>
                                <p>{employee.position}</p>
                                <p>{employee.department}</p>
                                <p>{employee.email}</p>
                                <p>{employee.phone}</p>
                                <button onClick={handleDelete}>Delete Employee</button>
                                </div>
                        )}
                    </div>
                );
            };
                export default ViewDeleteEmployee;
