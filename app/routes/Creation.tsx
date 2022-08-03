import { useState } from "react";
import { Container, Title, Text, Button, Stepper } from "@mantine/core";
import { Form, useActionData } from "@remix-run/react";
import { FormField } from "~/components/form-field";
import Layout from "~/components/Layout";
// import { useLoaderData } from "@remix-run/react";
// import { getUserSession } from "~/utils/auth.server";
// import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { createCharacter } from "~/utils/character.server";

export const action: ActionFunction = async ({ request }) => {
  // TODO: Stepper is breaking form data will need to submit data per step
  const form = await request.formData();
  const characterName = form.get("characterName");
  const characterClass = form.get("characterClass");
  const alignment = form.get("alignment");
  const level = form.get("level");
  const deity = form.get("deity");
  const homeland = form.get("homeland");
  const race = form.get("race");
  const size = form.get("size");
  const gender = form.get("gender");
  const characterAge = form.get("characterAge");
  const characterHeight = form.get("characterHeight");
  const weight = form.get("weight");
  const hairColor = form.get("hairColor");
  const eyeColor = form.get("eyeColor");
  const strength = form.get("strength");
  const dexterity = form.get("dexterity");
  const constitution = form.get("constitution");
  const intelligence = form.get("intelligence");
  const wisdom = form.get("wisdom");
  const charisma = form.get("charisma");
  console.log("form", form);
  // TODO: Add better validation
  // if (
  //   typeof characterName !== "string" ||
  //   typeof characterClass !== "string" ||
  //   typeof alignment !== "string" ||
  //   typeof level !== "number" ||
  //   typeof deity !== "string" ||
  //   typeof homeland !== "string" ||
  //   typeof race !== "string" ||
  //   typeof size !== "string" ||
  //   typeof gender !== "string" ||
  //   typeof characterAge !== "string" ||
  //   typeof weight !== "string" ||
  //   typeof strength !== "number" ||
  //   typeof dexterity !== "number" ||
  //   typeof constitution !== "number" ||
  //   typeof wisdom !== "number" ||
  //   typeof intelligence !== "number" ||
  //   typeof charisma !== "number" ||
  //   typeof characterHeight !== "string" ||
  //   typeof hairColor !== "string" ||
  //   typeof eyeColor !== "string"
  // ) {
  //   return json({ error: "Invalid form data" }, { status: 400 });
  // }
  // TODO errors bellow caused by possible null values validation can fix
  return await createCharacter(
    {
      characterName,
      characterClass,
      alignment,
      level,
      deity,
      homeland,
      race,
      size,
      gender,
      characterAge,
      characterHeight,
      weight,
      hairColor,
      eyeColor,
      strength,
      dexterity,
      constitution,
      intelligence,
      wisdom,
      charisma,
    },
    request
  );
};
const Creation = () => {
  //   const { user } = useLoaderData();
  const actionData = useActionData();
  // const { userId } = useLoaderData();
  // console.log("user", userId);
  const [formData, setFormData] = useState({
    characterName: actionData?.fields?.characterName || "",
    characterClass: actionData?.fields?.characterClass || "",
    alignment: actionData?.fields?.alignment || "",
    level: actionData?.fields?.level || "",
    deity: actionData?.fields?.deity || "",
    homeland: actionData?.fields?.homeland || "",
    race: actionData?.fields?.race || "",
    size: actionData?.fields?.size || "",
    gender: actionData?.fields?.gender || "",
    characterAge: actionData?.fields?.characterAge || "",
    characterHeight: actionData?.fields?.characterHeight || "",
    weight: actionData?.fields?.weight || "",
    hairColor: actionData?.fields?.hairColor || "",
    eyeColor: actionData?.fields?.eyeColor || "",
    strength: actionData?.fields?.strength || "",
    dexterity: actionData?.fields?.dexterity || "",
    constitution: actionData?.fields?.constitution || "",
    intelligence: actionData?.fields?.intelligence || "",
    wisdom: actionData?.fields?.wisdom || "",
    charisma: actionData?.fields?.charisma || "",
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
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
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
                <Form method="post">
                  {active === 0 ? (
                    <>
                      <Title color="white" align="center">
                        General Info
                      </Title>
                      <FormField
                        htmlFor="characterName"
                        label="Character Name"
                        value={formData.characterName}
                        type="text"
                        style={{ width: "100%" }}
                        onChange={(e) => handleChange(e, "characterName")}
                      />
                      <FormField
                        htmlFor="alignment"
                        label="Alignment"
                        value={formData.alignment}
                        type="text"
                        style={{ width: "100%" }}
                        onChange={(e) => handleChange(e, "alignment")}
                      />
                      <FormField
                        htmlFor="level"
                        label="Level"
                        value={formData.level}
                        type="text"
                        style={{ width: "100%" }}
                        onChange={(e) => handleChange(e, "level")}
                      />
                      <FormField
                        htmlFor="deity"
                        label="Deity"
                        value={formData.deity}
                        type="text"
                        style={{ width: "100%" }}
                        onChange={(e) => handleChange(e, "deity")}
                      />
                      <FormField
                        htmlFor="homeland"
                        label="Homeland"
                        value={formData.homeland}
                        type="text"
                        style={{ width: "100%" }}
                        onChange={(e) => handleChange(e, "homeland")}
                      />
                      <FormField
                        htmlFor="race"
                        label="Race"
                        value={formData.race}
                        type="text"
                        style={{ width: "100%" }}
                        onChange={(e) => handleChange(e, "race")}
                      />
                      <FormField
                        htmlFor="size"
                        label="Size"
                        value={formData.size}
                        type="text"
                        style={{ width: "100%" }}
                        onChange={(e) => handleChange(e, "size")}
                      />
                      <FormField
                        htmlFor="gender"
                        label="Gender"
                        value={formData.gender}
                        type="text"
                        style={{ width: "100%" }}
                        onChange={(e) => handleChange(e, "gender")}
                      />
                      <FormField
                        htmlFor="characterAge"
                        label="Age"
                        value={formData.characterAge}
                        type="text"
                        style={{ width: "100%" }}
                        onChange={(e) => handleChange(e, "characterAge")}
                      />
                      <FormField
                        htmlFor="characterHeight"
                        label="Height"
                        value={formData.characterHeight}
                        type="text"
                        style={{ width: "100%" }}
                        onChange={(e) => handleChange(e, "characterHeight")}
                      />
                      <FormField
                        htmlFor="weight"
                        label="Weight"
                        value={formData.weight}
                        type="text"
                        style={{ width: "100%" }}
                        onChange={(e) => handleChange(e, "weight")}
                      />
                      <FormField
                        htmlFor="hairColor"
                        label="Hair Color"
                        value={formData.hairColor}
                        type="text"
                        style={{ width: "100%" }}
                        onChange={(e) => handleChange(e, "hairColor")}
                      />
                      <FormField
                        htmlFor="eyeColor"
                        label="Eye Color"
                        value={formData.eyeColor}
                        type="text"
                        style={{ width: "100%" }}
                        onChange={(e) => handleChange(e, "eyeColor")}
                      />
                      <FormField
                        htmlFor="characterClass"
                        label="Class"
                        value={formData.characterClass}
                        type="text"
                        style={{ width: "100%" }}
                        onChange={(e) => handleChange(e, "characterClass")}
                      />
                    </>
                  ) : active === 1 ? (
                    <>
                      <Title color="white" align="center">
                        Stats
                      </Title>
                      <Container
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                        }}
                      >
                        <Container
                          style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <FormField
                            htmlFor="strength"
                            label="Strength"
                            value={formData.strength}
                            type="number"
                            style={{ width: "51%" }}
                            onChange={(e) => handleChange(e, "strength")}
                          />
                          <FormField
                            htmlFor="dexterity"
                            label="Dexterity"
                            value={formData.dexterity}
                            type="number"
                            style={{ width: "51%" }}
                            onChange={(e) => handleChange(e, "dexterity")}
                          />
                          <FormField
                            htmlFor="constitution"
                            label="Constitution"
                            value={formData.constitution}
                            type="number"
                            style={{ width: "51%" }}
                            onChange={(e) => handleChange(e, "constitution")}
                          />
                        </Container>
                        <Container
                          style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <FormField
                            htmlFor="intelligence"
                            label="Intelligence"
                            value={formData.intelligence}
                            type="number"
                            style={{ width: "51%" }}
                            onChange={(e) => handleChange(e, "intelligence")}
                          />
                          <FormField
                            htmlFor="wisdom"
                            label="Wisdom"
                            value={formData.wisdom}
                            type="number"
                            style={{ width: "51%" }}
                            onChange={(e) => handleChange(e, "wisdom")}
                          />
                          <FormField
                            htmlFor="charisma"
                            label="Charisma"
                            value={formData.charisma}
                            type="number"
                            style={{ width: "51%" }}
                            onChange={(e) => handleChange(e, "charisma")}
                          />
                        </Container>
                      </Container>
                    </>
                  ) : active === 2 ? (
                    <>
                      <Title color="white" align="center">
                        Skills
                      </Title>
                    </>
                  ) : active === 3 ? (
                    <>
                      <Title color="white" align="center">
                        Feats and Traits
                      </Title>
                    </>
                  ) : active === 4 ? (
                    <>
                      <Title color="white" align="center">
                        Backstory
                      </Title>
                    </>
                  ) : active === 5 ? (
                    <>
                      <Title color="white" align="center">
                        Review
                      </Title>
                    </>
                  ) : null}
                  {active < 5 && (
                    <Button
                      onClick={() => nextStep()}
                      style={{ marginTop: "10%" }}
                    >
                      Next
                    </Button>
                  )}
                  <Button
                    onClick={() => prevStep()}
                    style={{ marginTop: "10%" }}
                  >
                    Prev
                  </Button>
                  {active === 5 && (
                    <Button type="submit" style={{ marginTop: "40%" }}>
                      Submit
                    </Button>
                  )}
                </Form>
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
