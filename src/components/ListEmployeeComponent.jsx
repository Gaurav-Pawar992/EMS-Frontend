import React, {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'

const ListEmployeeComponent = () => {

   const[employees,setEmployee] = useState([]) 

   useEffect(() => {
            listEmployees().then((response)=> {
                setEmployee(response.data);
            }).catch(error => {
                console.error(error);
            });
            
    }, [])

  return (
    <div className='container'>
        <h2 className='text-center'>List Of Employees</h2>
        <table className='table table-striped table-bordered text-center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
               
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent