import EmployeeList from './employeeList/EmployeeList';
import React from "react";
import logo from './logo.svg';
import './App.css';
import ViewDeleteEmployee from "./employees/ViewDeleteEmployee";
import AddEmployee from "./employees/AddEmployee";
import EditEmployee from "./employees/EditEmployee";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
