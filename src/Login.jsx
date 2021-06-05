import React, { useState } from 'react';
import './login.scss';

function Login({ logIn, logOut, user }) {
  const [userName, setUserName] = useState('');
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="container__form">
      <form className="form__container">
        <div className="form__container__input-group">
          <label htmlFor="name" className="form__container__input-group__label">
            {user ? (
              <i class="fas fa-user"></i>
            ) : (
              <i className="fas fa-user-lock"></i>
            )}

            {user ? user.userName : 'Login'}
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
            disabled={disabled}
          />

          <button
            className="loginBtn"
            onClick={(e) => {
              e.preventDefault();
              if (!user && userName) {
                logIn(userName);
                setUserName('');
                setDisabled(true);
              }
              if (user) {
                logOut();
                setDisabled(false);
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
