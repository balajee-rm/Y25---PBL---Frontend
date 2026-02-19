import React from 'react'
import Cookies from 'js-cookie'

function Profile() {

    if (!Cookies.get("user")) {
        window.location.href = "/signin";
        return;
    }
    const [user, setUser] = React.useState(JSON.parse(Cookies.get("user")));
    
    return (
        <div className='sign'>
        <table border={1}>

            <tr>
            <td colSpan={2}> <h4> <u> Profile Page </u> </h4> </td>
            </tr>

            <tr>
            <td> <label htmlFor='fn'>   User Name: </label> </td>
            <td> {user.uname} </td>
            </tr>


            <tr>
            <td> <label htmlFor='em'>   Email: </label> </td>
            <td> {user.emailid} </td>
            </tr>

        </table>
        </div>
    )
}

export default Profile
