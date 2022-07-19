import { useState, useEffect } from "react";

// If a custom input field is needed
interface FormFieldProps {
  htmlFor: string;
  label: string;
  value: any;
  type: string;
  onChange?: (...args: any) => any;
  error?: string;
}

export function FormField({
  htmlFor,
  label,
  value,
  type,
  onChange,
  error,
}: FormFieldProps) {
  const [errTxt, setErrTxt] = useState(error);

  useEffect(() => {
    setErrTxt(error);
  }, [error]);

  return (
    <>
      <label htmlFor={htmlFor} style={{ color: "white", fontSize: "12px" }}>
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
      />
      {errTxt && (
        <div className="error">
          <p>{errTxt}</p>
        </div>
      )}
    </>
  );
}
