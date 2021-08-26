import React, { useState, useEffect } from 'react';
import {
  createTheme,
  ThemeProvider,
  CssBaseline
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { BrowserRouter as Route, Switch, Redirect} from 'react-router-dom'

// Components
import Nav from '../../Components/Nav/Nav'
import LoginForm from '../../Components/LoginForm/LoginForm'
import SignupForm from '../../Components/SignupForm/SignupForm'
import NewOpportunityForm from '../../Components/NewOpportunityForm/NewOpportunityForm';
import OpportunityIndex from '../../Components/OpportunityIndex/OpportunityIndex';
import OpportunityDetail from '../../Components/OpportunityDetail/OpportunityDetail';
import CompanyIndex from '../../Components/CompanyIndex/CompanyIndex'
import CompanyDetail from '../../Components/CompanyDetail/CompanyDetail'
import NewCompanyForm from '../../Components/NewCompanyForm/NewCompanyForm';
import ActivityIndex from '../../Components/ActivityIndex/ActivityIndex'
import ActivityDetail from '../../Components/ActivityDetail/ActivityDetail'
import NewActivityForm from '../../Components/NewActivityForm/NewActivityForm';
import ContactIndex from '../../Components/ContactIndex/ContactIndex'
import ContactDetail from '../../Components/ContactDetail/ContactDetail'
import NewContactForm from '../../Components/NewContactForm/NewContactForm';
import BottomNav from '../../Components/Nav/BottomNav'



// Animation
import Animation from '../../Components/Animation/Animation'

// Content
import plantAnimation from '../../Assets/lottie-files/57027-fondo-plantas-2.json'

// Services
import * as opportunityService from '../../services/opportunityService.js'
import * as activityService from '../../services/activityService.js'
import * as companyService from '../../services/companyService.js'
import * as contactService from '../../services/contactService.js'

// Styles
import './App.css';


const App = (props) => {
      <pre>
        {process.env.REACT_APP_LOGGED_IN}
        {process.env.REACT_APP_LOGIN}
        {process.env.REACT_APP_SIGNUP}
      </pre>

      const [ darkMode, setDarkMode ] = useState(false);
      const [ loggedIn, setLoggedIn ] = useState(localStorage.getItem('token') ? true : false)
      const [ displayedForm, setDisplayedForm ] = useState ('')
      const [ username, setUsername ] = useState ('')

      const [activities, setActivities] = useState([])
      const [contacts, setContacts] = useState([])
      const [companies, setCompanies] = useState([])
      const [opportunities, setOpportunities] = useState([])
      const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
      prefersDarkMode ? setDarkMode(true) : setDarkMode(false)
    },[prefersDarkMode],
  );

  const theme = createTheme({
    palette: {
      primary:{
        // main: '#c8e6c9'
        main: '#9bb39c'
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
        const res = await fetch(process.env.REACT_APP_LOGGED_IN, {
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

  useEffect(() => {
    (async () => {
      const allOpportunities = await opportunityService.getAll()
      setOpportunities(allOpportunities)
      console.log(allOpportunities)
    })()
    return () => { setOpportunities('') }
  }, [loggedIn]);

  useEffect(() => {
    (async () => {
      const allActivities = await activityService.getAll()
      setActivities(allActivities)
      console.log(allActivities)
    })()
    return () => { setActivities('') }
  }, [loggedIn]);

  useEffect(() => {
    (async () => {
      const allCompanies = await companyService.getAll()
      setCompanies(allCompanies)
      console.log(allCompanies)
    })()
    return () => { setCompanies('') }
  }, [loggedIn]);

  useEffect(() => {
    (async () => {
      const allContacts = await contactService.getAll()
      setContacts(allContacts)
      console.log(allContacts)
    })()
    return () => { setContacts('') }
  }, [loggedIn]);

  const handleLogin = async (e, data) => {
    e.preventDefault();
    const res = await fetch(process.env.REACT_APP_LOGIN, {
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
    const res = await fetch(process.env.REACT_APP_SIGNUP, {
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
      form = <LoginForm handleLogin={handleLogin} setDisplayedForm={setDisplayedForm} />;
      break;
    case 'signup':
      form = <SignupForm handleSignup={handleSignup} setDisplayedForm={setDisplayedForm} />;
      break;
    default:
      form = <LoginForm handleLogin={handleLogin} setDisplayedForm={setDisplayedForm} />;
  }

  const handleAddOpportunity = async (formData) => {
    try {
      const newOpportunity = await opportunityService.create(formData)
      setOpportunities([newOpportunity, ...opportunities])
    } catch (error) {
      throw error
    }
  }
  const handleAddContact = async (formData) => {
    try {
      const newContact = await contactService.create(formData)
      setContacts([newContact, ...contacts])
    } catch (error) {
      throw error
    }
  }
  const handleAddActivity = async (formData) => {
    try {
      const newActivity = await activityService.create(formData)
      setActivities([newActivity, ...activities])
    } catch (error) {
      throw error
    }
  }

  const handleAddCompany = async (formData) => {
    try {
      const newCompany = await companyService.create(formData)
      setCompanies([newCompany, ...companies])
    } catch (error) {
      throw error
    }
  }

  return (
      <div className="App">      
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav
          loggedIn={loggedIn}
          displayForm={displayForm}
          handleLogout={handleLogout}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Switch>
          <Route exact path='/'>
            { loggedIn ? <OpportunityIndex opportunities={opportunities} /> : <> {form} <Animation animationData={plantAnimation}/> </> }
          </Route>
          <Route exact path='/opportunities'>
            { loggedIn ? <OpportunityIndex opportunities={opportunities} /> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/opportunities/new'>
            <NewOpportunityForm handleAddOpportunity={handleAddOpportunity}/>
          </Route>
          <Route exact path='/opportunities/:id'>
            <OpportunityDetail />
          </Route>
          <Route exact path='/activities'>
            { loggedIn ? <ActivityIndex activities={activities} /> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/activities/new'>
            <NewActivityForm handleAddActivity={handleAddActivity}/>
          </Route>
          <Route exact path='/activities/:id'>
            <ActivityDetail />
          </Route>
          <Route exact path='/contacts'>
            { loggedIn ? <ContactIndex contacts={contacts} /> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/contacts/new'>
            <NewContactForm handleAddContact={handleAddContact}/>
          </Route>
          <Route exact path='/contacts/:id'>
            <ContactDetail />
          </Route>
          <Route exact path='/companies'>
            { loggedIn ? <CompanyIndex companies={companies} /> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/companies/new'>
            <NewCompanyForm handleAddCompany={handleAddCompany}/>
          </Route>
          <Route exact path='/companies/:id'>
            <CompanyDetail />
          </Route>

          <Route exact path='/opportunities/:id/new-activity'>
            <NewActivityForm handleAddActivity={handleAddActivity}/>
          </Route>
        </Switch>
        <BottomNav className="bottom-nav" />
        </ThemeProvider>
      </div>
  );
}


export default App;