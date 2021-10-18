import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from 'context/user';
import { ProjectsProvider } from 'context/projects';
import ColorPickerProvider from 'context/colorPick';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ProjectsProvider>
        <ColorPickerProvider>
          <App />
        </ColorPickerProvider>
      </ProjectsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
