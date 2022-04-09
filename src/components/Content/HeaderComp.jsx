import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Text from "antd/lib/typography/Text";

import React from "react";

const HeaderComp = () => {
  return (
    <header id="main-header" style={{ display: "flex", justifyContent: "space-between"}} >
      <div>
        Logo gelicek buraya
      </div>

      <div>
        <Avatar size="small" icon={<UserOutlined />} />
        <Text>Ant Design (default)</Text>
      </div>
    </header>
  );
};

export default HeaderComp;
