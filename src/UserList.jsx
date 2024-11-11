// src/UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

// Functional component to fetch and display list of users
const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]); // State to store users
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Fetching data using Axios
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data); // Setting users data to state
        setLoading(false);
        console.log(response.data);
      })

      .catch((error) => {
        setError("Error fetching users");
        setLoading(false);
      });
  }, []); // Empty array means this effect runs only once (on mount)

  // If loading, show loading message as suggested
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's an error, then show the error message
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="header">
      <h1>Welcome to User Cartel </h1>
      <h2>User List</h2>
      <ul>
        {/* Mapping over the users array and display each user */}
        {listOfUsers.map((user) => (
          <li className="limargin" key={user.id}>
            <h3>{user.name}</h3>
            <p>UserName: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// exporting the userlist component
export default UserList;
