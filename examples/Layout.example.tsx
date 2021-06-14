import React from "react";
import { Layout } from "../lib/layout/layout";
import { Content } from "../lib/layout/content";
import { Header } from "../lib/layout/header";
import { Footer } from "../lib/layout/footer";
// import { Slider } from "../lib/layout/slider";

export const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <h1>第一个例子</h1>
      <Layout style={{}} className={"xxx"}>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
};
