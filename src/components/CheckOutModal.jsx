import React, { useState } from "react";
import { Modal, Button, Input, Select, Radio, Row, Col, Form } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Option } = Select;

const CheckoutModal = ({ isVisible, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const inputStyle = {
    borderRadius: "8px",
    border: "1px solid #ccc",
    padding: "10px",
  };

  const handleSubmit = (values) => {
    console.log("Form values: ", values);
    // Handle form submission here
  };

  return (
    <Modal
      title={<div style={{ textAlign: "center" }}>Checkout</div>}
      open={isVisible}
      onCancel={onClose}
      footer={null}
      closeIcon={<CloseOutlined style={{ fontSize: "16px" }} />}
      centered
    >
      <div style={{ padding: "10px 20px" }}>
        <Form
          onFinish={handleSubmit}
          layout="vertical"
        >
          <Row gutter={[16, 16]}>
            {/* First Name and Last Name */}
            <Col xs={24} md={12}>
              <Form.Item
                name="firstName"
                rules={[{ required: true, message: "First Name is required" }]}
              >
                <Input placeholder="Your First Name" style={inputStyle} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="lastName"
                rules={[{ required: true, message: "Last Name is required" }]}
              >
                <Input placeholder="Your Last Name" style={inputStyle} />
              </Form.Item>
            </Col>

            {/* Phone Number and Email Address */}
            <Col xs={24} md={12}>
              <Form.Item
                name="phoneNumber"
                rules={[{ required: true, message: "Phone Number is required" }]}
              >
                <Input placeholder="Phone Number" style={inputStyle} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Email Address is required" }, { type: 'email', message: 'Please enter a valid email' }]}
              >
                <Input placeholder="Email Address" style={inputStyle} />
              </Form.Item>
            </Col>

            {/* Address 1 and Address 2 */}
            <Col xs={24}>
              <Form.Item
                name="address1"
                rules={[{ required: true, message: "Address 1 is required" }]}
              >
                <Input placeholder="Address 1" style={inputStyle} />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name="address2">
                <Input placeholder="Address 2" style={inputStyle} />
              </Form.Item>
            </Col>

            {/* City, Country, State */}
            <Col xs={24} md={8}>
              <Form.Item
                name="city"
                rules={[{ required: true, message: "City is required" }]}
              >
                <Input placeholder="City" style={inputStyle} />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                name="country"
                rules={[{ required: true, message: "Country is required" }]}
              >
                <Select placeholder="Country" style={{ ...inputStyle, width: "100%" }}>
                  <Option value="USA">USA</Option>
                  <Option value="Canada">Canada</Option>
                  <Option value="UK">UK</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                name="state"
                rules={[{ required: true, message: "State is required" }]}
              >
                <Input placeholder="State" style={inputStyle} />
              </Form.Item>
            </Col>
          </Row>

          {/* Payment Method */}
          <div>
            <strong>Payment Method</strong>
            <Form.Item
              name="paymentMethod"
              rules={[{ required: true, message: "Please select a payment method" }]}
              initialValue={paymentMethod}
            >
              <Radio.Group onChange={handlePaymentChange} value={paymentMethod} style={{ marginTop: "10px" }}>
                <Radio value="cash">Cash On Delivery</Radio>
                <Radio value="online">Online Transfer</Radio>
              </Radio.Group>
            </Form.Item>
          </div>

          {/* Checkout Button */}
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
              backgroundColor: "#0D6DB7",
              borderRadius: "8px",
              padding: "12px",
              fontSize: "16px",
            }}
          >
            Checkout
          </Button>
        </Form>
      </div>
    </Modal>
  );
};

export default CheckoutModal;
