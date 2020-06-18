import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Login(props) {
  // How can we log in? What do we need to do?
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('login', login)
      .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.payload)
          props.history.push('/creatures')
      })
      .catch((err) => console.log(`Login error: ${err.response}`));
  };
  return (
    <div>
      <h1>Welcome to the Safari App!</h1>
      <h2>
        I can't show you more until you log in. Please build out a
        login.
      </h2>
      <form onSubmit = {handleSubmit}>
          <input 
            type = 'text'
            name = 'username'
            label = 'username'
            placeholder = 'username'
            value = {props.username}
            onChange={handleChange}
            className = 'input'
          />
          <input 
            type = 'password'
            name = 'password'
            label = 'password'
            placeholder = 'password'
            value = {props.password}
            onChange={handleChange}
            className = 'input'
          />
        <button className='start'>Start</button>
      </form>
    </div>
  );
}
