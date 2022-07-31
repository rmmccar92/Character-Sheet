import { useState } from "react";
import Modal from "~/components/Modal";
import { Container, Title, Text, Button } from "@mantine/core";
import { Form, useActionData } from "@remix-run/react";
import { FormField } from "~/components/form-field";
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
  return (
    // <Modal isOpen={true}>
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
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          background: "black",
          border: "1px solid white",
          padding: "1%",
        }}
      >
        <Container
          style={{ border: "1px solid red", width: "50%", height: "100%" }}
        >
          <Form action="/create" method="post">
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                margin: "1%",
              }}
            >
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
              <Button type="submit" style={{ marginTop: "10%" }}>
                Next
              </Button>
            </Container>
          </Form>
        </Container>
        <Container
          style={{ background: "white", width: "50%", height: "25em" }}
        >
          <Text>Character Preview</Text>
        </Container>
      </Container>
    </Container>
    // </Modal>
  );
};

export default Creation;
