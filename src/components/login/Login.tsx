import React from 'react'
import { Modal } from '../Modal'
import './login.css'
const Login = () => {
  return (
      <form
        id="popUPForm--sing"
        action="#"
        method="post"
      >
        <div className="popUp__box">
          <div className="lable-wrapper">
            <label className="popUp__form-lable" htmlFor="email-sign"> E-mail </label>
            <div className="input__wrapper">
              <input

                className="popUp__form-input _req _email"
                type="email"
                id="email-sign"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
              />
              <span></span>
            </div>
          </div>
          <div className="lable-wrapper">
            <label className="popUp__form-lable" htmlFor="password-sign"> Password </label>
            <div className="input__wrapper">
              <input

                className="popUp__form-input _req"
                type="password"
                id="password-sign"
                name="password"
                placeholder=""
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"

                required
              />
              <span></span>
            </div>
          </div>
          <div className="flex justify-center"> <button className="popUp__form-button popUp__form-button--submit" type="submit">
            Sing Up
          </button></div>

        </div>
        <p className="popUp__form-text">
          Already have an account? Log in
          <a className="popUp__form-link--login" href="#">Login</a>
        </p>
      </form>
  
  )
}

export default Login