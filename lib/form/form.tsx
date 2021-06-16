import React, { ReactFragment, FormEventHandler, FormEvent } from "react";
import { Input } from "../input/Input";
import "./form.scss";
export interface formdata {
  [K: string]: string;
}
interface FormProps {
  value: formdata;
  field: Array<{ name: string; label: string; input: { type: string } }>;
  button: ReactFragment;
  onSubmit: FormEventHandler;
  onChange: (value: formdata) => void;
  errors: { [K: string]: string[] };
  errorsDefaultMode?: "first" | "all";
}
export const Form: React.FunctionComponent<FormProps> = (props) => {
  const {
    value,
    field,
    button,
    onChange,
    onSubmit,
    errors,
    errorsDefaultMode,
  } = props;
  const onChangeValue = (name: string, str: string) => {
    const newValue = { ...value, [name]: str };
    onChange(newValue);
  };
  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <form onSubmit={onsubmit}>
      <table className="my-form-table">
        {field.map((f) => (
          <tr key={f.name} className="my-form-tr">
            <td className="my-form-td">
              <span className="my-form-label">{f.label}</span>
            </td>
            <td className="my-form-td">
              <Input
                type={f.input.type}
                value={value![f.name]}
                onChange={(e) => onChangeValue(f.name, e.target.value)}
              />
              <div className="my-form-error">
                {errors[f.name] &&
                  (errorsDefaultMode === "first"
                    ? errors[f.name][0]
                    : errors[f.name].join(" "))}
                <span>&nbsp;</span>
              </div>
            </td>
          </tr>
        ))}
        <tr className="my-form-tr">
          <td className="my-form-td"></td>
          <td className="my-form-td">{button}</td>
        </tr>
      </table>
    </form>
  );
};
Form.defaultProps = {
  errorsDefaultMode: "first",
};
