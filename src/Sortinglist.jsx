import { useState } from "react"
import "./sortingList.css"

const instant_value =[
    {
        Name: "Vijay",
        age: 25,
        Place: "Hyderabad",
        id: 1
    },
    {
        Name: "Vikranth",
        age: 26,
        Place: "Chennai",
        id: 2
    },
    {
        Name: "Varma",
        age: 27,
        Place: "Pune",
        id: 3
    },
    {
        Name: "Vimal Krishna",
        age: 28,
        Place: "Tirupathi",
        id: 4
    },
    {
        Name: "Prathap",
        age: 29,
        Place: "Nellore",
        id: 5
    },

    // --- 10 New Entries ---
    {
        Name: "Arjun",
        age: 22,
        Place: "Bangalore",
        id: 6
    },
    {
        Name: "Kiran",
        age: 24,
        Place: "Mumbai",
        id: 7
    },
    {
        Name: "Ravi",
        age: 30,
        Place: "Delhi",
        id: 8
    },
    {
        Name: "Suresh",
        age: 23,
        Place: "Kolkata",
        id: 9
    },
    {
        Name: "Mahesh",
        age: 31,
        Place: "Ahmedabad",
        id: 10
    },
    {
        Name: "Deepak",
        age: 27,
        Place: "Jaipur",
        id: 11
    },
    {
        Name: "Ramesh",
        age: 33,
        Place: "Surat",
        id: 12
    },
    {
        Name: "Harish",
        age: 21,
        Place: "Lucknow",
        id: 13
    },
    {
        Name: "Ganesh",
        age: 35,
        Place: "Chandigarh",
        id: 14
    },
    {
        Name: "Lokesh",
        age: 28,
        Place: "Bhopal",
        id: 15
    }
];

function Sorthinglist () {
    const [sortlist , setSortlist] = useState(instant_value)
    const [search , setSearch] = useState(" ")
    return (
      <div className="container">
          <div className="search-box">
            <input type="text" 
            placeholder="Enter Input" 
            value ={search}
            onChange={(e) => setSearch(e.target.value)}
             />
            <button>Search</button>
          </div>

        <div className="list">
            {sortlist.filter(value => value.Name.toLowerCase().includes(search)).map((value, index) => (
          <div className="card" key={index}>
            <h1>Name : {value.Name}</h1>
            <h2>Age : {value.age}</h2>
            <h3>Place : {value.Place}</h3>
          </div>
    ))}
  </div>
</div>
    )

}

export default Sorthinglist