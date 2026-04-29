import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PaginationPage.css";

function PaginationPage() {

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const usersPerPage = 10;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {

        let bigData = [];

        for (let i = 0; i < 20; i++) {
          bigData = bigData.concat(res.data);
        }

        setUsers(bigData);
      });
  }, []);

  const lastIndex = page * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;

  const showUsers = users.slice(firstIndex, lastIndex);


  const totalPages = Math.ceil(users.length / usersPerPage);


  let pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">

      <h2>Pagination</h2>

      <div className="list">
        {showUsers.length === 0 ? (
          <h3>No Data Found</h3>
        ) : (
          showUsers.map((user, index) => (
            <div className="card" key={index}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>City: {user.address.city}</p>
            </div>
          ))
        )}
      </div>
      <div className="pagination">
        {pageNumbers.length === 0 ? (
          <p></p>
        ) : (
          pageNumbers.map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={page === num ? "active" : ""}
            >
              {num}
            </button>
          ))
        )}
      </div>

    </div>
  );
}

export default PaginationPage;

