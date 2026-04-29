import React, { useState, useEffect } from "react";
import axios from "axios";


function Users() {

  const [users, setUsers] = useState([]);

  useEffect(function () {
    fetchUsers();
  }, []);

  function fetchUsers() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(function (res) {
        setUsers(res.data);
      });
  }

  return (
    <div className="container">
      <h2>User List</h2>

      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        users.map(function (user) {
          return (
            <div className="card" key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Users;