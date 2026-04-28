import { useEffect, useState } from 'react';
import React  from 'react'
import axios from 'axios';

function TodoAxios() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
            setData(res.data);
        })
    }, [])
  return (
    <div>
        <h1>ToDo Axios</h1>
        {data.map(item => 
            <li key={item.id}>{item.title}</li>
        )}
    </div>
  )
}

export default TodoAxios