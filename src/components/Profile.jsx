import React, { use, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const API_URL = import.meta.env.VITE_API_URL;

function Profile() {

    if (!Cookies.get("user")) {
        window.location.href = "/signin";
        return;
    }
    const [user, setUser] = useState(null);

     useEffect(() => {
    
        fetch(`${API_URL}/users/profile`, {
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
              console.log("Profile:", res.user);
              setUser(res.user);
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
            <td colSpan={2}> <h4> <u> Profile Page </u> </h4> </td>
            </tr>

            <tr>
            <td> <label htmlFor='fn'>   First Name: </label> </td>
            <td> {user?.firstname || "N/A"} </td>
            </tr>


            <tr>
            <td> <label htmlFor='em'>   Last Name: </label> </td>
            <td> {user?.lastname || "N/A"} </td>
            </tr>
            
            <tr>
            <td> <label htmlFor='phone'>  Phone: </label> </td>
            <td> {user?.phone || "N/A"} </td>
            </tr>

            <tr>
            <td> <label htmlFor='em'>   Email: </label> </td>
            <td> {user?.email || "N/A"} </td>
            </tr>

        </table>
        </div>
    )
}

export default Profile
