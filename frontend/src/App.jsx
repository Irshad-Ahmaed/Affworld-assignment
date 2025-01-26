// src/App.js

import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useAuthStore from './stores/authStore';
import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './components/Navbar';
import FeedPage from './screens/Feeds';
import ResetPassword from './components/ResetPassword';

// Lazy load the screens for better performance
const Login = lazy(() => import('./screens/Login'));
const Register = lazy(() => import('./screens/Register'));
const Home = lazy(() => import('./screens/Home'));

function App() {
  const { user, fetchUser } = useAuthStore();

  useEffect(() => {
    console.log("useEffect");
    fetchUser();
  }, [fetchUser]);

  return (
    <Router>
      <Navbar/>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={ user ? <Home /> : <Navigate to='/login'/>} />
            <Route path="/login" element={user ? <Navigate to='/'/> : <Login />} />
            <Route path="/register" element={user ? <Navigate to='/'/> : <Register />} />
            <Route path="/feed" element={!user ? <Navigate to='/login'/> : <FeedPage />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
