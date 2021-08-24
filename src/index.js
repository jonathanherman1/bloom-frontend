import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App/App';
import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>,
  document.getElementById('root')
);



// Auth courtesy of https://medium.com/@dakota.lillie/django-react-jwt-authentication-5015ee00ef9a