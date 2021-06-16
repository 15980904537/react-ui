import React, { useState, Fragment, FormEvent } from "react";
import { Form, formdata } from "../lib/form/form";
import { validator } from "../lib/form/validator";
import { Button } from "../lib/button/button";

const usernames = ["jack", "frank", "alice"];
const checkUserName = (
  username: string,
  success: () => void,
  fail: () => void
) => {
  setTimeout(() => {
    if (usernames.indexOf(username) > -1) {
      console.log("resolve");
      success();
    } else {
      console.log("reject");
      fail();
    }
  }, 1000);
};
export const FormExample: React.FunctionComponent = () => {
  const [error, setError] = useState({});
  const [FormData, setFormData] = useState<formdata>({
    username: "",
    password: "",
  });
  const [field] = useState([
    { name: "username", label: "用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "password" } },
  ]);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    // console.log(FormData);
    validator(
      FormData,
      [
        { key: "username", required: true },
        { key: "username", minLength: 6 },
        {
          key: "username",
          validated: {
            name: "unique",
            validate(username: string) {
              return new Promise((resolve, reject) => {
                checkUserName(username, resolve, reject);
              });
            },
          },
        },
        { key: "username", pattern: /^[A-Za-z]+$/ },
        { key: "password", required: true },
      ],
      (error) => {
        setError(error);
        // console.log(error);
      }
    );

    // axios.post("/hah", FormData);
  };

  return (
    <div>
      <Form
        value={FormData}
        field={field}
        button={
          <Fragment>
            <Button type="submit" level={"important"}>
              提交
            </Button>
            <Button>取消</Button>
          </Fragment>
        }
        onSubmit={submit}
        onChange={(newValue) => setFormData(newValue)}
        errors={error}
      ></Form>
    </div>
  );
};
