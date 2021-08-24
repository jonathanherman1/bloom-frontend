import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App/App';
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
    <Router>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </Router>,
  document.getElementById('root')
);



// Auth courtesy of https://medium.com/@dakota.lillie/django-react-jwt-authentication-5015ee00ef9a