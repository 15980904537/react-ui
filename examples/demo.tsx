import React, { Fragment, useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
interface DemoProps {
  code: string;
}

export const Demo: React.FunctionComponent<DemoProps> = (props) => {
  const [visibleCode, setVisibleCode] = useState(false);

  return (
    <Highlight {...defaultProps} code={props.code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {props.children}
          <button
            style={{ margin: "8px" }}
            onClick={() => setVisibleCode(!visibleCode)}
          >
            展示代码
          </button>
          {visibleCode ? (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          ) : null}
        </Fragment>
      )}
    </Highlight>
  );
};
