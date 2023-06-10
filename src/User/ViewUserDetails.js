import React, { Component, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Await } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
export default function ViewUserDetails()
{
    
    const[user,setUser]=useState({
        bookid:"",
        name:"",
        author:"",
        year:"",
        quantity:""
      })
    const {bookno}=useParams();
    useEffect(()=>{
loadUser()
    },[])
    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8080/getBooks/${bookno}`)
        setUser(result.data)
    }

    return(
     
    <div className="container">
    <div className="row">
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    <h1 className="text-center-4">Get your Book Details Here!</h1>
   
<div className="card">
    <div className="card-header">
      <h3><i>  Details Of The Book With Book Id:</i></h3>{user.bookno}
        <ul className="list-group list-group-flush">
           <li className="list-group-item">
                <b>BookNo:</b>
                {user.bookno}
            </li>
            <li className="list-group-item">
                <b>Book Name:</b>
                {user.name}
            </li>
            <li className="list-group-item">
                <b>Book Author:</b>
                {user.author}
            </li>
            <li className="list-group-item">
                <b>Book Year:</b>
                {user.year}
            </li>
            <li className="list-group-item">
                <b>Quantity:</b>
                {user.quantity}
            </li>
        </ul>
    </div>
</div>
<Link className="btn btn-info my-2" to={"/fetchBooks"}>
Back To Home
</Link>

</div>
</div>
</div>
        
    );
}