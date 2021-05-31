import React from "react";
import "./Support.scss";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const Support = ({ text, ...rest }) => {
  return (
    <Button id="SupportButton" type="text" icon={<CheckOutlined />} {...rest}>
      {text}
    </Button>
  );
};

export default Support;
