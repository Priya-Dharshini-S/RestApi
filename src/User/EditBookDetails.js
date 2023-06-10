
import React, { useState } from 'react'
import axios from 'axios'
import { Await } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
export default function EditBookDetails() {

let navigate=useNavigate()

const[user,setUser]=useState({
  bookid:"",
  name:"",
  author:"",
  year:"",
  quantity:""
})

const{bookno,name,author,year,quantity}=user

const onInputChange=(e)=>{
setUser({...user, [e.target.name]:e.target.value})
}

const onSubmit=async(e)=>{
e.preventDefault();
await axios.put("http://localhost:8080/updateBooks",user);
navigate("/fetchBooks");
}

  return (<div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
<h2 className="text-center-4"><b>Wanna update book details?Edit here!</b></h2>

<form onSubmit={(e)=>onSubmit(e)}>

<div className="mb-3">
  <label htmlFor="Name" className="form-label">BookId</label>
<input type={"number"} className="form-control" placeholder="Enter book id" name="bookno" value={bookno} onChange={(e)=>onInputChange(e)}/>
</div>
<div className="mb-3">
  <label htmlFor="Name" className="form-label">Book Name</label>
<input type={"text"} className="form-control" placeholder="Enter book name" name="name" value={name} onChange={(e)=>onInputChange(e)}/>
</div>
<div className="mb-3">
  <label htmlFor="Name" className="form-label">Author</label>
<input type={"text"} className="form-control" placeholder="Enter book author" name="author" value={author} onChange={(e)=>onInputChange(e)}/>
</div>
<div className="mb-3">
  <label htmlFor="Name" className="form-label">Year</label>
<input type={"number"} className="form-control" placeholder="Enter year" name="year" min="1990" max="2025" value={year} onChange={(e)=>onInputChange(e)}/>
</div>
<div className="mb-3">
  <label htmlFor="Name" className="form-label">Quantity</label>
<input type={"number"} className="form-control" placeholder="Enter quantity" name="quantity" min="40" max="500" value={quantity} onChange={(e)=>onInputChange(e)}/>
</div>
<button type="submit " className="btn btn-info">UPDATE</button>
<Link className="btn btn-danger mx-2" to={"/fetchBooks"}>CANCEL</Link>


</form>

      </div>
    </div>
  </div>);

}
