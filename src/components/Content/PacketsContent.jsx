import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackets } from "../../features/counter/packetsSlice";

import HeaderComp from "./HeaderComp";
import Packets from "./Packets";

const PacketsContent = () => {
  //paketlerimizi çekeceğiz
  const dispatch = useDispatch();
 
  useEffect(() => {
   
    dispatch(fetchPackets());
  }, []);
 
  return (
    <Layout style={{ padding: 40 }}>
      <Header style={{ backgroundColor: "#fff", marginBottom: 5 }}>
        <HeaderComp />
      </Header>
      <Content
        style={{ backgroundColor: "#fff", borderRadius: 10, padding: 10 }}
      >
        <Packets />
      </Content>
    </Layout>
  );
};

export default PacketsContent;
