import { Button, Card, Col, Divider, Image, List, Row, Space } from "antd";
import Title from "antd/lib/typography/Title";


import React from "react";

const Packets = () => {
  //bu data normalde state ile gelicek
  const data = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
    {
      title: "Title 4",
    },
    {
      title: "Title 5",
    },
    {
      title: "Title 6",
    },
  ];
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
        dataSource={data}
        renderItem={(item) => (
          <List.Item onClick={() => console.log(item.title)}>
            <Card style={{maxWidth: 600}} >
              <Row>
                <Col span={4}>
                  <Image
                    width={100}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
                <Col span={12} style= {{marginLeft:50}}>
                  <Row gutter={[100, 40]} >
                    <Col>paket adı</Col>
                    <Col>paket parası</Col>
                  </Row>
                  
                  <Row>Detaylar</Row>
                  <Row>Tagler</Row>
                </Col>
              </Row>
            </Card>
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
          Primary
        </Button>
      </div>
    </>
  );
};

export default Packets;
