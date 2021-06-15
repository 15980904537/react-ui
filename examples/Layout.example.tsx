import React from "react";
import { Layout } from "../lib/layout/layout";
import { Content } from "../lib/layout/content";
import { Header } from "../lib/layout/header";
import { Footer } from "../lib/layout/footer";
import { Slider } from "../lib/layout/slider";

export const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <h1>第一个例子</h1>
      <Layout style={{ height: "500px" }} className={"xxx"}>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>

      <h1>第二个例子</h1>
      <Layout style={{ height: "500px" }} className={"xxx"}>
        <Header>Header</Header>
        <Layout>
          <Slider>Slider</Slider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
      <h1>第三个例子</h1>
      <Layout style={{ height: "500px" }} className={"xxx"}>
        <Header>Header</Header>
        <Layout>
          <Content>Content</Content>
          <Slider>Slider</Slider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <h1>第四个例子</h1>
      <Layout style={{ height: "500px" }} className={"xxx"}>
        <Slider>Slider</Slider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};
