import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import PacketsContent from "./components/Content/PacketsContent";
import Login from "./components/Auth/Login";
import PaymentContent from "./components/Content/PaymentContent";
import Success from "./components/Content/Success";
function App() {
  return (
    //@todo - routing yapılacak
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/packetsContent" element={<PacketsContent />} />
      <Route path="/paymentContent" element={<PaymentContent />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
