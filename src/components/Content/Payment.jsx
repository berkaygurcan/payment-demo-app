import { Button, Card, DatePicker, Form, Input, InputNumber } from "antd";
import Text from "antd/lib/typography/Text";
import React, { useState } from "react";
import Cleave from "cleave.js/react";
import { useDispatch, useSelector } from "react-redux";
import { makePayment } from "../../features/counter/paymentSlice";
import { useNavigate } from "react-router-dom";

const Payment = ({ form }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedPackets = useSelector((state) => state.packets.selectedItems);
  const calculateTotalPrice = () => {
    return selectedPackets.reduce((total, item) => total + item.amount, 0);
  };

  const selectedPacketsIds = selectedPackets.map((packet) => {
    return packet.id;
  });

  const onFinish = (values) => {
    //formdan gelen datayı apiye hazırlama
    const perfectValues = {
      ...values,
      packageIds: selectedPacketsIds,
      cvv: values.cvv.toString(),
      totalAmount: calculateTotalPrice(),
      cardNumber: values["cardNumber"].replace(/\s/g, ""), //boşluklardan kurtulmak için regex
      expireDate: values["expireDate"].format("MM-YYYY"),
    };
   // console.log("Received values of form: ", perfectValues);
    dispatch(makePayment(perfectValues)).then((data) => {
      if (data.type === "payment/makePayment/fulfilled") navigate("/success");
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
            <Cleave
              className="ant-input"
              placeholder="XXXX XXXX XXXX XXXX"
              options={{ creditCard: true }}
            />
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
            <InputNumber type="password" min={100} max={9999} />
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
        {/* Burada normalde istek atılıp gelen değer render edilecek fakat api çalışmadığı için lorem basıldı */}
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
