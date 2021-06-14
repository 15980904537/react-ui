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
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>

      <h1>第二个例子</h1>
      <Layout style={{ height: "500px" }} className={"xxx"}>
        <Header></Header>
        <Layout>
          <Slider></Slider>
          <Content></Content>
        </Layout>
        <Footer></Footer>
      </Layout>
      <h1>第三个例子</h1>
      <Layout style={{ height: "500px" }} className={"xxx"}>
        <Header></Header>
        <Layout>
          <Content></Content>
          <Slider></Slider>
        </Layout>
        <Footer></Footer>
      </Layout>

      <h1>第四个例子</h1>
      <Layout style={{ height: "500px" }} className={"xxx"}>
        <Slider></Slider>
        <Layout>
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    </div>
  );
};
