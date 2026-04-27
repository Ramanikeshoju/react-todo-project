import { useEffect , useState } from "react"
import "./sortingList.css"

const instant_value = [{
        Name : "Vijay",
        age : 25,
        Place : "Hyderabad",
        id :  1
    },
    {
        Name : "Vikranth",
        age : 26,
        Place : "Chennai",
        id :  2
    },
    {
        Name : "Varma",
        age : 27,
        Place : "Pune",
        id : 5
    },
    {
        Name : "Vimal krishna",
        age : 28,
        Place : "Tirupathi",
        id : 4
    },
    {
        Name : "Prathap",
        age : 29,
        Place : "Nellore",
        id : 5
    }
    
]

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