import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const login = [
    { id: "1", name: "username" },
    { id: "2", name: "password" },
  ];

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;    
    
    setData({
      ...data,
      [name]: value, 
    });

    if(event.target.name === "password"){
      event.target.type =  "password";
    }
  };


  const handleClick = () => {
    const { username, password } = data;

    localStorage.setItem("username",JSON.stringify(username));
    localStorage.setItem("password",JSON.stringify(password));
    
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill all fields");
    } else {
      alert("Completed!");
      
    }
  };



  return (
    <div className="container">
      <h2>Login</h2>
      {login.map((field) => (
        <Input
          key={field.id}
          name={field.name}
          value={data[field.name]} 
          onChange={handleInputChange} 
        />
      ))}
      <Button handleClick={handleClick} />
      <p>Not registered? <span>Create an account</span></p>
    </div>
  );
}

export default App;



