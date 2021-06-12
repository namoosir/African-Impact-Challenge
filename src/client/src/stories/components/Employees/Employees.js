import { Component, useState } from 'react'
import Employee from 'components/Employees/Employee'
const Employees = ({employees}) => {
    /* ['nfjdsnfnlds', 'fdjsfjdsj','dskfkd'] */

    console.log(employees, "KDSFljdsljfklds")

    return (
        <div className="container">
            <div className="card">
            <div className="card-body employees">
                <h1>Employees</h1>

                <div className="employeePictures">
                    {employees.map((employee) => (
                        <Employee employeeId={employee}/>
                    ))}
                </div>       
              
        </div>
            </div>

        </div>
        
    )
}

export default Employees
