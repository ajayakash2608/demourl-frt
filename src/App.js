
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/signup';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import URLShortener from './components/URLShortener';
import ViewUrl.js from './components/ViewUrl';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/urlshortener" element={<URLShortener />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/urls" element={<ViewUrls />} />
      </Routes>
    </Router>
  );
}

export default App;
