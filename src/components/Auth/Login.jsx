import React, { useEffect } from "react";
import { Button, Card, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../features/counter/userSlice";

const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    //istek atılacak
    dispatch(signUp(values)).then((data) => {
      if(data.type === 'user/signUp/fulfilled')
      navigate('packetsContent')
      form.resetFields();
    });
  };
  return (
    <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",height:"80vh"}}>
      <Card
        style={{
          width: 300,
          borderRadius: 10,
          boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
        }}
      >
        <Form
          name="normal_login"
          className="login-form"
          layout="vertical"
          form={form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Adınız ve Soyadınız"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email Adresiniz"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Devam Et
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
