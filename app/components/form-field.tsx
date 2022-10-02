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
      <input
        autoComplete="off"
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
      <label htmlFor={htmlFor}>{label}</label>

      {errTxt && (
        <div className="error">
          <p>{errTxt}</p>
        </div>
      )}
    </>
  );
}
