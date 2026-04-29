import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sorthinglist from './Sortinglist';
import PaginationPage from './PaginationPage';
import UserList from './UserList';
import Counter from './Counter';
import Users from './Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Users/>
    {/* <Counter/> */}
    {/* <UserList/> */}
    {/* <PaginationPage/> */}
    {/* <Sorthinglist/> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
