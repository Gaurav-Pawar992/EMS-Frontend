import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleFirstName = (e) => setFirstName(e.target.value);
  
  const navigator = useNavigate();

  function saveEmployee(e){
    e.preventDefault();

    const employee={firstName,lastName,email}
    console.log(employee)

    createEmployee(employee).then((response) => {
      console.log(response.data);
      alert('Data Saved Successfully')
      navigator('/employees')
    })

  }

  function closeEmployee(e){
    e.preventDefault();
    navigator('/employees')
  }

  

  return (
    <div className='container'>
      <br/><br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <br/>
            <h2 className='text-center'>Add Employee</h2>
          <div className='card-body'>
            <form>
                <div className='form-group mb-2'>
                  <label className='form-label'>First Name :</label>
                  <input
                    type='text'
                    placeholder='First Name'
                    name='firstName'
                    value={firstName}
                    className='form-control'
                    onChange={handleFirstName}
                  ></input>
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Last Name :</label>
                  <input
                    type='text'
                    placeholder='Last Name'
                    name='lastName'
                    value={lastName}
                    className='form-control'
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Email :</label>
                  <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    value={email}
                    className='form-control'
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
              
           
                <button className='btn btn-outline-success'onClick={saveEmployee} style={{borderRadius: '15px' , display:'inline'}}><i class="fa fa-check" aria-hidden="true"></i>&nbsp;Submit</button>
                <button className='btn btn-outline-danger' onClick={closeEmployee} style={{borderRadius: '15px' , display:'inline',margin:'10px'}}><i class="fa fa-times" aria-hidden="true"></i>&nbsp;Close</button>
              
            </form>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent