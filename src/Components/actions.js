/*
  the 'action' components are responsible for calling the action to update the state. 
  This action is created in 'action.js' file, where we are calling the 'dispatch' function 
  and passing the action. 
  These actions are of 4 types ADD_USER, EDIT_USER, FETCH_USER, DELETE_USER 
  and these are defined in 'types.js' file.

  This file contains the functions that dispatch the different types of actions that can be performed, 
  such as adding a user, editing a user, fetching users, and deleting a user.
*/
import { ADD_USER, EDIT_USER, FETCH_USERS, RESET_USER, DELETE_USER, UPDATE_FORM_DATA} from "./types";

export const addUser = (userData, id) => {
  return {
    type: ADD_USER,
    payload: userData
  };
};

export const editUser = (userData, index) => {
  return {
    type: EDIT_USER,
    payload: { userData, index }
  };
};

export const fetchUsers = (index) => {
  return {
    type: FETCH_USERS,
    payload: index
  };
};

export const resetUser = () => {
  return {
    type: RESET_USER
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id
  };
};

export const updateFormData = (formData) => {
  return {
    type: UPDATE_FORM_DATA,
    payload: formData,
  };
};
