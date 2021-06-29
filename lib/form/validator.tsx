import { formdata } from "./form";

interface formRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validated?: {
    name: string;
    validate: (value: string) => Promise<void>;
  };
}

type formRules = Array<formRule>;
// interface FormError {
//   [K: string]: String[];
// }

function isEmpty(value: any) {
  return value === undefined || value === null || value === "";
}
export const validator = (
  data: formdata,
  rules: formRules,
  callback: (errors: any) => void
) => {
  let error: any = {};
  const addErrors = (
    value: string,
    message: { [K: string]: string | Promise<void> }
  ) => {
    if (error[value] === undefined) {
      error[value] = [];
    }
    error[value].push(message);
  };
  rules.map((rule) => {
    const value = data[rule.key];
    if (rule.validated) {
      const promise = rule.validated.validate(value);
      console.log(promise);
      addErrors(rule.key, { message: rule.validated.name, promise });
    }
    if (rule.required && isEmpty(value)) {
      addErrors(rule.key, { message: "required" });
    }
    if (!isEmpty(value) && rule.minLength && value.length < rule.minLength) {
      addErrors(rule.key, { message: "minLength" });
    }
    if (!isEmpty(value) && rule.maxLength && value.length > rule.maxLength) {
      addErrors(rule.key, { message: "maxLength" });
    }
    if (!isEmpty(value) && rule.pattern && !rule.pattern.test(value)) {
      addErrors(rule.key, { message: "pattern" });
    }
  });
  console.log(error);
  Promise.all(
    flat(Object.values(error))
      .filter((item) => item.promise)
      .map((item) => item.promise)
  ).then(
    () => {
      const newError = fromEntery(
        Object.keys(error).map((key) => {
          console.log(key);
          return [key, error[key].map((item: any) => item.message)];
        })
      );
      console.log(newError);
      callback(newError);
    },
    () => {
      const newError = fromEntery(
        Object.keys(error).map((key) => {
          console.log(key);
          return [key, error[key].map((item: any) => item.message)];
        })
      );
      console.log(newError);

      callback(newError);
      // callback(error);
    }
  );
};

function flat(arr: Array<any>) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

function fromEntery(array: Array<[string, string[]]>) {
  let result: any = {};
  for (let i = 0; i < array.length; i++) {
    result[array[i][0]] = array[i][1];
  }
  return result;
}
