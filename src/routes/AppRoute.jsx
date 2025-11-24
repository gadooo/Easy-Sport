import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/HomePage";
import Products from "../pages/ProductPage";
import Login from "../pages/Auth/LogInPage";
import Cart from "../pages/CartPage";

import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoutes";

export default function AppRoute() {
  return (
    <Routes>
      {/* Public Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />

        {/* Protected user routes */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        {/* Admin routes */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <h1>Admin Panel Coming Soon</h1>
            </AdminRoute>
          }
        />
      </Route>
    </Routes>
  );
}
