import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

function Signup() {

  const navigate = useNavigate();

  const [fn, setFn] = React.useState("")
  const [ln, setLn] = React.useState("")
  const [em, setEm] = React.useState("")
  const [ph, setPh] = React.useState("")
  const [pw, setPw] = React.useState("")
  const [cpw, setCpw] = React.useState("")

  function handleSubmit() {

    if (pw !== cpw) {
      alert("Password and Confirm Password do not match!")
      return
    }

    const data = {
      firstname: fn,
      lastname: ln,
      emailid: em,
      phone: ph,
      password: pw
    }

    console.log("Before Sending Data:", data);

    fetch(`${API_URL}/users/signup`, {
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
            alert("Signup successful! Please signin to continue.");
            navigate("/signin");
          } else {
            alert("Signup failed: " + res.message)
          }
        })
        .catch(err => console.log(err))
  }

  return (
    <div className='sign'>
      <table>

        <tr>
          <td colSpan={2}> <h4> <u> Signup Page </u> </h4> </td>
        </tr>

        <tr>
          <td> <label htmlFor='fn'>   First Name: </label> </td>
          <td> <input type="text" id='fn' name='fn' value={fn} onChange={(e) => setFn(e.target.value)} /> </td>
        </tr>

        <tr>
          <td> <label htmlFor='ln'>   Last Name: </label> </td>
          <td> <input type="text" id='ln' name='ln' value={ln} onChange={(e) => setLn(e.target.value)} /> </td>
        </tr>

        <tr>
          <td> <label htmlFor='em'>   Email: </label> </td>
          <td> <input type="email" id='em' name='em' value={em} onChange={(e) => setEm(e.target.value)} /> </td>
        </tr>

        <tr>
          <td> <label htmlFor='ph'>   Phone: </label> </td>
          <td> <input type="text" id='ph' name='ph' value={ph} onChange={(e) => setPh(e.target.value)} /> </td>
        </tr>

        <tr>
          <td> <label htmlFor='pw'> Password: </label> </td>
          <td> <input type="password" id='pw' name='pw' value={pw} onChange={(e) => setPw(e.target.value)} /> </td>
        </tr>

        <tr>
          <td> <label htmlFor='cpw'> Confirm Password: </label> </td>
          <td> <input type="password" id='cpw' name='cpw' value={cpw} onChange={(e) => setCpw(e.target.value)} /> </td>
        </tr>

        <tr>
          <td colSpan={2}> <button onClick={handleSubmit}> <b>Signup</b> </button> </td>
        </tr>

        <tr>
          <td> <a href="/">  </a> </td>
          <td> <a href="/signin"> Exixting user - signin here </a> </td>
        </tr>

      </table>
    </div>
  )
}

export default Signup
