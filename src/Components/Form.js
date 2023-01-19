/*
  This component is responsible for rendering the form and handling the form data and submit functionality.
*/
import React from "react";
import { useSelector } from "react-redux";

const Form = ({onSubmit, formData, onChange, activeInd}) => {
  const users = useSelector(state => state.users);
//   if(!users){
//     return null;
//   }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label className="font-weight-bold">Name</label>
        <input
          type="text"
          name="name"
          className="form-control form-control-lg"
          value={formData.name}
          placeholder="Enter Name"
          onChange={onChange}
          required
        />
      </div>
      <br />
      <div className="form-group">
        <label className="font-weight-bold">Age</label>
        <input
          type="number"
          name="age"
          className="form-control form-control-lg"
          value={formData.age !== 0 ? formData.age : ""}
          placeholder="Enter Age"
          onChange={onChange}
          required
        />
      </div>
      <br />
      <div className="form-group">
        <label className="font-weight-bold">City</label>
        <input
          type="text"
          name="city"
          className="form-control form-control-lg"
          value={formData.city}
          placeholder="Enter City"
          onChange={onChange}
          required
        />
      </div>
      <br />
      <button className="btn btn-success btn-lg btn-block">
        {activeInd !== -1 ? "UPDATE" : "ADD"}
      </button>
    </form>
  );
};

export default Form;
