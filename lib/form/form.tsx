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
}
export const Form: React.FunctionComponent<FormProps> = (props) => {
  const { value, field, button, onChange, onSubmit, errors } = props;
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
      <table>
        {field.map((f) => (
          <tr key={f.name} className="my-form-tr">
            <td className="my-form-td">
              <span>{f.label}</span>
            </td>
            <td className="my-form-td">
              <Input
                type={f.input.type}
                value={value![f.name]}
                onChange={(e) => onChangeValue(f.name, e.target.value)}
              />
              <div>{errors[f.name]}</div>
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
