import React, { useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signin.css';
export default function LoginForm() {
  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmailid] = useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

const handleEmailidChange = (event) => {
    setEmailid(event.target.value);
  };
const handleSubmit=(event)=>{
    event.preventDefault();
    const data={username,password,email};
axios.get(`http://localhost:8080/user/log/${username}/${password}`,data).then((res)=>
    {
      if(res.data===true){
      navigate("/cards");
      }
      else{alert('Enter valid username/password')}
    })
    }
return (   
    <div className="form">
      <form  className="form" onSubmit={handleSubmit}>
        <h2><b>LOG IN</b></h2>
        <div className="input-box">
          <i className="fa fa-user" aria-hidden="true"></i>
          <input type="email" name="email" placeholder="Email" 
         onChange={handleEmailidChange} value={email}required />
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
      </div>
      <button className="btn btn-info my-2" >
LOGIN
</button>
<div>
<Link to={"/signup"}>Sign Up</Link>
</div>
<br></br>
        <b>Happy Login!</b>
         </form>
    </div>
  );}

