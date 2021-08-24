import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';
import styles from './LoginForm.module.css'

const LoginForm = ({ setDisplayedForm, handleLogin }) => {
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
      <>
      <form className={styles.form} onSubmit={e => handleLogin(e, state)}>
        <h4>Log In</h4>

        <TextField
          type="text"
          name="username"
          label="Username"
          value={state.username}
          variant="outlined"
          autoComplete="off"
          fullWidth
          onChange={handleChange}
        />

        <TextField
          type="password"
          name="password"
          label="Password"
          value={state.password}
          variant="outlined"
          autoComplete="off"
          fullWidth
          onChange={handleChange}
        />
       
       <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
      <Button onClick={() => setDisplayedForm('signup')}>Signup</Button>
      </>
    );
  }


export default LoginForm;

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired
};