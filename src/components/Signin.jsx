import React from 'react'
import Cookies from "js-cookie";


function Signin() {

    const [em, setEm] = React.useState("")
    const [pw, setPw] = React.useState("")
  
    function handleSubmit() {
  
      const data = {
        emailid: em,
        password: pw
      }
  
      console.log("Before Sending Data:", data);
  
      fetch("http://localhost:4000/users/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(res => {
            console.log(res)
            if (res.code === 200) {
              Cookies.set("token", res.token);
              window.location.href = "/dashboard"
            } else {
              alert("Signin failed: " + res.message)
            }
          })
          .catch(err => console.log(err))
    }

  return (
    <div className='sign'>
      <table>

        <tr>
          <td colSpan={2}> <h4> <u> Signin Page </u> </h4> </td>
        </tr>

        <tr>
          <td> <label htmlFor='em'> Email: </label> </td>
          <td> <input type="text" id='em' name='em' value={em} onChange={(e) => setEm(e.target.value)} /> </td>
        </tr>

        <tr>
          <td> <label htmlFor='pw'> Password: </label> </td>
          <td> <input type="password" id='pw' name='pw' value={pw} onChange={(e) => setPw(e.target.value)} /> </td>
        </tr>

        <tr>
          <td colSpan={2}> <button onClick={handleSubmit}> <b>Signin</b> </button> </td>
        </tr>

        <tr>
          <td> <a href="/forgotpw"> Forgot Password? </a> </td>
          <td> <a href="/signup"> New User? Click Here to Signup </a> </td>
        </tr>

      </table>
    </div>
  )
}

export default Signin
