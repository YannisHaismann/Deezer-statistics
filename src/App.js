import './App.css';
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
