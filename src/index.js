import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './Context/UserContext';
import { PostContextProvider } from './Context/PostContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <PostContextProvider>
    <App />
    </PostContextProvider>
    </UserProvider>
  </React.StrictMode>
);

