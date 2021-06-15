import React, { ReactFragment } from "react";

export interface formdata {
  [K: string]: string;
}
interface FormProps {
  value?: formdata;
  field: Array<{ name: string; label: string; input: { type: string } }>;
  button: ReactFragment;
}
export const Form: React.FunctionComponent<FormProps> = (props) => {
  const { value, field, button } = props;
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <form>
      <div>
        {field.map((f) => (
          <div key={f.name}>
            {f.label}
            <input
              type={f.input.type}
              value={value![f.name]}
              onChange={onChangeValue}
            />
          </div>
        ))}
        {button}
      </div>
    </form>
  );
};
