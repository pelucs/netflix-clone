import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './contextAPI/AuthContext';
import { MovieContextProvider } from './contextAPI/MovieContext';
import { UserContextProvider } from './contextAPI/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <MovieContextProvider>
          <App />
        </MovieContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);