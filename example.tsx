import React from "react";

import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { IconExample } from "./examples/Icon.example";
import { DialogExample } from "./examples/Dialog.example";
import { LayoutExample } from "./examples/Layout.example";
import { Layout, Content, Header, Slider, Footer } from "./lib/layout/layout";
import "./example.scss";
// function fn(e: React.MouseEvent<SVGAElement | SVGUseElement>) {
//   //   console.log("1");
//   console.log(e);
//   console.log(e.target);
//   //断言
//   console.log((e.target as SVGUseElement).href);
// }

ReactDOM.render(
  <Router>
    <Layout>
      <Header className="site-header">REACT-UI</Header>
      <Layout>
        <Slider className="site-slider">
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
            <li>
              <Link to="/layout">Layout</Link>
            </li>
          </ul>
        </Slider>
        <Content className="site-content">
          <Route path="/icon" component={IconExample}></Route>
          <Route path="/dialog" component={DialogExample}></Route>
          <Route path="/layout" component={LayoutExample}></Route>
        </Content>
      </Layout>
      <Footer className="site-footer"> &copy; vagabond</Footer>
    </Layout>
  </Router>,
  document.querySelector("#root")
);
