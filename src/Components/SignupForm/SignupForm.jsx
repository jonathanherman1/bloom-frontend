import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import * as styles from "./SignupForm.module.css"
import PropTypes from 'prop-types';

const SignupForm = (props) => {
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
      <form 
        className={styles.form}
        onSubmit={e => props.handleSignup(e, state)}>
        <h4>Sign Up</h4>

        <TextField
          type="text"
          name="username"
          label="Username"
          value={state.username}
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />

        <TextField
          type="password"
          name="password"
          label="Password"
          value={state.password}
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    );
}

export default SignupForm;

SignupForm.propTypes = {
  handleSignup: PropTypes.func.isRequired
};