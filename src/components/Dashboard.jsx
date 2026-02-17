import React, { useEffect } from "react";
import Cookies from "js-cookie";

function Dashboard() {

  useEffect(() => {

    fetch("http://pbl.klef.in/users/uinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: Cookies.get("token") })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);

        if (res.code === 200) {
          console.log("User Info:", res);
          Cookies.set("user", JSON.stringify(res));
        } else {
          alert("Menu failed: " + res.message);
        }
      })
      .catch(err => console.log(err));

  }, []); // runs only once

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
