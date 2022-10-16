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
  className?: string;
}

export function FormField({
  htmlFor,
  label,
  value,
  type,
  style,
  onChange,
  error,
  className,
}: FormFieldProps) {
  const [errTxt, setErrTxt] = useState(error);

  useEffect(() => {
    setErrTxt(error);
  }, [error]);

  return (
    <>
      {type === "textarea" ? (
        <textarea
          id={htmlFor}
          name={htmlFor}
          value={value}
          autoComplete="off"
          onChange={(e) => {
            onChange?.(e);
            setErrTxt("");
          }}
          style={style}
          className={className}
        />
      ) : (
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
            className={className}
          />
        </>
      )}
      <label htmlFor={htmlFor}>{label}</label>
      {errTxt && (
        <div className="error">
          <p>{errTxt}</p>
        </div>
      )}
    </>
  );
}
