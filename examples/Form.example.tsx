import React, { useState, Fragment, FormEvent } from "react";
import { Form, formdata } from "../lib/form/form";
export const FormExample: React.FunctionComponent = () => {
  const [FormData, setFormData] = useState<formdata>({
    username: "frank",
    password: "",
  });
  const [field] = useState([
    { name: "username", label: "用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "password" } },
  ]);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    console.log(FormData);
    // axios.post("/hah", FormData);
  };

  return (
    <div>
      <Form
        value={FormData}
        field={field}
        button={
          <Fragment>
            <button>提交</button>
            <button>取消</button>
          </Fragment>
        }
        onSubmit={submit}
        onChange={(newValue) => setFormData(newValue)}
      ></Form>
    </div>
  );
};
