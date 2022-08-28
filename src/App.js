import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import { Routes, Route, Navigate } from "react-router-dom";
import Searchpage from "./pages/Searchpage/Searchpage";
import Profilepage from "./pages/Profilepage/Profilepage";
import Authpage from "./pages/Authpage/Authpage";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.auth.authData);
  // const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Homepage /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Authpage />}
        />
        <Route
          path="/search"
          element={user ? <Searchpage /> : <Navigate to="../auth" />}
        />
        <Route
          path="/profile"
          element={user ? <Profilepage /> : <Navigate to="../auth" />}
        />
      </Routes>
    </div>
  );
}

export default App;
