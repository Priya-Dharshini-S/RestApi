import React, { useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signin.css';
export default function LoginForm() {
  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmailid] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailidChange = (event) => {
    setEmailid(event.target.value);
  };

  const handleAgeChange = (event) =>
  {
    setAge(event.target.value);
  }
  const handleGenderChange = (event) =>
  {
    setGender(event.target.value);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    const data={username,password,email,age,gender,};

     axios.post(`http://localhost:8080/user/adduser`,data);
     navigate("/");
    //  .then((res)=>
    //  {
    //   if(res.data)
    //   {
    //     navigate("/")
    //   }
    //   else{
    //     alert("hi")
    //   }
    //  })
      
    
    }





  return (
   
    <div className="form">
      <form  className="form" onSubmit={handleSubmit}>
        <h2><b>SIGN UP</b></h2>
        <div className="input-box">
          <i className="fa fa-user" aria-hidden="true"></i>
      
          <input type="email" name="email" placeholder="Email" 
         onChange={handleEmailidChange} value={email}
          required />
        
        </div>

        <div className="input-box">
          <i className="fa fa-unlock-alt" aria-hidden="true"></i>
          <input type="username" name="username" placeholder="Username" onChange={handleUsernameChange} value={username} required/>

           <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            pattern="(?=.*\d)(?=.*[a-z]).{3,}"
            value={password}
            title="Must contain at least one number and  lowercase letter"
           
          /> 
          <input type="number" name="age" onChange={handleAgeChange} placeholder='age' value={age}></input>
          <div><input type="text" name="gender" onChange={handleGenderChange} placeholder='Gender' value={gender}></input></div>



         
        </div>
        <button className="btn btn-info my-2" >SIGN UP</button>

         </form>
    </div>
  );
}
