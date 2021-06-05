import React, { useState } from 'react';
import './login.scss';

function Login({ logIn, logOut, user }) {
  const [userName, setUserName] = useState('');

  return (
    <div className="container__form">
      <form className="form__container">
        <div className="form__container__input-group">
          <label htmlFor="name" className="form__container__input-group__label">
            <i className="fas fa-user-lock"></i>
            Login
          </label>
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

          <button
            className="loginBtn"
            onClick={(e) => {
              e.preventDefault();
              if (!user) {
                logIn(userName);
                setUserName('');
              }
              if (user) {
                logOut();
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
