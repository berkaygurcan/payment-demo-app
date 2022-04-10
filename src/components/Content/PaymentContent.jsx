import { Button, Card, Col, Form, Layout, List, Row, Typography } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import { useSelector } from "react-redux";
import HeaderComp from "./HeaderComp";

import Payment from "./Payment";

const PaymentContent = () => {
  const selectedPackets = useSelector((state) => state.packets.selectedItems);
  const [form] = Form.useForm();
  const onPayment = () => {
    form.submit();
  };

  return (
    <Layout >
      <Header style={{ backgroundColor: "#fff", marginBottom: 5 }}>
        <HeaderComp />
      </Header>

      <Row justify="center" gutter={30}>
        <Col span={8}>
          <Payment form={form} />
        </Col>

        <Col span={8}>
          <Card>
            <List
              header={<div>Sepetteki Paketler</div>}
              bordered
              dataSource={selectedPackets}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text mark>{item.name}</Typography.Text>{" "}
                  {item.amount} tl
                </List.Item>
              )}
            />

            <Button onClick={onPayment} type="primary" block>
              Ödeme Yap
            </Button>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default PaymentContent;
