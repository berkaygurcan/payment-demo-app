import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import PacketsContent from "./components/Content/PacketsContent";
import Login from "./components/Auth/Login";
import PaymentContent from "./components/Content/PaymentContent";
function App() {
  return (
    //@todo - routing yapılacak
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/packetsContent" element={<PacketsContent />} />
      <Route path="/paymentContent" element={<PaymentContent />} />
    </Routes>
  );
}

export default App;
