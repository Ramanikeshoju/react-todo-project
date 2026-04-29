import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(function (res) {
        setUsers(res.data);
      });
  }

 
  function handleInputChange(e) {
    setSearch(e.target.value);
  }


  function handleSearchClick() {
    setSearch(search);
  }


  function handleSortAsc() {
    setSortOrder("asc");
  }


  function handleSortDesc() {
    setSortOrder("desc");
  }


  function getFilteredUsers() {
    return users.filter(function (user) {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  }


  function getSortedUsers(filteredUsers) {
    let sorted = [...filteredUsers];

    if (sortOrder === "asc") {
      sorted.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    } else if (sortOrder === "desc") {
      sorted.sort(function (a, b) {
        return b.name.localeCompare(a.name);
      });
    }

    return sorted;
  }


  const filteredUsers = getFilteredUsers();
  const finalUsers = getSortedUsers(filteredUsers);

  return (
    <div className="container">

      <h2>User List</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Search name"
          value={search}
          onChange={handleInputChange}
        />

        <button onClick={handleSearchClick}>
          Search
        </button>

        <button onClick={handleSortAsc}>
          ⬆
        </button>

        <button onClick={handleSortDesc}>
          ⬇
        </button>
      </div>

      <div className="list">
        {finalUsers.length === 0 ? (
          <p>No Data Found</p>
        ) : (
          finalUsers.map(function (user) {
            return (
              <div className="card" key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}

export default UserList;