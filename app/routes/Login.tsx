import { useState } from "react";
import { Center, Container, Title, Button, InputWrapper } from "@mantine/core";
import { FormField } from "~/components/form-field";
import type { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import {
  validEmail,
  // validPassword,
  validName,
} from "~/utils/validators.server";
import { login, register } from "~/utils/auth.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const action = form.get("_action");
  const email = form.get("email");
  const password = form.get("password");
  let firstName = form.get("firstName");
  let lastName = form.get("lastName");

  // Validation
  if (
    typeof action !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return json({ error: "Invalid form data", form: action }, { status: 400 });
  }
  if (
    action === "register" &&
    (typeof firstName !== "string" || typeof lastName !== "string")
  ) {
    return json({ error: "Invalid form data", form: action }, { status: 400 });
  }

  const errors = {
    email: validEmail(email),
    // password: validPassword(password),
    ...(action === "register"
      ? {
          firstName: validName((firstName as string) || ""),
          lastName: validName((lastName as string) || ""),
        }
      : {}),
  };

  if (Object.values(errors).some(Boolean)) {
    return json(
      {
        errors,
        fields: { email, password, firstName, lastName },
        form: action,
      },
      { status: 400 }
    );
  }
  switch (action) {
    case "login":
      return await login({ email, password });
    case "register":
      firstName = firstName as string;
      lastName = lastName as string;
      return await register({ email, password, firstName, lastName });
    default:
      return json(
        { error: "Invalid form data", form: action },
        { status: 400 }
      );
  }
};

export default function Login() {
  const [action, setAction] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    passwordConfirm: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({
      ...form,
      [field]: e.target.value,
    }));
  };
  return (
    <Center
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container
        className="box"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
          padding: "2%",
          // height: "50vh",
          width: "45vw",
          textAlign: "center",
          background: "rgba(0, 0, 0)",
          border: "2px solid white",
          borderRadius: "5px",
        }}
      >
        <Title style={{ color: "white", marginBottom: "5%" }}>
          {action === "login" ? "Login" : "Register"}
        </Title>
        <Form
          method="post"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {action === "register" && (
            <>
              <FormField
                htmlFor="firstName"
                label="First Name"
                value={formData.firstName}
                type="text"
                onChange={(e) => handleChange(e, "firstName")}
              />
              <FormField
                htmlFor="lastName"
                label="Last Name"
                value={formData.lastName}
                type="text"
                onChange={(e) => handleChange(e, "lastName")}
              />
            </>
          )}

          <FormField
            htmlFor="email"
            label="Email"
            value={formData.email}
            type="text"
            onChange={(e) => handleChange(e, "email")}
          />
          <FormField
            htmlFor="password"
            label="Password"
            value={formData.password}
            type="password"
            onChange={(e) => handleChange(e, "password")}
          />

          {action === "register" && (
            <FormField
              htmlFor="passwordConfirm"
              label="Confirm Password"
              value={formData.passwordConfirm}
              type="password"
              onChange={(e) => handleChange(e, "passwordConfirm")}
            />
          )}
          <Button
            type="submit"
            name="_action"
            value={action}
            style={{ margin: "10px" }}
            // onClick={() => console.log("Login")}
          >
            {action === "login" ? "login" : "register"}
          </Button>
        </Form>
      </Container>

      <Button
        onClick={() => setAction(action === "login" ? "register" : "login")}
      >
        {action === "login" ? "New Here? Register" : "Back to Login"}
      </Button>
    </Center>
  );
}
