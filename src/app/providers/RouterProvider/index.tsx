/**
 * RouterProvider
 * --------------
 * This component is responsible for wrapping the application with `BrowserRouter`,
 * which enables client-side routing functionality using the HTML5 History API.
 * 
 * It's placed inside the `app/providers` layer as part of the FSD architecture,
 * where all global providers (context, theming, routing, etc.) are composed and applied.
 * 
 * This makes routing globally available across all parts of the application
 * (features, pages, widgets, etc.) via React Router's hooks like useNavigate, useParams, etc.
 */

import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "src/app/router";
 
export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
