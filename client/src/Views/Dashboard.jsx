import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";


const Dashboard = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

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
          setIsLoggedIn(true);
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
          console.log("not authorized");
          console.log(err.response);
  
          navigate("/");
        });
    }, []);



    return (
<div className="container">
{isLoggedIn && <button onClick={logout}>Logout</button>}

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
