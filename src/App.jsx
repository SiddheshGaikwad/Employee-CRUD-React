import React, { useState, useEffect } from "react";

import "./App.css";

import { allEmployees } from "./data";

import { saveEmployee } from "./data";

import { deleteEmployee } from "./data";

import { updateEmployee } from "./data";


const App = () => {

  const [employees, setEmployees] = useState([]);
  const [show,setShow]=useState(false);

  const loadAllEmployees = () => {
    setEmployees(allEmployees());
  }

  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    role: "",
    salary: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (show) {
      updateEmployee(employee);
    } else {
      saveEmployee(employee);
    }

    setEmployee({
      id: "",
      name: "",
      role: "",
      salary: ""
    });
    loadAllEmployees();
  };

  const handleDeleteById = (id) => {
    deleteEmployee(id);
    loadAllEmployees();

  };

  const handleUpdateById = (emp) => {
    setEmployee(emp);
    setShow(true);
  }




  useEffect(() => {
    loadAllEmployees();
  }, []);


  return (
    <div><center>
      <h1>
        Employee CRUD Application
      </h1><br /><br />
      <h2>Employee Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.role}</td>
              <td>{e.salary}</td>
              <td><button onClick={() => handleDeleteById(e.id)}>Delete</button>
                <button onClick={() => handleUpdateById(e)}>Update</button>
              </td>

            </tr>
          ))}
        </tbody>


      </table>
      <br /><br />
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        Id: <input type="text" name="id" value={employee.id} onChange={handleChange} /><br /><br />
        Name: <input type="text" name="name" value={employee.name} onChange={handleChange} /><br /><br />
        Role: <input type="text" name="role" value={employee.role} onChange={handleChange} /><br /><br />
        Salary: <input type="text" name="salary" value={employee.salary} onChange={handleChange} /><br />
        <br /><br />
        <button>{show ? "Update Employee" : "Add Employee"}</button>
      </form>
    </center></div>
  );
};

export default App;