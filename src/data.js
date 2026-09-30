let employees = [];

export const allEmployees = () => {
    return employees;
}

export const saveEmployee = (emp) => {
    if (employees.find((e) => e.id == emp.id)) {
        alert("ID already exists");
    } else {
        employees = [...employees, emp];
    }
};

export const deleteEmployee=(id)=>{
    employees=employees.filter((e)=>e.id !== id);
}

export const updateEmployee=(emp)=>{
    let newData=employees.filter((e)=>e.id != emp.id);
    employees=[...newData,emp];
};