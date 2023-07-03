import React, { useState } from "react";
import PropTypes from "prop-types";


const UserForm = ({ onUserSubmit }) => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUserSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label htmlFor="username" className="form-label"></label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={handleInputChange}
          placeholder="Unesite korisničko ime"
        />
      </div>
      <button type="submit" className="button" onClick={handleSubmit}>
        Pretraži
      </button>
    </form>
  );
};

//definiranje propsa 
UserForm.propTypes = {
  onUserSubmit: PropTypes.func.isRequired,
};

export default UserForm;
