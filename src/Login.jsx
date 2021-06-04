import React, { useState } from 'react';
import './login.scss';

function Login({ getUser, logOut, user }) {
  const [userName, setUserName] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [isUser, setIsUser] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputValueIsUser, setInputValueIsUSer] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);s

  const reset = () => {
    setInputValue('');
    setInputValueIsUSer('');
    setDisabled(true);
    setUserName('');
    setIsUser(false);
  };
  return (
    <div className="container__form">
      <form className="form__container">
        <div className="form__container__input-group">
          <label htmlFor="name" className="form__container__input-group__label">
            <i class="fas fa-user-lock"></i>
            Login
          </label>
          <input
            className="input"
            onChange={(e) => {
              e.preventDefault();
              setInputValue(e.target.value);
              setUserName(e.target.value);
              if (e.target.value === 'A') setDisabled(false);
              if (e.target.value !== 'A') setDisabled(true);
            }}
            value={inputValue}
            type="text"
            placeholder="username"
            required
          />

          <input
            className="input"
            value={inputValueIsUser}
            onChange={(e) => {
              e.preventDefault();
              setInputValueIsUSer(e.target.value);
              if (e.target.value === 'user') setIsUser(true);
            }}
            maxLength="5"
            type="text"
            placeholder="admin/user"
            disabled={disabled}
          />
          <button
            className="loginBtn"
            onClick={(e) => {
              e.preventDefault();
              if (!user) {
                if (userName === 'A' || userName === 'B') {
                  getUser({ userName, isUser });
                  // setIsLoggedIn(true);
                  reset();
                } else {
                  reset();
                  return;
                }
              }
              if (user) {
                logOut();
                // setIsLoggedIn(false);
                reset();
                return;
              }
            }}
          >
            {!user ? 'login' : 'logout'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
