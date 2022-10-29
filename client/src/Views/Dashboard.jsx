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
  


    // const getLoggedInUser = () => {
    //   axios
    //     .get("http://localhost:8000/api/users/loggedin", {
    //       withCredentials: true,
    //     })
    //     .then((res) => console.log(res))
    //     .catch(console.log);
    // };


    const [userId, setUserId] = useState([]);
    const [userName, setUserName] = useState([]);
    const [userEmail, setUserEmail] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
       
    axios
    .get("http://localhost:8000/api/users/loggedin", {
      withCredentials: true,
    })
    .then((res) => {
      console.log("user id", res.data._id);
      console.log("user name", res.data.name);
      console.log("user email", res.data.email);
      setUserId( res.data._id);
      setUserName( res.data.name);
      setUserEmail( res.data.email);


    })
    .catch((err) => {
        console.log("Get single user error!!!");
        console.log(err.response);
      // not authorized redirect to homepage
    });
    
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
<h1>Profile</h1>
  <h2>User id: {userId}</h2>
  <h2>User Name: {userName}</h2>
  <h2>User email: {userEmail}</h2>

{ <button onClick={logout}>Logout</button>}

      <h3>All Users:</h3>
      <table>
        <tbody>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Created On</th>
          </tr>
          {users.map((users) => (
            <tr key={users._id}>
              <td>{users._id}</td>
              <td>{users.username}</td>
              <td>{users.email}</td>
              <td>{users.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}



export default Dashboard
