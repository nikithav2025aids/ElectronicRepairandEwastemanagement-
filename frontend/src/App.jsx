import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import Dashboard from "./pages/user/Dashboard";
import RepairService from "./pages/user/RepairService";
import BookRepair from "./pages/user/BookRepair";
import SpareParts from "./pages/user/SpareParts";
import UserLayout from "./pages/user/UserLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<UserLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/repairservice" element={<RepairService />} />
          <Route path="/bookrepair" element={<BookRepair />} />
          <Route path="/spareparts" element={<SpareParts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
