import React, { useState, Fragment, FormEvent } from "react";
import { Form, formdata } from "../lib/form/form";
import { validator } from "../lib/form/validator";
export const FormExample: React.FunctionComponent = () => {
  const [error, setError] = useState({});
  const [FormData, setFormData] = useState<formdata>({
    username: "frank",
    password: "",
  });
  const [field] = useState([
    { name: "username", label: "用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "password" } },
  ]);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    // console.log(FormData);
    const error = validator(FormData, [
      { key: "username", required: true },
      { key: "username", minLength: 6 },
      { key: "username", maxLength: 9 },
      { key: "username", pattern: /^[A-Za-z]+$/ },
      { key: "password", required: true },
    ]);
    setError(error);
    console.log(error);
    // axios.post("/hah", FormData);
  };

  return (
    <div>
      <Form
        value={FormData}
        field={field}
        button={
          <Fragment>
            <button type="submit">提交</button>
            <button>取消</button>
          </Fragment>
        }
        onSubmit={submit}
        onChange={(newValue) => setFormData(newValue)}
        errors={error}
      ></Form>
    </div>
  );
};
