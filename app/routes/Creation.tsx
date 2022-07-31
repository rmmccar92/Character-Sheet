import { useState } from "react";
import Modal from "~/components/Modal";
import { Container, Title, Text, Button, Stepper } from "@mantine/core";
import { Form, useActionData } from "@remix-run/react";
import { FormField } from "~/components/form-field";
import Layout from "~/components/Layout";
// import { useLoaderData } from "@remix-run/react";
// import { getUserById } from "~/utils/users.server";
// import type { LoaderFunction } from "@remix-run/node";
// import { json, redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const characterName = form.get("characterName");
  const characterClass = form.get("characterClass");
};
const Creation = () => {
  //   const { user } = useLoaderData();
  const actionData = useActionData();

  const [formData, setFormData] = useState({
    characterName: actionData?.fields.characterName || "",
    characterClass: actionData?.fields.characterClass || "",
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

  //   Stepper Functions
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 6 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    // <Modal isOpen={true}>
    <Layout>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Title>Character Creation</Title>
        <Text>Coming Soon!</Text>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            background: "black",
            border: "1px solid white",
            padding: 0,
          }}
        >
          <Container style={{ marginTop: "2%" }}>
            <Stepper active={active} onStepClick={setActive} color="teal">
              <Stepper.Step label="Step 1" style={{ color: "white" }} />
              <Stepper.Step label="Step 2" style={{ color: "white" }} />
              <Stepper.Step label="Step 3" style={{ color: "white" }} />
              <Stepper.Step label="Step 4" style={{ color: "white" }} />
              <Stepper.Step label="Step 5" style={{ color: "white" }} />
              <Stepper.Step label="Step 6" style={{ color: "white" }} />
            </Stepper>
          </Container>
          <Container
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: 0,
              margin: "5% 0 2% 0",
              width: "100%",
            }}
          >
            <Container
              style={{
                border: "1px solid red",
                width: "40%",
                height: "100%",
                //   display: "flex",
                //   flexDirection: "row-reverse",
                //   justifyContent: "center",
                //   alignItems: "center",
              }}
            >
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  margin: "1%",
                  color: "white",
                }}
              >
                {active === 1 ? (
                  <Form action="/create" method="post">
                    <FormField
                      htmlFor="characterName"
                      label="Character Name"
                      value={formData.characterName}
                      type="text"
                      style={{ width: "100%" }}
                      onChange={(e) => handleChange(e, "characterName")}
                    />
                    <FormField
                      htmlFor="characterClass"
                      label="Class"
                      value={formData.characterClass}
                      type="text"
                      style={{ width: "100%" }}
                      onChange={(e) => handleChange(e, "characterClass")}
                    />
                  </Form>
                ) : active === 2 ? (
                  <div>
                    <h1>Step 2</h1>
                  </div>
                ) : active === 3 ? (
                  <div>
                    <h1>Step 3</h1>
                  </div>
                ) : active === 4 ? (
                  <div>
                    <h1>Step 4</h1>
                  </div>
                ) : active === 5 ? (
                  <div>
                    <h1>Step 5</h1>
                  </div>
                ) : active === 6 ? (
                  <div>
                    <h1>Step 6</h1>
                  </div>
                ) : null}
                <Button onClick={() => nextStep()} style={{ marginTop: "10%" }}>
                  Next
                </Button>
                <Button onClick={() => prevStep()} style={{ marginTop: "10%" }}>
                  Prev
                </Button>
              </Container>
            </Container>
            <Container
              style={{
                background: "white",
                width: "50%",
                height: "25em",
                textAlign: "center",
              }}
            >
              <Text>Character Preview</Text>
            </Container>
          </Container>
        </Container>
      </Container>
    </Layout>
    // </Modal>
  );
};

export default Creation;
