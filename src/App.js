import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Dashboard from "./pages/Dashboard";

const LazyHome = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Home")), 1000);
  });
});

const LazyBooks = lazy(() => import("./pages/Books"));
const LazyEvents = lazy(() => import("./pages/Events"));
const LazyEventsDetail = lazy(() => import("./pages/Events/detail"));

const LazyTShirts = lazy(() => import("./pages/TShirts"));

const LazyLogin = lazy(() => import("./pages/Auth/Login"));
const LazyRegister = lazy(() => import("./pages/Auth/Register"));
const LazyForgotPassword = lazy(() => import("./pages/Auth/ForgotPassword"));

// Checkout Session
const LazyDataCheck = lazy(() => import("./pages/CheckOut/DataCheck"));
const LazyCartCheck = lazy(() => import("./pages/CheckOut/CartCheck"));

function App() {
  return (
    <Router>
      <div className="font-poppins">
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<LazyHome />} />

            <Route path="/events" element={<LazyEvents />} />
            <Route path="/event/detail" element={<LazyEventsDetail />} />

            <Route path="/books" element={<LazyBooks />} />
            <Route path="/tshirts" element={<LazyTShirts />} />
            <Route path="/login" element={<LazyLogin />} />
            <Route path="/register" element={<LazyRegister />} />
            <Route path="/forgot-password" element={<LazyForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/data-check" element={<LazyDataCheck />} />
            <Route path="/cart-check" element={<LazyCartCheck />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
