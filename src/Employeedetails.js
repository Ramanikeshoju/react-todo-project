import React from 'react'
import { useState} from 'react';
import Data from './employee.json'

function Employeedetails() {
    const [employeeData, setEmployeeData] = useState(Data);
    const [search, setSearch] = useState('');


  return (
    <center>
        <h4>
            Employee Details
        </h4>
        <input type="text" placeholder="Search Employee" value={search} onChange={(e) => setSearch(e.target.value)} /> &nbsp;&nbsp;
        {/* <button onClick={() => setSearch('')}>Search</button> */}

        <br/> <br/>

        {employeeData.length > 0 && (
                    <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Role</th>
                                <th>Salary</th>
                                <th>Joining Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeData.filter((employee) => employee.id.toLowerCase().includes(search.toLowerCase())).map((detail, index) => (
                                <tr key={index}>
                                    <td>{detail.id}</td>
                                    <td>{detail.name}</td>
                                    <td>{detail.department}</td>
                                    <td>{detail.role}</td>
                                    <td>{detail.salary}</td>
                                    <td>{detail.joining_date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

    </center>
  )
}

export default Employeedetails



//when there is no search item found then we can show the message as "No employee found" instead of showing empty table
//handle - filter
//loading...
//sort up-down arrow for sorting the data in ascending and descending order
//conditional rendering - if there is no data then show the message as "No employee found" instead of showing empty table
//next page and previous page for pagination
//client side pagination with step by step implementation