import React, { ReactFragment, FormEventHandler, FormEvent } from "react";
import { Input } from "../input/Input";

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
      <div>
        {field.map((f) => (
          <div key={f.name}>
            {f.label}
            <Input
              type={f.input.type}
              value={value![f.name]}
              onChange={(e) => onChangeValue(f.name, e.target.value)}
            />
            <div>{errors[f.name]}</div>
          </div>
        ))}
        {button}
      </div>
    </form>
  );
};
