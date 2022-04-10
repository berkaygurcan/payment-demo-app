import { CheckCircleTwoTone } from "@ant-design/icons";
import { Card } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";

const Success = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Card
        style={{
          textAlign:"center",
          borderRadius: 10,
          boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
        }}
      >
        <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize:150,marginBottom:10}} />
        <Title level={1}>Başarıyla Tamamlandı!</Title>
      </Card>
    </div>
  );
};

export default Success;
