import { Button, Card, Col, Layout, List, Row, Typography } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import { useSelector } from "react-redux";

import Payment from "./Payment";

const PaymentContent = () => {
  const selectedPackets = useSelector((state) => state.packets.selectedItems);
 
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
            dataSource={selectedPackets}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text mark>{item.name}</Typography.Text> {item.amount} tl
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
