import React from "react";

import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
// import { IconExample } from "./examples/Icon.example";
import { DialogExample } from "./examples/Dialog.example";
import { LayoutExample } from "./examples/Layout.example";
import { Layout, Content, Header, Slider, Footer } from "./lib/layout/layout";
import "./example.scss";
// import { Demo } from "./examples/demo";
import { IconDemo } from "./examples/Icon.demo";
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
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
          </ul>
        </Slider>
        <Content className="site-content">
          <Route path="/icon" component={IconDemo}></Route>
          <Route path="/dialog" component={DialogExample}></Route>
          <Route path="/layout" component={LayoutExample}></Route>
        </Content>
      </Layout>
      <Footer className="site-footer"> &copy; vagabond</Footer>
    </Layout>
  </Router>,
  document.querySelector("#root")
);
