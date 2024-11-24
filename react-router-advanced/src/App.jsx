import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile/Profile';
import ProfileDetails from './components/Profile/ProfileDetails';
import ProfileSettings from './components/Profile/ProfileSettings';
import UserProfile from './components/UserProfile';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

const App = () => {
  const isAuthenticated = true; // Simulated authentication state

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/user/123">User Profile</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;

