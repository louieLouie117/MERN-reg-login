import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";


const Dashboard = () => {

    const logout = () => {
      axios
        .post(
          "http://localhost:8000/api/logout",
          {},
          {
            // need to send the cookie in request so server can clear it
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch(console.log);
  
      navigate("/");
    };
  

    const [users, setUsers] = useState([]);

    const getLoggedInUser = () => {
      axios
        .get("http://localhost:8000/api/users/loggedin", {
          withCredentials: true,
        })
        .then((res) => console.log(res))
        .catch(console.log);
    };
  
    useEffect(() => {
      axios
        .get("http://localhost:8000/api/users", {
          withCredentials: true,
        })
        .then((res) => {
          setUsers(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log("Not Authorized!!!");
          console.log(err.response);
        // not authorized redirect to homepage
          navigate("/");
        });
    }, []);


    return (
<div className="container">
{ <button onClick={logout}>Logout</button>}

      <h3>All Users:</h3>
      <button onClick={getLoggedInUser}>Get Logged In User</button>
      <table>
        <tbody>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Created On</th>
          </tr>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}



export default Dashboard
