import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Material UI
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

// Styles
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
          <h4 className={styles.loginText} ><i class="fas fa-seedling" id={styles.loginIcon}></i>Log In</h4>

        <div>
          <h2 className={styles.text}>Welcome to Bloom! </h2>
          <p className={styles.text}>The place to organize your job hunt and grow your opportunities.</p>
        </div>

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
      <div className={styles.signUpContainer}>
        <Button onClick={() => setDisplayedForm('signup')}>Signup</Button>
      </div>
      </>
    );
  }


export default LoginForm;

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired
};