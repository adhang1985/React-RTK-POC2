import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { createUser } from '../middleware/userServices';

const AddUser = () => {

    const [user,setUser] = useState({});

      const dispatch = useDispatch();
      const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
     }

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(createUser(user));
    navigate("/");
}

  return (
    <div className='container'>
        <Link to={"/"}>Back to users</Link>
        <h2>New User Registration</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name='name' onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input type="text" className="form-control" id="age" name='age' onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name='email' onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role</label>
            <input type="text" className="form-control" id="role" name='role' onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Add User</button>
        </form>
    </div>
  )
}

export default AddUser
