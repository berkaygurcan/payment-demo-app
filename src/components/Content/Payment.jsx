import { Button, Card, DatePicker, Form, Input, InputNumber } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";

const Payment = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
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

  const onPayment = () => {
    form.submit();
  };
  return (
    <Card style={{maxWidth: 450, borderRadius: 10}}>
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
            name="username"
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
            name="email"
            label="Kart Numarası"
            rules={[
              {
                required: true,
                message: "Please input your Credit Card Number!",
              },
            ]}
          >
            <Input placeholder="Credit Card Number" />
          </Form.Item>

          <Form.Item name="date-time-picker" label="Son Kul. Tar." {...config}>
            <DatePicker format={"MM/YYYY"} picker="month" />
            
          </Form.Item>
          <Form.Item
            label="CVV/CVC"
            name="inputNumber"
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
          marginTop:10,
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
