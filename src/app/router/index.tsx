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

import { Routes, Route } from "react-router-dom";
import { LoginPage } from "src/pages/LoginPage";  
// import {MainPage} from "pages/MainPage";
// import { HomePage } from "pages/HomePage";
// import { LoginPage } from "pages/LoginPage";

export const AppRouter = () => {
  return (
    <Routes>
      {
      <Route path="/" element={<LoginPage />} />
      /* <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} /> */}
    </Routes>
  );
};