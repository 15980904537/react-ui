import React from "react";

import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { IconExample } from "./examples/Icon.example";
import { DialogExample } from "./examples/Dialog.example";
import { LayoutExample } from "./examples/Layout.example";
// function fn(e: React.MouseEvent<SVGAElement | SVGUseElement>) {
//   //   console.log("1");
//   console.log(e);
//   console.log(e.target);
//   //断言
//   console.log((e.target as SVGUseElement).href);
// }

ReactDOM.render(
  <Router>
    <div>
      <header>REACT-UI</header>
      <div>
        <aside>
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
        </aside>
        <main>
          <Route path="/icon" component={IconExample}></Route>
          <Route path="/dialog" component={DialogExample}></Route>
          <Route path="/layout" component={LayoutExample}></Route>
        </main>
      </div>
    </div>
  </Router>,
  document.querySelector("#root")
);
