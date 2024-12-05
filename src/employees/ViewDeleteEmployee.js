
import React, { useState } from "react";

const ViewDeleteEmployee = () => {
    const [employee, setEmployee] = useState(null);
    const [pid, setPid] = useState("");
    const [error, setError] = useState("");

        const fetchEmployee = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/employees/${pid}`);
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
                    await fetch(`http://localhost:8080/api/employees/${pid}`, {
                        method: "DELETE",
                    });
                    setEmployee(null);
                    setPid("");
                    setError("");    
                } catch(error) {
                    console.error("Error deleting employee: ", error);
                    setError("Failed to delete.");
                }
                };

            };
                export default ViewDeleteEmployee;
