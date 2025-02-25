import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import ClientDashboard from "./pages/ClientDashboard";
import TherapistDashboard from "./pages/TherapistDashboard";
import Calendar from "./pages/Calendar";
import Payments from "./pages/Payments";
import Settings from "./pages/Settings";
import Home from "./pages/Home";

// Mock authentication status (replace with actual authentication logic)
const isAuthenticated = true;

// Function to create a protected route
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

// Define routes using Layout.tsx as the wrapper
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />, // ✅ Use Layout as the wrapper
    children: [
        { index: true, element: <Home /> },
        { path: "dashboard-client", element: <ProtectedRoute><ClientDashboard /></ProtectedRoute> },
        { path: "dashboard-therapist", element: <ProtectedRoute><TherapistDashboard /></ProtectedRoute> },
        { path: "calendar", element: <ProtectedRoute><Calendar /></ProtectedRoute> },
        { path: "payments", element: <ProtectedRoute><Payments /></ProtectedRoute> },
        { path: "settings", element: <ProtectedRoute><Settings /></ProtectedRoute> },
      ],
  },
];


const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
