/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from '../middleware/userServices';
import { useNavigate } from 'react-router-dom';

const UserView = () => {

  const {users,loading} = useSelector(state => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
     dispatch(getAllUsers());
  },[]);

  const tableBody = users.map((user,index) => {
    return (
      <tr key={index}>
          <td>{index+1}</td>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>
              <div className="btn-group" role="group">
                  <button className="btn btn-danger" onClick={() => dispatch(deleteUser(user._id))}><i className="fa-solid fa-trash"></i></button>
                  <button className="btn btn-success" onClick={() => navigate(`/edit/${user._id}`)}><i className="fa-solid fa-pen-to-square"></i></button>
              </div>
          </td>
      </tr>
  )
  })

  return (
    <div className='container'>
        <h2>User List</h2>
        {loading ? <p>Loading...</p> 
        :
        <table className='table table-striped table-bordered'>
          <thead>
              <tr>
                  <th>Sl. No.</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              {tableBody}
          </tbody>
      </table>
        }    
    </div>
  )
}

export default UserView
