import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Components/Login/LoginPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          {/* Default route → Login Page */}
          <Route path="/" element={<LoginPage />} />

          {/* After login redirect here */}
          <Route path="/home" element={<h1>Welcome Home!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
