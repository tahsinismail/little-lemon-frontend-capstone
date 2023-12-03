import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import About from "./components/About";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Reservations from "./components/Reservations";
import Cart from "./components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
  {
    path: "order",
    element: <Order />,
  },
  {
    path: "reservations",
    element: <Reservations />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "booking",
    element: <BookingPage />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
