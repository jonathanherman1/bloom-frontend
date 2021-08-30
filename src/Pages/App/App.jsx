import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'

// Components
import Nav from '../../Components/Nav/Nav'
import LoginForm from '../../Components/LoginForm/LoginForm'
import SignupForm from '../../Components/SignupForm/SignupForm'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// Pages
import ActivityCreate from '../Models/Activity/ActivityCreate/ActivityCreate';
import ActivityDetail from '../Models/Activity/ActivityDetail/ActivityDetail'
import ActivityIndex from '../Models/Activity/ActivityIndex/ActivityIndex'
import ActivityUpdate from '../Models/Activity/ActivityUpdate/ActivityUpdate'
import CompanyCreate from '../Models/Company/CompanyCreate/CompanyCreate';
import CompanyIndex from '../Models/Company/CompanyIndex/CompanyIndex'
import CompanyDetail from '../Models/Company/CompanyDetail/CompanyDetail'
import CompanyUpdate from '../Models/Company/CompanyUpdate/CompanyUpdate';
import ContactCreate from '../Models/Contact/ContactCreate/ContactCreate';
import ContactIndex from '../Models/Contact/ContactIndex/ContactIndex'
import ContactDetail from '../Models/Contact/ContactDetail/ContactDetail'
import ContactUpdate from '../Models/Contact/ContactUpdate/ContactUpdate';
import OpportunityCreate from '../Models/Opportunity/OpportunityCreate/OpportunityCreate';
import OpportunityIndex from '../Models/Opportunity/OpportunityIndex/OpportunityIndex';
import OpportunityDetail from '../Models/Opportunity/OpportunityDetail/OpportunityDetail';
import OpportunityUpdate from '../Models/Opportunity/OpportunityUpdate/OpportunityUpdate';

import BottomNav from '../../Components/Nav/BottomNav'

// Animation
import Animation from '../../Components/Animation/Animation'

// Content
import plantAnimation from '../../Assets/lottie-files/57027-fondo-plantas-2.json'

// Handlers
import * as opportunityHandlers from '../../handlers/opportunityHandlers'
import * as activityHandlers from '../../handlers/activityHandlers'
import * as contactHandlers from '../../handlers/contactHandlers'
import * as companyHandlers from '../../handlers/companyHandlers'

// Services
import * as opportunityService from '../../services/opportunityService.js'
import * as activityService from '../../services/activityService.js'
import * as companyService from '../../services/companyService.js'
import * as contactService from '../../services/contactService.js'
import * as currentUserService from '../../services/currentUserService.js'
import * as authService from '../../services/authService.js'

// Styles
import './App.css';
import {
  createTheme,
  ThemeProvider,
  CssBaseline
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery'

const App = (props) => {
      const [ darkMode, setDarkMode ] = useState(false);
      const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
      const [ loggedIn, setLoggedIn ] = useState(localStorage.getItem('token') ? true : false)
      const [ username, setUsername ] = useState ('Guest')
      const [ currentUser, setCurrentUser ] = useState('')
      const [ displayedForm, setDisplayedForm ] = useState ('')
      const [ snackBar, setSnackBar ] = useState({
        loggedIn: false,
        loggedOut: false,
      })
      const [activities, setActivities] = useState([])
      const [contacts, setContacts] = useState([])
      const [companies, setCompanies] = useState([])
      const [opportunities, setOpportunities] = useState([])

  useEffect(() => {
      prefersDarkMode ? setDarkMode(true) : setDarkMode(false)
    },[prefersDarkMode],
  );

  const theme = createTheme({
    palette: {
      primary:{
        main: '#7fc8a9'
      },
      secondary:{
        main: '#424444'
      },
      type: darkMode ? 'dark' : 'light',
    }
  });

  useEffect(() => {
    (async () => {
      if (loggedIn) {
        const res = await fetch(`${process.env.REACT_APP_LOGGED_IN}`, {
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
    })()
    return () => { setOpportunities('') }
  }, [loggedIn]);

  useEffect(() => {
    (async () => {
      const newCurrentUser = await currentUserService.getCurrentUser()
      setCurrentUser(newCurrentUser)
    })()
    return () => { setCurrentUser('') }
  }, [loggedIn]);

  useEffect(() => {
    (async () => {
      const allActivities = await activityService.getAll()
      setActivities(allActivities)
    })()
    return () => { setActivities('') }
  }, [loggedIn, opportunities]);

  useEffect(() => {
    (async () => {
      const allCompanies = await companyService.getAll()
      setCompanies(allCompanies)
    })()
    return () => { setCompanies('') }
  }, [loggedIn]);

  useEffect(() => {
    (async () => {
      const allContacts = await contactService.getAll()
      setContacts(allContacts)
    })()
    return () => { setContacts('') }
  }, [loggedIn, opportunities]);

  const handleLogin = async (e, data) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const json = await res.json()
      localStorage.setItem('token', json.token);
      const usernameVar = await json.user.username
      setLoggedIn(true)
      setDisplayedForm('')
      setUsername(usernameVar)
      setSnackBar({loggedIn: true, loggedOut: false})
    } catch (error) {
      // console.log(error)
    }
  };

  const handleSignup = async (e, data) => {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_SIGNUP}`, {
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
      setSnackBar({loggedIn: true, loggedOut: false})
  };

  const handleLogout = () => {
      localStorage.removeItem('token');
      setLoggedIn(false)
      setUsername('')
      setSnackBar({loggedOut: true, loggedIn: false})
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

  const handleUpdateOpportunity = async (formData, id) => {
    try {
      const updatedOpportunity = await opportunityService.update(formData, id)
      if (updatedOpportunity.id){
        let oppArray = opportunities.filter(opp => opp.id !== formData.id)
        setOpportunities([updatedOpportunity, ...oppArray])
      }
    } catch (error) {
      throw error
    }
  }
  const handleUpdateContact = async (formData, id) => {
    try {
      const updatedContact = await contactService.update(formData, id)
      if (updatedContact.id){
        let conArray = contacts.filter(con => con.id !== formData.id)
        setContacts([updatedContact, ...conArray])
      }
    } catch (error) {
      throw error
    }
  }
  const handleUpdateActivity = async (formData, id) => {
    try {
      const updatedActivity = await activityService.update(formData, id)
      if (updatedActivity.id){
        let actArray = activities.filter(act => act.id !== formData.id)
        setActivities([updatedActivity, ...actArray])
      }
    } catch (error) {
      throw error
    }
  }
  const handleUpdateCompany = async (formData, id) => {
    try {
      const updatedCompany = await companyService.update(formData, id)
      if (updatedCompany.id){
        let comArray = companies.filter(com => com.id !== formData.id)
        setCompanies([updatedCompany, ...comArray])
      }
    } catch (error) {
      throw error
    }
  }
 
  const handleAddOpportunity = async (formData) => {
    try {
      const newOpportunity = await opportunityService.create(formData)
      if (newOpportunity.id){
        setOpportunities([newOpportunity, ...opportunities])
      }
    } catch (error) {
      throw error
    }
  }
  const handleAddContact = async (formData) => {
    try {
      const newContact = await contactService.create(formData)
      if (newContact.id){
        setContacts([newContact, ...contacts])
      }
    } catch (error) {
      throw error
    }
  }
  const handleAddActivity = async (formData) => {
    try {
      const newActivity = await activityService.create(formData)
      if (newActivity.id){
        setActivities([newActivity, ...activities])
      }
    } catch (error) {
      throw error
    }
  }
  const handleAddCompany = async (formData) => {
    try {
      const newCompany = await companyService.create(formData)
      if (newCompany.id){
        setCompanies([newCompany, ...companies])
      }
    } catch (error) {
      throw error
    }
  }

  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBar({loggedIn: false, loggedOut: false});
  };

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
          username={username}
        />
        <Switch>
          <Route exact path='/'>
            { loggedIn ? <OpportunityIndex opportunities={opportunities} /> : <> {form} <Animation animationData={plantAnimation}/> </> }
          </Route>
          <Route exact path='/opportunities'>
            { loggedIn ? <OpportunityIndex opportunities={opportunities} /> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/opportunities/new'>
            { loggedIn ? 
              <OpportunityCreate 
                handleAddOpportunity={handleAddOpportunity}
                currentUser={currentUser}
              /> 
              : <Redirect to='/'/> 
            }
          </Route>
          <Route exact path='/opportunities/:id'>
            { loggedIn ? 
                <OpportunityDetail 
                    handleDelete={opportunityHandlers.handleDeleteOpportunity}
                    activities={activities}
                    opportunities={opportunities}
                    contacts={contacts}
                    setOpportunities={setOpportunities}
                /> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/opportunities/:id/edit'>
            { loggedIn ? <OpportunityUpdate handleUpdateOpportunity={handleUpdateOpportunity} /> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/activities'>
            { loggedIn ? <ActivityIndex activities={activities} /> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/activities/new'>
            { loggedIn ? 
               <ActivityCreate 
                 handleAddActivity={handleAddActivity}
                 currentUser={currentUser}
               /> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/activities/:id'>
            { loggedIn ?  
                <ActivityDetail 
                    handleDelete={activityHandlers.handleDeleteActivity}
                    activities={activities}
                    setActivities={setActivities}
                /> 
                : <Redirect to='/'/> }
          </Route>
          <Route exact path='/activities/:id/edit'>
            { loggedIn ?  <ActivityUpdate handleUpdateActivity={handleUpdateActivity}/> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/contacts'>
            { loggedIn ? <ContactIndex contacts={contacts} /> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/contacts/new'>
            { loggedIn ? 
                 <ContactCreate 
                 handleAddContact={handleAddContact}
                 currentUser={currentUser}
                 /> : <Redirect to='/'/> 
                 }
          </Route>
          <Route exact path='/contacts/:id'>
            { loggedIn ? 
               <ContactDetail 
                  handleDelete={contactHandlers.handleDeleteContact}
                  contacts={contacts}
                  setContacts={setContacts}
               /> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/contacts/:id/edit'>
            { loggedIn ? <ContactUpdate handleUpdateContact={handleUpdateContact} /> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/companies'>
            { loggedIn ? <CompanyIndex companies={companies} /> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/companies/new'>
            { loggedIn ?  <CompanyCreate handleAddCompany={handleAddCompany} currentUser={currentUser}/> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/companies/:id'>
            { loggedIn ? 
                <CompanyDetail
                    handleDelete={companyHandlers.handleDeleteCompany}
                    companies={companies}
                    setCompanies={setCompanies}
                /> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/companies/:id/edit'>
            { loggedIn ? <CompanyUpdate handleUpdateCompany={handleUpdateCompany} /> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/opportunities/:id/new-activity'>
            { loggedIn ? <ActivityCreate handleAddActivity={handleAddActivity} currentUser={currentUser}/> : <Redirect to='/'/> }
          </Route>
          <Route exact path='/opportunities/:id/new-contact'>
                { loggedIn ? 
                    <ContactCreate 
                    handleAddContact={handleAddContact}
                    currentUser={currentUser}
                  /> : <Redirect to='/'/> 
                }
          </Route>          
        </Switch>
        { loggedIn&&
          <>
            <BottomNav className="bottom-nav" />
          </>
        }
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackBar.loggedIn || snackBar.loggedOut}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
        color="primary"
        message={snackBar.loggedIn ? 'Logged In' : 'Logged Out'}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackBar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
        </ThemeProvider>
      </div>
  );
}


export default App;