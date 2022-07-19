import { useState, useEffect } from "react";
import { Center, Container, Title, Button } from "@mantine/core";
import { FormField } from "~/components/form-field";
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
          onClick={() => console.log("Login")}
        >
          {action === "login" ? "Login" : "Register"}
        </Button>
      </Container>
      <Button
        onClick={() => setAction(action === "login" ? "register" : "login")}
      >
        {action === "login" ? "New Here? Register" : "Back to Login"}
      </Button>
    </Center>
  );
}
