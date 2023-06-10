import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div>

<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
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
  )
}
