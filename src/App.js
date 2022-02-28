import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import Landing from "../src/Pages/Landing/Landing";
import Blog from "../src/Pages/Blog/Blog"
// import BasicSpeedDial from "../src/Components/SpeedDial/SpeedDial";

function App() {
  return (
    <>
    <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/" element={<Blog />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
