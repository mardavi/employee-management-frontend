import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EmployeeList from "./employeeList/EmployeeList";
import AddEmployee from "./employees/AddEmployee";
import EditEmployee from "./employees/EditEmployee";
import logo from "./Mern&Kraft.png"; // Import the logo image

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Replace h1 with the logo */}
          <img src={logo} alt="Mern & Kraft Logo" className="App-logo" />
        </header>

        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/employees">Employee List</Link></li>
            <li><Link to="/add-employee">Add Employee</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="welcome-section">
                  <h2>Welcome to Mern & Kraft</h2>
                  <h3>Manage Your Employees Using The Above Options</h3>
                </div>
              } 
            />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/edit-employee/:pid" element={<EditEmployee />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
