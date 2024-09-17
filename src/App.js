
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/signup';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import URLShortener from './components/URLShortener';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/urlshortener" element={<URLShortener />} />
      </Routes>
    </Router>
  );
}

export default App;
