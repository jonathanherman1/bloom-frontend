import React, { useState } from 'react';

import * as styles from "./SignupForm.module.css"
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

const SignupForm = ({ setDisplayedForm, handleSignup}) => {
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
      <form 
        className={styles.form}
        onSubmit={e => handleSignup(e, state)}>
          <h4 className={styles.signUpText}>Sign Up<i class="fas fa-leaf" id={styles.leafIcon}></i></h4>

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
      <div className={styles.loginContainer}>
        <Button onClick={() => setDisplayedForm('login')}>Login</Button>
      </div>
      </>
    );
}

export default SignupForm;

SignupForm.propTypes = {
  handleSignup: PropTypes.func.isRequired
};