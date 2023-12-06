import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import About from "./components/About";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Reservations from "./components/Reservations";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import { AppContext } from "./components/GlobalContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "home",
//     element: <Home />,
//   },
//   {
//     index: true,
//     path: "about",
//     element: <About />,
//   },
//   {
//     path: "menu",
//     element: <Menu />,
//   },
//   {
//     path: "order",
//     element: <Order />,
//   },
//   {
//     path: "reservations",
//     element: <Reservations />,
//   },
//   {
//     path: "cart",
//     element: <Cart />,
//   },
//   {
//     path: "booking",
//     element: <BookingPage />,
//   },
// ]);
root.render(
  <React.StrictMode>
    <AppContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="order" element={<Order />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="cart" element={<Cart />} />
            <Route path="booking" element={<BookingPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
