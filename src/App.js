// import logo from './logo.svg';
import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  // const [inputValue, setInputValue] = useState('');
  // const [description, setDescription] = useState('');

  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // const handleDescriptionChange = (e) => {
  //   setDescription(e.target.value);
  // };


  const [form, setForm] = useState({
    inputValue: '',
    description: ''
  });
  //  arrow function to handle change in input fields and update the form state - event handling
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // {(e) => setInputValue(e.target.value)}

  // state to store tasks and input value

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.inputValue);
    if (form.inputValue.trim() !== '') {
      setTasks([...tasks, form]);  //... spread operator to add new task to existing tasks
      setForm({ inputValue: '', description: '' });
    }
  };

  //Delete task using filter method:
  const handleDelete = (index) => {
    //index 2 
    // 1 !==2
    //2 !==2 false                                                        
    const newTasks = tasks.filter((task, i) => i !== index);    // i is elements in array and index is the index of task to be deleted

    console.log("Task deleted:", newTasks);
    setTasks(newTasks);
  };

  //Update task using map method:
  const handleUpdate = (index) => {
    const newTask = prompt('Enter the new task:');
    if (newTask && newTask.trim() !== '') {
      const updatedTasks = tasks.map((task, i) => (i === index ? newTask : task));
      console.log("Task updated:", updatedTasks);
      setTasks(updatedTasks);
    }
  };


  return (
    <div>
      <center>
        <h4>To-Do Application Management</h4>

        <form >


          <input type="text" placeholder='Enter the Task' name="inputValue" value={form.inputValue} onChange={handleChange} /> &nbsp;&nbsp;
          <input type="text" placeholder='Enter the Description' name="description" value={form.description} onChange={handleChange} /> &nbsp;&nbsp;
          {/* <input type='submit' value="Add" name='Add' /> */}

          <button onClick={handleSubmit}>Add</button>

          {/* if params are not passed */}
        </form>

        {/* add button to submit the form and add task to the list */}

        {/* // display the list of tasks using map method and add edit and delete button for each task */} 
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.inputValue} &nbsp;&nbsp;
              
              <button onClick={() => handleUpdate(index)}>Edit</button> &nbsp;&nbsp;
              {/* if params are passed */}
              <button onClick={() => handleDelete(index)}>Delete</button> <br />

              {task.description} &nbsp;&nbsp;
            </li>
          ))}
        </ul>
      </center>

    </div>
  );
}

export default App;


// employee details
// 4 to 5 fields
// when we click on edit the employee details should be shown in the form and we can edit the details and update the employee details in the list

