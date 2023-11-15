import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import OngletElixir from "./components/OngletElixir";
import Accueil from "./components/Accueil";
import OngletLevel from "./components/OngletLevel";
import Rules from "./components/Rules";
import Jeu from "./components/Jeu";
import Leaderboard from "./pages/Leaderboard";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/JS-RemoteFR-SACOD-P2-Vogue-Merry/",
        element: <Accueil />,
      },

      {
        path: "JS-RemoteFR-SACOD-P2-Vogue-Merry/elixir",
        element: <OngletElixir />,
      },
      {
        path: "JS-RemoteFR-SACOD-P2-Vogue-Merry/difficulty",
        element: <OngletLevel />,
      },
      {
        path: "JS-RemoteFR-SACOD-P2-Vogue-Merry/difficulty/:id",
        element: <Jeu />,
      },
      {
        path: "JS-RemoteFR-SACOD-P2-Vogue-Merry/rules",
        element: <Rules />,
      },
      {
        path: "JS-RemoteFR-SACOD-P2-Vogue-Merry/leaderboard",
        element: <Leaderboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
