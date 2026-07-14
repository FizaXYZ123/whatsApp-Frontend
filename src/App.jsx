import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Left from "./components/left/Left";
import Right from "./components/right/Right";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function Chat() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Left />
      <Right />
    </div>
  );
}

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;