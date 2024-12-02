import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import EmployeeList from "./employeeList/EmployeeList";
import AddEmployee from "./employees/AddEmployee";
import EditEmployee from "./employees/EditEmployee";
import ViewDeleteEmployee from "./employees/ViewDeleteEmployee";

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/edit-employee/:id" element={<EditEmployee />} />
          <Route path="/view-delete-employee/:id" element={<ViewDeleteEmployee />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
