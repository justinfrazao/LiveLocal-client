import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import RequireAuth from './components/RequireAuth';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import MapPage from './components/MapPage';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div>{/*className="w-100" style={{ maxWidth: '400px'}} */}
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<RequireAuth redirect="/login"><Dashboard/></RequireAuth>}/>
              <Route path="/update-profile" element={<RequireAuth redirect="/login"><UpdateProfile/></RequireAuth>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/forgot-password" element={<ForgotPassword/>}/>
              <Route path="/map" element={<MapPage/>}/>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;
