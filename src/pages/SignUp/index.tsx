import './styles.scss';

import React, { useState } from 'react';

// import { register } from '../../utils/auth';

export default function SignUp() {
  const [currentUser, setCurrentUser] = useState({ name: '', password: '', email: '' });

  const handleChange = (e) => {
    const { value, id } = e.target;
    setCurrentUser({
      ...currentUser,
      [id]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // register(currentUser.email, currentUser.password, currentUser.name);
  };
  return (
    <div className="SignUp">
      <div className="SignUp_Container">
        <h1 className="SignUp_Title">Create Account</h1>
        <form className="SignUp_Form" onSubmit={handleRegister}>
          <div className="SignUp_Form_Element">
            <label className="SignUp_Form_Element_Label" htmlFor="name">
              Name
            </label>
            <input
              className="SignUp_Form_Element_Input"
              type="text"
              id="name"
              value={currentUser.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="SignUp_Form_Element">
            <label className="SignUp_Form_Element_Label" htmlFor="email">
              Email
            </label>
            <input
              className="SignUp_Form_Element_Input"
              type="email"
              id="email"
              value={currentUser.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="SignUp_Form_Element">
            <label className="SignUp_Form_Element_Label" htmlFor="password">
              Password
            </label>
            <input
              className="SignUp_Form_Element_Input"
              type="password"
              id="password"
              value={currentUser.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className="SignUp_Form_Button" type="submit">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
}
