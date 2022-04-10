import { Button, Card, DatePicker, Form, Input, InputNumber } from "antd";
import Text from "antd/lib/typography/Text";
import React, { useState } from "react";

const Payment = ({ form }) => {
  const onFinish = (values) => {
    const perfectValues = {
      ...values,
      expireDate: values["expireDate"].format("MM-YYYY"),
    };
    console.log("Received values of form: ", perfectValues);
    console.log(numberFormat(perfectValues.cardNumber));
  };

  function numberFormat(x) {
    if (x.length < 17 && x.length % 4 === 0) {
      return x.replace(/(.{4})/g, "$1 ");
    }
  }

  const handleChange = (e) => {
    const x = numberFormat(e.target.value)
    console.log(x)
    form.setFieldsValue({
      cardNumber: x
    });
  };

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  return (
    <Card style={{ maxWidth: 450, borderRadius: 10 }}>
      <Card
        title="Kart Bilgileri"
        style={{
          width: 400,
        }}
      >
        <Form
          name="normal_login"
          className="login-form"
          layout="horizontal"
          form={form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Kart Üzerindeki İsim ve Soyisim"
            name="cardHolderName"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="cardNumber"
            label="Kart Numarası"
            rules={[
              {
                required: true,
                message: "Please input your Credit Card Number!",
              },
            ]}
          >
            <Input onChange={handleChange} placeholder="Credit Card Number" />
          </Form.Item>

          <Form.Item name="expireDate" label="Son Kul. Tar." {...config}>
            <DatePicker format={"MM/YYYY"} picker="month" />
          </Form.Item>
          <Form.Item
            label="CVV/CVC"
            name="cvv"
            rules={[
              {
                required: true,
                message: "Please input your CVV/CVC!",
              },
            ]}
          >
            <InputNumber min={100} max={999} />
          </Form.Item>
        </Form>
      </Card>

      <Card
        title="Sözleşme"
        style={{
          width: 400,
          marginTop: 10,
          borderRadius: 10,
        }}
      >
        <Text strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          tenetur, fugiat soluta doloribus, dolores ad cumque, deserunt quae
          magnam amet voluptas earum nihil. Quasi quo eos at blanditiis iusto!
          Deleniti.
        </Text>
      </Card>
    </Card>
  );
};

export default Payment;
