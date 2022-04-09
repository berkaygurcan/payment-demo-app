import { Button, Card, Col, Divider, Image, List, Row, Space, Tag } from "antd";
import Title from "antd/lib/typography/Title";
import { gray } from "@ant-design/colors";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Text from "antd/lib/typography/Text";
import { InfoCircleTwoTone } from "@ant-design/icons";

const Packets = () => {
  //bu data normalde state ile gelicek
  const packets = useSelector((state) => state.packets.value);
  const [selectedItems,setSelectedItems] = useState()
  
  return (
    <>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 2,
          xxl: 2,
        }}
        dataSource={packets}
        renderItem={(item) => (
          <List.Item
            onClick={() => {
              console.log(item);
              
            }}
          >
            <Row
              style={{
                backgroundColor: "#595959",
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
        )}
      />
      <Divider />

      <div
        style={{
          display: "flex",
          direction: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Title level={5}>Seçilen Paket Tutarı : 100 Tl</Title>
        </div>

        <Button type="primary" style={{ marginBottom: 10 }} size={"medium"}>
          Devam Et
        </Button>
      </div>
    </>
  );
};

export default Packets;
