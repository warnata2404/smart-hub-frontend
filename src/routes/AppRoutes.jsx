import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GuestLayout from "../layouts/GuestLayout";
import MainLayout from "../layouts/MainLayout";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import EquipmentCreate from "../pages/equipment/EquipmentCreate";
import EquipmentEdit from "../pages/equipment/EquipmentEdit";
import EquipmentList from "../pages/equipment/EquipmentList";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          element={
            <PublicRoute>
              <GuestLayout />
            </PublicRoute>
          }
        >
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/equipments" element={<EquipmentList />} />

          <Route path="/equipments/create" element={<EquipmentCreate />} />

          <Route path="/equipments/:id/edit" element={<EquipmentEdit />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
