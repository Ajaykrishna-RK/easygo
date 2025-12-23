import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";

function App() {
  return (
   
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
            <Route path="/auth" element={<Auth />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
