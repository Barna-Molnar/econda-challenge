import React, { useState } from 'react';
import './login.scss';

function Login({ test }) {
  const [userName, setUserName] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [isUser, setIsUser] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputValueIsUser, setInputValueIsUSer] = useState('');
  const textInput = React.useRef();

  const clearInput = () => (textInput.current.value = '');

  return (
    <div className="container__form">
      <form className="form__container">
        <div className="form__container__input-group">
          <label htmlFor="name" className="">
            username
          </label>
          <input
            className="input"
            // ref={textInput}
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
            // ref={this.inputRef}
          />

          <input
            className="input"
            // ref={textInput}
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
              test({ userName, isUser });
              setInputValue('');
              setInputValueIsUSer('');
            }}
            //   onClick={(e) => {
            //     e.preventDefault();
            //     console.log();
            //     this.props.login(this.state.username, this.state.pin);
            //     this.setState({
            //       username: '',
            //       pin: '',
            //     });
            //   }}
          >
            login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
