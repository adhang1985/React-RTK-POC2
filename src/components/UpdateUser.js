import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from '../middleware/userServices';

const UpdateUser = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {users} = useSelector(state => state.userData);
  const [user,setUser] = useState({});


console.log(users);
useEffect(() => {
  if (id) {
    const singleUser = users.filter((ele) => ele._id === id);
    setUser(singleUser[0]);
  }
},[])

  const handleChange = (e) => {
      setUser({...user,[e.target.name]:e.target.value});
  }

  const handleSubmit = (e) => {
     e.preventDefault();
     dispatch(editUser(user));
     navigate('/');
  }


  return (
    <div className='container'>
        <h2>Edit User</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name='name' onChange={handleChange} value={user.name}/>
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input type="text" className="form-control" id="age" name='age' onChange={handleChange} value={user.age}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name='email' onChange={handleChange} value={user.email}/>
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role</label>
            <input type="text" className="form-control" id="role" name='role' onChange={handleChange} value={user.role}/>
          </div>
          <div className="btn-group" role="group" >
            <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>Cancel</button>
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
    </div>
  )
}

export default UpdateUser
