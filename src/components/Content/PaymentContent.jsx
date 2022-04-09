import { Button, Card, Col, Layout, List, Row, Typography } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import HeaderComp from "./HeaderComp";
import Payment from "./Payment";

const PaymentContent = () => {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
  return (
    <Row justify="center" gutter={30}>
      <Col span={8}>
        <Payment />
      </Col>

      <Col span={8}>
        <Card>
          <List
            header={<div>Sepetteki Paketler</div>}
            bordered
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
              </List.Item>
            )}
          />

          <Button type="primary" block>
            Ödeme Yap
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default PaymentContent;
