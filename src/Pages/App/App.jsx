import React, { useState, useEffect } from 'react';
import {
  Switch,
  createTheme,
  ThemeProvider,
  CssBaseline
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { BrowserRouter as Router, Route} from 'react-router-dom'

// Components
import Nav from '../../Components/Nav/Nav'
import LoginForm from '../../Components/LoginForm/LoginForm'
import SignupForm from '../../Components/SignupForm/SignupForm'
import NewOpportunityForm from '../../Components/NewOpportunityForm/NewOpportunityForm';

// Services

// Styles
import './App.css';
import ContactForm from '../../Components/ContactForm/ContactForm';

const App = (props) => {
      const [ darkMode, setDarkMode ] = useState(false);
      const [ loggedIn, setLoggedIn ] = useState(localStorage.getItem('token') ? true : false)
      const [ displayedForm, setDisplayedForm ] = useState ('')
      const [ username, setUsername ] = useState ('')

      const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
      prefersDarkMode ? setDarkMode(true) : setDarkMode(false)
    },[prefersDarkMode],
  );

  const theme = createTheme({
    palette: {
      primary:{
        main: '#c8e6c9'
      },
      secondary:{
        main: '#424444'
      },
      type: darkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    (async () => {
      if (loggedIn) {
        const res = await fetch('http://localhost:8000/bloom/current_user/', {
          headers: {
            Authorization: `JWT ${ localStorage.getItem('token') }`
          }
        })
        const json = await res.json()
        setUsername(json.username)
      }
    })();
    return () => { setUsername('') }
  }, [loggedIn]);


  const handleLogin = async (e, data) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const json = await res.json()
    localStorage.setItem('token', json.token);
    setLoggedIn(true)
    setDisplayedForm('')
    setUsername(json.user.username)
  };

  const handleSignup = async (e, data) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/bloom/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      const json = await res.json()
      localStorage.setItem('token', json.token);
      setLoggedIn(true)
      setDisplayedForm('')
      setUsername(json.username)
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false)
    setUsername('')
  };

  const displayForm = form => setDisplayedForm(form)

  let form;
  switch (displayedForm) {
    case 'login':
      form = <LoginForm handleLogin={handleLogin} />;
      break;
    case 'signup':
      form = <SignupForm handleSignup={handleSignup} />;
      break;
    default:
      form = null;
  }

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav
          loggedIn={loggedIn}
          displayForm={displayForm}
          handleLogout={handleLogout}
        />
        {form}
        <h3>
          {loggedIn
            ? `Hello, ${username}`
            : 'Please Log In'}
        </h3>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <Route path='/opportunities'>
          <NewOpportunityForm/>
        </Route>
        <Route path='/contact'>
          <ContactForm />
        </Route>
        </ThemeProvider>
      </div>
    </Router>
  );
}


export default App;