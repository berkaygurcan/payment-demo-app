import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import HeaderComp from "./HeaderComp";
import Packets from "./Packets";

const PacketsContent = () => {
  return (
    <Layout style={{padding:40}} >
      <Header style={{ backgroundColor: "#fff", marginBottom: 5 }}>
        <HeaderComp />
      </Header>
      <Content style={{backgroundColor: "#fff", borderRadius: 10,padding: 10}}>
        <Packets />
      </Content>
    </Layout>
  );
};

export default PacketsContent;
