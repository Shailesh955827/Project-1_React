import "../Componates/Navbar.css";
import React, { useState } from "react";

const Login = () => {

  const [formData,setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) =>
  {
    setFormData({...formData, [e.target.name] : e.target.value });
  };
  
  const Submit = async (e) => 
  {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/login", {
      method : "POST",
      headers : {"Content-type" : "application/json"},
      body:JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message);

  };

  return ( 
    <> 
      <div className='div-list1'>
        <form className='form-list' onSubmit={Submit}>
             <h1 className='h1-list'>Login</h1>

             <label htmlFor="">Username</label>
             <input name="username" placeholder='username' onChange={handleChange} required/>
  
             <label htmlFor="">Password</label>
             <input name="password" type="password" placeholder='password' onChange={handleChange} required/>
             
             <button className='fobu-list' type='submit'>Submit</button>
            </form>
      </div>
    </>
  )
}

export default Login;
