import { useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Container, Title, Text, Button, Stepper, Radio } from "@mantine/core";
import { Form, useActionData, useSubmit } from "@remix-run/react";
import { FormField } from "~/components/form-field";
import Layout from "~/components/Layout";
import type { ActionFunction } from "@remix-run/node";
import { createCharacter } from "~/utils/character.server";
import skillsData from "~/utils/data.js";
import RadioButton from "~/components/Radio";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  // Object to be submitted to the server created from values from the form
  const values = Object.fromEntries(form);
  // TODO error handling
  return await createCharacter(
    {
      ...values,
    },
    request
  );
};
const Creation = () => {
  const actionData = useActionData();
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
    skills: actionData?.fields?.skills || {},
  });
  useMemo(() => {
    skillsData.forEach((skill) => {
      setFormData((prev) => ({
        ...prev,
        skills: {
          ...prev.skills,
          [skill.name]: actionData?.fields?.[skill.name] || "",
        },
      }));
    });
  }, []);
  // console.log("formData", formData);
  const submit = useSubmit();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formData.skills = JSON.stringify(formData.skills);
    // console.log("formData", formData);
    submit(formData, { method: "post" });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setFormData((form) => ({
      ...form,
      [field]: e.target.value,
    }));
  };

  const handleSkillChange = (
    e: ChangeEvent<HTMLInputElement>,
    skill: string
  ) => {
    setFormData((form) => ({
      ...form,
      skills: {
        ...form.skills,
        [skill]: e.target.value,
      },
    }));
  };

  //   Stepper Functions
  const [active, setActive] = useState(0);
  const nextStep = () => {
    setActive((current) => (current < 5 ? current + 1 : current));
  };
  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };
  return (
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
                <Form onSubmit={handleSubmit}>
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
                            type="string"
                            style={{ width: "51%" }}
                            onChange={(e) => handleChange(e, "strength")}
                          />
                          <FormField
                            htmlFor="dexterity"
                            label="Dexterity"
                            value={formData.dexterity}
                            type="string"
                            style={{ width: "51%" }}
                            onChange={(e) => handleChange(e, "dexterity")}
                          />
                          <FormField
                            htmlFor="constitution"
                            label="Constitution"
                            value={formData.constitution}
                            type="string"
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
                            type="string"
                            style={{ width: "51%" }}
                            onChange={(e) => handleChange(e, "intelligence")}
                          />
                          <FormField
                            htmlFor="wisdom"
                            label="Wisdom"
                            value={formData.wisdom}
                            type="string"
                            style={{ width: "51%" }}
                            onChange={(e) => handleChange(e, "wisdom")}
                          />
                          <FormField
                            htmlFor="charisma"
                            label="Charisma"
                            value={formData.charisma}
                            type="string"
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
                      {skillsData.map((skill) => (
                        <Container
                          key={skill.name}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <RadioButton skillName={skill.name} />
                          <Text>{skill.name}</Text>
                          <FormField
                            htmlFor={skill.name}
                            value={formData.skills?.[skill.name]}
                            type="string"
                            label=""
                            style={{
                              width: "10%",
                              marginLeft: "1%",
                              justifySelf: "flex-end",
                            }}
                            onChange={(e) => {
                              handleSkillChange(e, `${skill.name}`);
                            }}
                          />
                        </Container>
                      ))}
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
                      name="_action"
                      value={active === 5 ? "submit" : `step${active + 1}`}
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
                  {/* TODO: This condition should be === only like this for testing purposes */}
                  {active < 5 && (
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
  );
};

export default Creation;
