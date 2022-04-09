import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import HeaderComp from "./HeaderComp";
import Payment from "./Payment";

const PaymentContent = () => {
  return (
    <div style={{ padding: 40 }}>
      
      <Header style={{ backgroundColor: "#fff", marginBottom: 5 }}>
        <HeaderComp />
      </Header>

      <Payment />
    </div>
  );
};

export default PaymentContent;
