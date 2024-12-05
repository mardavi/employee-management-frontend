import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EmployeeList from "./employeeList/EmployeeList";
import AddEmployee from "./employees/AddEmployee";
import EditEmployee from "./employees/EditEmployee";
import ViewDeleteEmployee from "./employees/ViewDeleteEmployee";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Mern&Kraft</h1>
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;