import "./App.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { firebaseApp } from "./Firebase/firebase";

import Form from "./components/Common/Form";

function App() {
  //form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handle action
  const handleAction = (id) => {
    console.log(id);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <Form
              title="Login"
              setEmail={(e) => setEmail(e.target.target)}
              handleAction={() => handleAction(1)}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Form
              title="Register"
              setPassword={(e) => setPassword(e.target.target)}
              handleAction={() => handleAction(2)}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
