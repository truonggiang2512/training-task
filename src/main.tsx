import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Product from "./component/Product";
import "./style.css";
import Detail from "./component/Detail";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />}>
        <Route index element={<Product />} />
        <Route path=":type" element={<Product />} />
        <Route path=":type/:subtype" element={<Product />} />
      </Route>
      <Route path="/product/:type/:subtype/:id" element={<Detail />} />
    </Routes>
  </BrowserRouter>
);
