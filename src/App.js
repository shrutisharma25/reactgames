import { React } from "react";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from '../src/Component/Home/Home.jsx'
import Tetris from '../src/Component/Tetris/Tetris.jsx'

function App() {
  return (
    <div className="App"  style={{margin:0, padding:0}}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tetris" element={<Tetris />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
