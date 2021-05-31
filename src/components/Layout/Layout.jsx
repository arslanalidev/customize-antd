import React from "react";
import { Layout } from "antd";

//Components
import TopBar from "./TopBar";
import TitleBar from "./TitleBar";
import SideBar from "./Sidebar";

import "./Layout.scss";

const LayoutWrapper = ({ children, title, titleColor }) => {
  const { Header, Content, Sider } = Layout;

  return (
    <>
      <Layout id="MainLayout">
        <Header className="header">
          <TopBar></TopBar>
        </Header>
        <Content id="contentLayout">
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider
              style={{ paddingTop: "4rem" }}
              id="SideBarLayout"
              className="site-layout-background"
              width={200}
            >
              <SideBar />
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <TitleBar title={title} titleColor={titleColor} />
              <div>{children}</div>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </>
  );
};

export default LayoutWrapper;
