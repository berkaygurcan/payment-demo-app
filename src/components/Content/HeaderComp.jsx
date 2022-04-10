import { UserOutlined } from "@ant-design/icons";
import { Avatar, Image } from "antd";
import Text from "antd/lib/typography/Text";
import Logo from "./logo.png"

import React from "react";

const HeaderComp = () => {
  return (
    <header
      id="main-header"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
        <Image
        style={{objectFit: "cover"}}
          width={100}
          src = {Logo}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Avatar size="small" icon={<UserOutlined />} />
        <Text>Ant Design (default)</Text>
      </div>
    </header>
  );
};

export default HeaderComp;
