import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import './Home.css'

export default function Home() {
const[user,setUser]=useState([])
const {bookno}=useParams()
useEffect(()=>
{
 loadUsers(); 
},[]);
const loadUsers=async()=>{
    const result=await axios.get("http://localhost:8080/fetchBooks");
    setUser(result.data);
}
const deleteUser=async(bookno)=>{
  await axios.delete(`http://localhost:8080/deleteBooks/${bookno}`)
  loadUsers()
}



  return (
    <div className='container'>
<div className='py-4'>
<div>

<nav class="navbar navbar-light bg-secondary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>THE BOOK GALLERY</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="btn btn-outline-light" to="/saveBooks">
        Add Books
        </Link>
  </div>
</nav>
    </div>
<table className="table table-striped">
  <thead >
    <tr>
      <th scope="col">BookNumber</th>
     
      <th scope="col">BookName</th>
      <th scope="col">Author</th>
      <th scope="col">Year</th>
      <th scope="col">Quantity</th>
      <th scope="col">CRUD Operations</th>
    </tr>
  </thead>
  <tbody>
    {
        user.map((user,index)=>(
             <tr>
      <th scope="row" key={index}>{index+1}</th>
     
      <td>{user.name}</td>
      <td>{user.author}</td>
      <td>{user.year}</td>
      <td>{user.quantity}</td>
      <td>
      <Link className="btn btn-info mx-2" to={`/getBooks/${user.bookno}`}>
        GET</Link>
      <Link className="btn btn-secondary mx-2" 
        
        to={`/updateBooks`}
        >
        UPDATE</Link>
      <button className="btn btn-danger mx-2" 
      
      onClick={()=>deleteUser(user.bookno)}
      
      
      
      >  DELETE</button>
      </td>
      
    </tr>
        ))
    }
    
  </tbody>
</table>
</div>
    </div>
  )
}
