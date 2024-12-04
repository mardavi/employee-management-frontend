import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
<<<<<<< HEAD
import logo from './logo.svg'; 
=======
>>>>>>> origin/master
import EmployeeList from "./employeeList/EmployeeList";
import AddEmployee from "./employees/AddEmployee";
import EditEmployee from "./employees/EditEmployee";
import ViewDeleteEmployee from "./employees/ViewDeleteEmployee";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
<<<<<<< HEAD
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Company Dashboard</h1>
=======
          <h1>Mern&Kraft</h1>
>>>>>>> origin/master
        </header>

        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/employees">Employee List</Link></li>
            <li><Link to="/add-employee">Add Employee</Link></li>
<<<<<<< HEAD
            <li><Link to="/view-delete-employee">View/Delete Employee</Link></li>
=======

>>>>>>> origin/master
          </ul>
        </nav>

        <div className="content">
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<h2>Welcome to the Company Dashboard</h2>} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/edit-employee/:id" element={<EditEmployee />} />
            <Route path="/view-delete-employee/:id" element={<ViewDeleteEmployee />} />
=======
          <Route path="/" element={
              <>
                <h2>Welcome to Mern & Kraft</h2>
                <h3>Manage Your Employees Using The Above Options</h3>
              </>
            } />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/edit-employee/:pid" element={<EditEmployee />} />
            <Route path="/view-delete-employee/:pid" element={<ViewDeleteEmployee />} />
>>>>>>> origin/master
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;