import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Searchpage from "./pages/Searchpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="search" element={<Searchpage />} />
      </Routes>
    </div>
  );
}

export default App;
