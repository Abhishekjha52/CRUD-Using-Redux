/*
  This is the main component of the application, which renders the form, user list, 
  and handles the add, edit, and delete functionality. 
  It uses the useSelector and useDispatch hooks from the 'react-redux' library to 
  access the state and dispatch actions, respectively.
*/
import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "./Components/Form";
import UserList from "./Components/UserList";
import { addUser, editUser, deleteUser } from "./Components/actions";
import { v4 as uuidv4 } from "uuid";


const App = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    city: "",
  });

  const [activeInd, setActiveInd] = useState(-1);

  const addOrUpdateUser = (e) => {
    e.preventDefault();
    if (activeInd !== -1) {
      updateUser();
    } else {
      createUser();
    }
  };

  const createUser = () => {
    const user = { id: uuidv4(), ...formData };
    dispatch(addUser(user));
    resetFormData();
  };

  const updateUser = () => {
    const user = {...formData};
    dispatch(editUser(user, activeInd));
    resetFormData();
    setActiveInd(-1);
  };


  const resetFormData = () => {
    setFormData({ name: "", age: 0, city: "" });
  };

  const handleEdit = (index) => {
    const user = users[index];
    setFormData({ name: user.name, age: user.age, city: user.city });
    setActiveInd(index);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteUser(id));
    }
    setActiveInd(-1);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const {users} = useSelector((state) => state.users);
  
  return (
    <div>
      <center>
        <h2 className="main-header">React CRUD Operations</h2>
      </center>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
            <Form
              onSubmit={addOrUpdateUser}
              formData={formData}
              onChange={onChange}
              activeInd={activeInd}
            />
          </div>
        </div>
      </div>

      <UserList
        users={users}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
