import { useState, useEffect, useRef } from "react";
import { Container, Title, Button, Text, Box } from "@mantine/core";
import { FormField } from "~/components/form-field";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import {
  validEmail,
  validPassword,
  validName,
} from "~/utils/validators.server";
import { login, register, getUser } from "~/utils/auth.server";
import Layout from "~/components/Layout";

export const loader: LoaderFunction = async ({ request }) => {
  return (await getUser(request)) ? redirect("/hub") : null;
};

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
    password: validPassword(password),
    ...(action === "register"
      ? {
          firstName: validName((firstName as string) || ""),
          lastName: validName((lastName as string) || ""),
        }
      : {}),
  };

  if (Object.values(errors).some(Boolean))
    return json(
      {
        errors,
        fields: { email, password, firstName, lastName },
        form: action,
      },
      { status: 400 }
    );

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
  const actionData = useActionData();
  const firstLoad = useRef(true);
  const [formError, setFormError] = useState(actionData?.error || "");
  const [errors, setErrors] = useState(actionData?.errors || {});
  const [action, setAction] = useState("login");
  const [formData, setFormData] = useState({
    email: actionData?.fields?.email || "",
    password: actionData?.fields?.password || "",
    firstName: actionData?.fields?.firstName || "",
    lastName: actionData?.fields?.lastName || "",
    passwordConfirm: "",
  });

  useEffect(() => {
    // Clear errors
    if (firstLoad.current) {
      const newState = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        passwordConfirm: "",
      };
      setErrors(newState);
      setFormError("");
      setFormData(newState);
    }
  }, [action]);

  useEffect(() => {
    if (!firstLoad.current) {
      setFormError("");
    }
  }, [formData]);

  useEffect(() => {
    firstLoad.current = false;
  }, []);

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
    <Layout>
      <Box
      sx={{
        height: "90vh",
        width: "80vw",
        display: "flex",
        justifyContent:"center",
        flexDirection:"column",
        // background: "linear-gradient(to right, rgba(0,0,0,.7), rgba(0, 0, 0, .2)), url(https://www.wallpaperflare.com/static/202/435/755/simple-background-purple-black-bokeh-wallpaper.jpg)",
        backgroundSize:"cover",

      }}
      >
      <Container
        className="box"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
          fontFamily:"Uncial Antiqua",
          width: "25vw",
          textAlign: "center",
          background: "linear-gradient(to left, rgba(100,6,115,.3), rgba(100, 6, 205, .3))",
          backgroundSize:"cover",
          borderRadius: "20px",
          backdropFilter:"blur(15px)",
          boxShadow:"inset 0 0 100px rgba(110,5,150,.7)"
          // boxShadow:`12px -10px 1px rgb(100, 6, 115), -13px 10px 1px rgb(100, 6, 205)`,
        }}
      >
        <Title style={{ color: "white",fontSize: "80px", fontFamily:"Euphoria Script", letterSpacing:"6px"}}>
          {action === "login" ? "Login" : "Register"}
        </Title>
        <Form
          method="post"
          style={{ display: "Flex", flexDirection: "column", width: "60%" }}
        >
          {action === "register" && (
            <>
              <FormField
                htmlFor="firstName"
                label="First Name"
                value={formData.firstName}
                type="text"
                onChange={(e) => handleChange(e, "firstName")}
                error={errors?.firstName}
                style={{borderRadius:"10px", border: "none", fontSize:"20px"}}
              />
              <FormField
                htmlFor="lastName"
                label="Last Name"
                value={formData.lastName}
                type="text"
                onChange={(e) => handleChange(e, "lastName")}
                error={errors?.lastName}
                style={{borderRadius:"10px", border: "none", fontSize:"20px"}}
              />
            </>
          )}
          <FormField
            htmlFor="email" 
            label="Email"       
            value={formData.email}
            type="text"
            onChange={(e) => handleChange(e, "email")}
            error={errors?.email}
            style={{borderRadius:"10px", border: "none", fontSize:"20px"}}
          />
          <FormField
            htmlFor="password"
            label="Password"
            value={formData.password}
            type="password"
            onChange={(e) => handleChange(e, "password")}
            error={errors?.password}
            style={{borderRadius:"10px", border: "none", fontSize:"20px"}}
          />
          {/* 
          {action === "register" && (
            <FormField
              htmlFor="passwordConfirm"
              label="Confirm Password"
              value={formData.passwordConfirm}
              type="password"
              onChange={(e) => handleChange(e, "passwordConfirm")}
              error={errors.passwordConfirm}
            />
          )} */}
          <Button
            type="submit"
            name="_action"
            value={action}
            sx={{ 
              margin: "auto", 
              marginTop:"1em",
              background: "linear-gradient(to right,rgb(100, 6, 115), rgb(100,6,205), rgb(155, 55, 255), rgb(100,6,205), rgb(100, 6, 115))",  
              transition:"all 1s",
              backgroundSize:"400% auto",
              width: "60%",
              borderRadius:"20px",
              "&:hover":{
                backgroundPosition:"right",
              }
            }}
          >
            {action === "login" ? "Login" : "Register"}
          </Button>
        </Form>
      </Container>
      <Container>
        <Text color="red">{formError}</Text>
      </Container>
      <Button
      style={{background: "none"}}
        onClick={() => setAction(action === "login" ? "register" : "login")}
      >
        {action === "login" ? "New Here? Register" : "Back to Login"}
      </Button>
      </Box>
    </Layout>
  );
}
