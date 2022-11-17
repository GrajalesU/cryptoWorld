import './styles.scss';
import React from 'react';
import Social from './components/Social';

export default function Login() {
  return (
    <div className="Login">
      <div className="Login_Container">
        <h1 className="Login_Title">Login</h1>
        <form className="Login_Form">
          <div className="Login_Form_Element">
            <label className="Login_Form_Element_Label" htmlFor="email">
              Email
            </label>
            <input className="Login_Form_Element_Input" type="email" id="email" />
          </div>
          <div className="Login_Form_Element">
            <label className="Login_Form_Element_Label" htmlFor="password">
              Password
            </label>
            <input className="Login_Form_Element_Input" type="password" id="password" />
          </div>
          <button className="Login_Form_Button" type="submit">
            SIGN IN
          </button>
        </form>
        <small className="Login_Redirect">Create account</small>
        <Social />
      </div>
    </div>
  );
}
