import React, { useState, useEffect } from 'react';
import UserCard from "./components/UserCard"
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    // Start fetching users
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON data
      })
      .then(data => {
        setUsers(data); // Set the users data into state
        
      })
      .catch(error => {
        setError(error.message); // Set error message if there's an issue
      });
  }, []); // Empty dependency array ensures this runs only once after mount

 

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Users List</h1>
      {users.map((user) => {
        return <UserCard key={user.id} user={user}/>
      })}
    </div>
  );
}

export default App;


