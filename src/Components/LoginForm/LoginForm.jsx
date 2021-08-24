import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
  const [ state, setState ] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };
  
    return (
      <form onSubmit={e => props.handleLogin(e, state)}>
        <h4>Log In</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    );
  }


export default LoginForm;

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired
};