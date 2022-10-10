import { useState } from "react";
import type { FC, ChangeEvent } from "react";
import { Button, Container, Title } from "@mantine/core";
import { Form, useActionData, useNavigate } from "@remix-run/react";
import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { createCharacter } from "~/utils/character.server";
import Modal from "~/components/Modal";
import { FormField } from "~/components/form-field";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const characterName = form.get("characterName");
  if (typeof characterName !== "string") {
    return json(
      { error: "Please Choose a Character Name to Get Started" },
      { status: 400 }
    );
  }
  // if (Object.values(errors).some(Boolean))
  //   return json(
  //     {
  //       errors,
  //       fields: { characterName },
  //       form: action,
  //     },
  //     { status: 400 }
  //   );
  return await createCharacter(
    {
      characterName,
    },
    request
  );
};

const Hub: FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const actionData = useActionData();
  // const [formError, setFormError] = useState(actionData?.error || "");
  // const [errors, setErrors] = useState(actionData?.errors || {});
  const [formData, setFormData] = useState({
    characterName: actionData?.fields.characterName || "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setFormData((form) => ({
      ...form,
      [field]: e.target.value,
    }));
  };

  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} type={"initial"}>
          <>
            <Title>Get Started!</Title>
            <p>Character Name</p>
            <Form method="post">
              <FormField
                htmlFor="characterName"
                type="text"
                value={formData.characterName}
                style={{ width: "100%", margin: "2% 0 2% 0" }}
                onChange={(e) => handleChange(e, "characterName")}
              />
              <Button type="submit" style={{ marginTop: "40%" }}>
                Submit
              </Button>
            </Form>
          </>
        </Modal>
      )}
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Container
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              height: "25%",
              border: "1px solid black",
            }}
          >
            <Button onClick={() => navigate("/mycharacters")}>
              My Characters
            </Button>
            <Button onClick={handleClick}>New Character</Button>
          </Container>
          <Container>
            <Form action="/logout" method="post">
              <Button type="submit">Logout</Button>
            </Form>
          </Container>
        </Container>

        <Title>Companions</Title>
        <Container
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        ></Container>
      </Container>
    </>
  );
};
export default Hub;
