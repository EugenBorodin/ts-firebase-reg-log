/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { User, onAuthStateChanged } from 'firebase/auth';
import AuthContext from '../contexts/AuthContext';
import Register from '../components/Register/Register';
import Profile from '../components/Profile/Profile';
import { auth } from '../api/firebase';
import UserContext from '../contexts/UserContext';
import Login from '../components/Login/Login';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Todos from '../components/Todos/Todos';

function App(): JSX.Element {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={currentUser}>
      <UserContext.Provider value="7018054411">

      <Routes>
        <Route path="/" element={<ProtectedRoute outlet={<Profile />} />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="todos" element={<Todos />} />
      </Routes>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
