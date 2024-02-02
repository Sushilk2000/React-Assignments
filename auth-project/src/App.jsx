import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignUp from "./Register";
import LogIn from "./LogIn";
import AuthProvider from "./context/AuthProvider";
import app from "./firebase";
import Welcome from "./WelcomePage";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/dashboard" element={<Welcome />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
