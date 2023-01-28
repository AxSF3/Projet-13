import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfil, editUser } from "../features/authSlice.js";
import Spinner from "../components/Spinner";

function HeaderProfile() {
  const dispatch = useDispatch();
  const [updateForm, setUpdateForm] = useState(false);
  const { lastName, firstName, isLoading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
  });

  const update = (event) => {
    event.preventDefault();
    setUpdateForm(false);
    dispatch(editUser(formData));
    dispatch(getProfil());
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {!updateForm ? `${firstName}  ${lastName} !` : ""}
      </h1>
      {updateForm ? (
        <form className="edit-in-content" method="POST">
          <div className="input-edit-wrapper">
            <div className="input-wrapper">
              <label htmlFor="lastName" className="sr-only">
                lastname
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                defaultValue={lastName}
                onChange={onChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="firstName" className="sr-only">
                firstname
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                defaultValue={firstName}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="edit-form-button">
            <button className="edit-button" type="submit" onClick={update}>
              Save
            </button>
            <button
              className="edit-button"
              type="button"
              onClick={() => setUpdateForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button className="edit-button" onClick={() => setUpdateForm(true)}>
          Edit Name
        </button>
      )}
    </div>
  );
}

export default HeaderProfile;
