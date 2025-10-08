import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Register/RegisterPage';
import HomePage from './Components/Pages/HomePage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          {/* Default route → Login Page */}
          <Route path="/" element={<LoginPage />} />

          {/* Default route → Register Page */}
          <Route path="/register" element={<RegisterPage />} />

          {/* After login redirect here */}
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
