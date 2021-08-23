import React, { useState } from 'react'
// import { Link, useHistory } from 'react-router-dom'
import styles from './LoginForm.module.css'
// import * as authService from '../../services/authService'

const LoginForm = (props) => {
  // const history = useHistory()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  // const handleSubmit = evt => {
  //   evt.preventDefault()
  //   authService.login(formData)
  //   .then(() => {
  //     props.handleSignupOrLogin()
  //     history.push('/')
  //   })
  //   .catch(err => {
  //     alert('Invalid Credentials')
  //   })
  // }

  return (
    <form
      autoComplete="off"
      // onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="email-input" className={styles.label}>
          Email
        </label>
        <input
          type="text"
          autoComplete="off"
          id="email-input"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password-input" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="password-input"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className={styles.button}>Log In</button>
        {/* <Link to="/">
          <button>Cancel</button>
        </Link> */}
      </div>
    </form>
  )
}
 
export default LoginForm