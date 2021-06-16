// import React from "react";

import { formdata } from "./form";

interface formRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

type formRules = Array<formRule>;
interface FormError {
  [K: string]: String[];
}

function isEmpty(value: any) {
  return value === undefined || value === null || value === "";
}
export const validator = (data: formdata, rules: formRules): FormError => {
  let error: any = {};
  const addErrors = (value: string, message: string) => {
    if (error[value] === undefined) {
      error[value] = [];
    }
    error[value].push(message);
  };
  rules.map((rule) => {
    const value = data[rule.key];
    if (rule.required && isEmpty(value)) {
      addErrors(rule.key, "必填选项！");
    }
    if (!isEmpty(value) && rule.minLength && value.length < rule.minLength) {
      addErrors(rule.key, "输入的字段太短了！");
    }
    if (!isEmpty(value) && rule.maxLength && value.length > rule.maxLength) {
      addErrors(rule.key, "输入的字段太长了！");
    }
    if (!isEmpty(value) && rule.pattern && !rule.pattern.test(value)) {
      addErrors(rule.key, "格式不正确！");
      console.log("1");
    }
  });
  return error;
};
