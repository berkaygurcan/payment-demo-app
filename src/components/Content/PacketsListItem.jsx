import React, { useEffect, useState } from "react";
import { Button, Card, Col, Divider, Image, List, Row, Space, Tag } from "antd";
import Title from "antd/lib/typography/Title";

import { useDispatch, useSelector } from "react-redux";
import Text from "antd/lib/typography/Text";
import { InfoCircleTwoTone } from "@ant-design/icons";
import { add, remove } from "../../features/counter/packetsSlice";

const PacketsListItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);
  const selectedPackets = useSelector((state) => state.packets.selectedItems);
  const selectedBorderStyle = "3px solid red";

  useEffect(() => {
    //eğer sayfada önceden seçim yapıldıysa ödeme ekranından dönülürse diye seçilmişleri kontrol edeceğiz
    const result = selectedPackets.some(
      (selectedItem) => selectedItem.id === item.id
    );

    if (result) setIsSelected(result);
  });

  const handleClick = () => {
    setIsSelected(!isSelected);

    if (!isSelected) {
      //eğer seçildiyse
      dispatch(add(item));
    } else {
      //eğer seçildikten sonra deaktif duruma getirilirse
      dispatch(remove(item));
    }
  };

  return (
    <List.Item onClick={handleClick}>
      <Row
        style={{
          backgroundColor: "#595959",
          border: isSelected ? selectedBorderStyle : "none",
          borderRadius: 10,
          maxWidth: 550,
          margin: "auto",
        }}
      >
        <Col span={4}>
          <Image width={100} src={item.imagePath} />
        </Col>
        <Col span={12} style={{ marginLeft: 50 }}>
          <Row gutter={[100, 40]}>
            <Col>
              <Title level={5}>{item.name}</Title>
            </Col>
            <Col>
              <Title level={5}>{item.amount + " " + item.currency}</Title>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            {item.details.map((detail) => (
              <Col>
                <InfoCircleTwoTone twoToneColor="#52c41a" />
                <Text type="success"> {" " + detail}</Text>
              </Col>
            ))}
          </Row>
          <Row gutter={[1, 16]}>
            {item.tags.map((tag) => (
              <Tag color="geekblue">{tag}</Tag>
            ))}
          </Row>
        </Col>
      </Row>
    </List.Item>
  );
};

export default PacketsListItem;
