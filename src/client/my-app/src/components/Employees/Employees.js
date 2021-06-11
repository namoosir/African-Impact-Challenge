import { Component, useState } from 'react'
import Employee from 'components/Employees/Employee'
import PropTypes from 'prop-types';

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


Employees.propTypes = {
    /**
     * The user Ids for this employee
     */
    employees: PropTypes.object
};
  
Employees.defaultProps = {
    employees: ["60c17c3805ef1ecaebcef71c","60c178ad1908fcc56bb08fdd"]
};

export default Employees
