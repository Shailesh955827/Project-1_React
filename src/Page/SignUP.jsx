import React from "react";
import "../Componates/Navbar.css";
import { useState } from "react";

function SignUP()
{
    const[formData,setFormData] = useState({
        username:"",
        password:"",
        pincode:"",
        address:"",
    });


    const handleChange = (e) =>
    {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const Submit = async (e) =>
    {
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:3000/signup",
            {
                method:"POST",
                headers: {"Content-type":"application/json"},
                body:JSON.stringify(formData),  
            });

            const data = await response.json();
            alert(data.message);
        }
        catch(err)
        {
            console.log("Error:", err);    
        }

        let exists = await user.findOne({username});
        if (exists) 
        {
            return res.send
            ({
                success: false,
                message: "Username already exists",
            });
        };
    };

    return(
        <>
        <div  className='sign-list1'>
            <form className='form-list' onSubmit={Submit}>
            <h1 className="h1-list">Sign Up</h1>
             <label htmlFor="">Username</label>
             <input name="username" type="text" onChange={handleChange} required/>

             <label htmlFor="">Password:</label>
             <input name="password" type="password" onChange={handleChange} required/>

             <label htmlFor="">Pincode:</label>
             <input name="pincode" onChange={handleChange} type="number" required/>
  
             <label htmlFor="">Address:</label>
             <input name="address" type="text" onChange={handleChange} required/>
             
             <button className='fobu-list' type='submit'>Submit</button>
            </form>
          </div>
        </>
    )
}

export default SignUP;