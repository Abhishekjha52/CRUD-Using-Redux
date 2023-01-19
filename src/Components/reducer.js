/*
    Reducers are responsible for updating the state of the application based on the action that was dispatched. 
    They do this by checking the type of the action and performing the appropriate state updates.

    The 'reducer.js' component is responsible for updating the state according to the actions received by it

    This file is responsible for updating the state based on the actions received. It checks the type of the action and performs the appropriate state updates.
*/
import {
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
  UPDATE_FORM_DATA,
} from "./types";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, ...[action.payload]],
      };
    case EDIT_USER:
      const updatedUsers = state.users.map((user, index) => {
        console.log(user, index, action.payload);
        if (index === action.payload.index) {
          return action.payload.userData;
        }
        return user;
      });
      return {
        ...state,
        users: updatedUsers,
      };
    case DELETE_USER:
      const filteredUsers = Object.values(state.users).filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: filteredUsers,
      };
    case UPDATE_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
