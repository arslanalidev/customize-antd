import React from "react";
import { Row, Col } from "antd";

import "./TitleBar.scss";

const TitleBar = ({ title = "Dashboard", titleColor = "#54626c" }) => {
  return (
    <>
      <Row id="TitleBar" gutter={[0, 20]} justify="space-between">
        <Col>
          <h1 style={{ color: titleColor }}>{title}</h1>
        </Col>
      </Row>
    </>
  );
};

export default TitleBar;
