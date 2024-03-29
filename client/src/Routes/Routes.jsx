import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import About from "../components/About/About";

import Pizzas from "../components/Menu/Pizzas";
import Drinks from "../components/Menu/Drinks";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />

        <Outlet />
      </>
    ),
    children: [
      { path: "/", element: <App /> },
      {
        path: "/menu",
        element: <Menu />,
        children: [
          { path: "pizzas", element: <Pizzas /> },
          { path: "drinks", element: <Drinks /> },
        ],
      },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default router;
