import React, { useState } from 'react';
import './login.scss';

function Login({ logIn, logOut, user, languageSwitch }) {
  const [userName, setUserName] = useState('');

  return (
    <div className="container__form">
      <form className="form__container">
        <div className="form__container__input-group">
          <label htmlFor="name" className="form__container__input-group__label">
            {user ? (
              <i className="fas fa-user"></i>
            ) : (
              <i className="fas fa-user-lock"></i>
            )}

            {user ? user.userName : 'Login'}
          </label>
          {!user && (
            <input
              className="input"
              onChange={(e) => {
                e.preventDefault();
                setUserName(e.target.value);
              }}
              value={userName}
              type="text"
              placeholder="username"
              required
            />
          )}

          <button
            className="loginBtn"
            onClick={(e) => {
              e.preventDefault();
              if (!user && userName) {
                logIn(userName);
                setUserName('');
                return;
              }
              if (user) {
                logOut();
              }
            }}
          >
            {!user ? 'login' : 'logout'}
          </button>
          <button
            className="languageBtn"
            onClick={(e) => {
              e.preventDefault();
              languageSwitch();
            }}
          >
            Language
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
