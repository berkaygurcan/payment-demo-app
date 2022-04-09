import { Button, Card, Divider, Image, List, Space } from "antd";
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
            <Card>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image
                  width={100}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 20,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 100,
                      direction: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p>paket adı</p>

                    <p>paket parası</p>
                  </div>

                  <div style={{ display: "flex" }}>Detaylar</div>

                  <div style={{ display: "flex" }}>Tagler</div>
                </div>
              </div>
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
