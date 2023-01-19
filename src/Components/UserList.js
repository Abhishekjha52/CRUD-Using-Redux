/*
  This component is responsible for rendering the list of users and handling the edit and delete functionality.
*/

import React from "react";
import { useSelector } from "react-redux";

const UserList = ({users, handleEdit, handleDelete}) => {
  // const inputUser = useSelector(state => state.users);
  // if(!inputUser){
  //   return null;
  // }
  console.log(users, "userArray");
  return (
      <div>
      {users.map((user, index) => {
        return (
          <div key={index} className="box mb-3 d-flex align-items-stretch border border-secondary">
            <div className="box-body">
              <h5 className="box-text">Name : {user.name}</h5>
              <h5 className="box-text">Age : {user.age}</h5>
              <h5 className="box-text">City : {user.city}</h5>
              <div className="d-flex">
                <button
                  className="btn btn-info mr-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })
      // :null
      }
    </div>
  );
};

export default UserList;
