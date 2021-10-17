import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './context/user';
import { ProjectsProvider } from './context/projects';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ProjectsProvider>
        <App />
      </ProjectsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
