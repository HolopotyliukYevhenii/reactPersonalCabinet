/**
 * AppRouter
 * ---------
 * Centralized configuration of all application routes.
 * 
 * This component defines which React components (pages) should be rendered
 * when a user navigates to specific URL paths.
 * 
 * The router is organized using React Router v6, which provides nested routing,
 * code splitting, and simplified route declarations.
 * 
 * Located in the `app/router` layer, this file is responsible for managing navigation
 * logic in a declarative and maintainable way.
 */

// =====================================================================
// =========================== Templates / Layouts =====================
import { PanelLayout } from 'src/layouts/panelLayout/ui/PanelLayout';

// =====================================================================
// =========================== Pages ===================================
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "src/pages/public/LoginPage";
import { OrdersPage } from "src/pages/user/OrdersPage";
import { OrderPage } from "src/pages/user/OrderPage";


export const AppRouter = () => {
  return (
<Routes>
  <Route path="/" element={<LoginPage />} />

  <Route path="/panel" element={<PanelLayout />}>
    <Route path="orders" element={<OrdersPage />} />
    <Route path="order/:orderId" element={<OrderPage />} />
  </Route>
</Routes>
  );
};