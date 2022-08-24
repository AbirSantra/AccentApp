import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Searchpage from "./pages/Searchpage/Searchpage";
import Profilepage from "./pages/Profilepage/Profilepage";
import Authpage from "./pages/Authpage/Authpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="auth" element={<Authpage />} />
        <Route path="search" element={<Searchpage />} />
        <Route path="profile" element={<Profilepage />} />
      </Routes>
    </div>
  );
}

export default App;
