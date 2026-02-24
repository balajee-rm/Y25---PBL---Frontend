import React, { use, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const API_URL = import.meta.env.VITE_API_URL;

function UserManagement() {

    if (!Cookies.get("user")) {
        window.location.href = "/signin";
        return;
    }
    const [users, setUsers] = useState(null);

     useEffect(() => {
    
        fetch(`${API_URL}/users/getallusers/1/3`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "token": `${Cookies.get("token")}`
          }
        })
          .then(res => res.json())
          .then(res => {
            console.log(res);
    
            if (res.code === 200) {
              console.log("Profile:", res);
              setUsers(res);
            } else {
              alert("Menu failed: " + res.message);
            }
          })
          .catch(err => console.log(err));
    
      }, []); // runs only once
    
    return (
        <div className='sign'>
        <table border={1}>

            <tr>
            <td colSpan={8}> <h4> <u> User Management </u> </h4> </td>
            </tr>

            <tr>
                <th> USER ID </th>
                <th> FIRST NAME </th>
                <th> LAST NAME </th>
                <th> EMAIL ID </th>
                <th> PHONE </th>
                <th> ROLE NAME </th>
                <th> EDIT </th>
                <th> DELETE </th>
            </tr>

            {users?.users?.map(user => (
              <tr key={user.id}>
                <td> {user.id} </td>
                <td> {user.firstname} </td>
                <td> {user.lastname} </td>
                <td> {user.emailid} </td>
                <td> {user.phone} </td>
                <td> {user.rolename} </td>
                <td> <button onClick={() => alert(`Editing user ${user.id}`)}> Edit </button> </td>
                <td> <button onClick={() => alert(`Deleting user ${user.id}`)}> Delete </button> </td>
              </tr>
            ))}

        </table>
        </div>
    )
}

export default UserManagement
