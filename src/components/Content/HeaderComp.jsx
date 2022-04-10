import { UserOutlined } from "@ant-design/icons";
import { Avatar, Image } from "antd";
import Text from "antd/lib/typography/Text";
import Logo from "./logo.png"

import React from "react";
import { useSelector } from "react-redux";

const HeaderComp = () => {
  
  const userData = useSelector((state) => state.user.value);
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
        <Text>{userData.name ? userData.name : "default value"}</Text>
      </div>
    </header>
  );
};

export default HeaderComp;
