import React, { useState, Fragment } from "react";
import { Form } from "../lib/form/form";
export const FormExample: React.FunctionComponent = () => {
  const [FormData] = useState({
    username: "",
    password: "",
  });
  const [field] = useState([
    { name: "username", label: "用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "password" } },
  ]);

  return (
    <div>
      {"hahha"}
      <Form
        value={FormData}
        field={field}
        button={
          <Fragment>
            <button>提交</button>
            <button>取消</button>
          </Fragment>
        }
      ></Form>
    </div>
  );
};
