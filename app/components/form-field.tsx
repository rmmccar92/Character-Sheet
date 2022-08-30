import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
// If a custom input field is needed
interface FormFieldProps {
  htmlFor: string;
  label?: string;
  value: any;
  type: string;
  style?: CSSProperties;
  onChange?: (...args: any) => any;
  error?: string;
}

export function FormField({
  htmlFor,
  label,
  value,
  type,
  style,
  onChange,
  error,
}: FormFieldProps) {
  const [errTxt, setErrTxt] = useState(error);

  useEffect(() => {
    setErrTxt(error);
  }, [error]);

  return (
    <>
      <label htmlFor={htmlFor} style={{ color: "white", fontSize: "20px" }}>
        {label}
      </label>
      <input
        onChange={(e) => {
          onChange?.(e);
          setErrTxt("");
        }}
        type={type}
        id={htmlFor}
        name={htmlFor}
        value={value}
        style={style}
      />
      {errTxt && (
        <div className="error">
          <p>{errTxt}</p>
        </div>
      )}
    </>
  );
}
