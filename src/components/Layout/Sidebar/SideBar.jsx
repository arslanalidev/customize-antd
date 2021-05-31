import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { CheckOutlined } from "@ant-design/icons";

// Styles
import "./SideBar.scss";

const { SubMenu } = Menu;

const SideBar = () => {
  return (
    <>
      <Menu
        id="SideMenu"
        style={{ backgroundColor: "#F1F5F8" }}
        mode={"inline"}
        theme={"light"}
      >
        <Menu.Item key="dashboard">
          <NavLink to="/dashboard">
            <CheckOutlined /> <span>Dashboard</span>
          </NavLink>
        </Menu.Item>
        <SubMenu key="deliverySubMenu" icon={<CheckOutlined />} title="Menu">
          <Menu.Item key="createDelivery" icon={<CheckOutlined />}>
            <NavLink to="/create-delivery">Submenu item</NavLink>
          </Menu.Item>

          <Menu.Item key="viewDeliveries" icon={<CheckOutlined />}>
            <NavLink to="/view-deliveries">Submenu item</NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default SideBar;
