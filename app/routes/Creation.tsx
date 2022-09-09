import { useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Container, Title, Button } from "@mantine/core";
import { Outlet, Form, useActionData, useSubmit } from "@remix-run/react";
import GeneralInfo from "~/components/Creation/GeneralInfo";
import type { ActionFunction } from "@remix-run/node";
import { createCharacter } from "~/utils/character.server";
import Stats from "~/components/Creation/Stats";
import skillsData from "~/utils/data.js";
import Defense from "~/components/Creation/Defense";
import Offense from "~/components/Creation/Offense";
import Skills from "~/components/Creation/Skills";
import MyStepper from "~/components/Creation/MyStepper";
import Preview from "~/components/Creation/Preview";
import FeatsAndTraits from "~/components/Creation/FeatsAndTraits";
import Layout from "~/components/Layout";

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
    ac: actionData?.fields?.ac || "",
    touch: actionData?.fields?.touch || "",
    flatFooted: actionData?.fields?.flatFooted || "",
    hp: actionData?.fields?.hp || "",
    dr: actionData?.fields?.dr || "",
    sr: actionData?.fields?.sr || "",
    fortitude: actionData?.fields?.fortitude || "",
    will: actionData?.fields?.will || "",
    reflex: actionData?.fields?.reflex || "",
    resistances: actionData?.fields?.resistances || "",
    immunities: actionData?.fields?.immunities || "",
    cmd: actionData?.fields?.cmd || "",
    initiative: actionData?.fields?.initiative || "",
    bab: actionData?.fields?.bab || "",
    cmb: actionData?.fields?.cmb || "",
    speed: actionData?.fields?.speed || "",
  });
  useMemo(() => {
    skillsData.forEach((skill) => {
      setFormData((prev) => ({
        ...prev,
        skills: {
          ...prev.skills,
          [skill.name]: actionData?.fields?.skills[skill.name] || {
            ...prev.skills[skill.name],
            ranks: actionData?.fields?.ranks || "",
            trained: actionData?.fields?.trained || false,
          },
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
        [skill]: {
          ...form.skills[skill],
          ranks: e.target.value,
        },
      },
    }));
  };

  const handleRadioSkillChange = (
    e: ChangeEvent<HTMLInputElement>,
    skill: string
  ) => {
    setFormData((form) => ({
      ...form,
      skills: {
        ...form.skills,
        [skill]: {
          ...form.skills[skill],
          trained: e.target.checked,
        },
      },
    }));
  };

  //   Stepper Functions
  const [active, setActive] = useState(0);
  const nextStep = () => {
    setActive((current) => (current < 8 ? current + 1 : current));
  };
  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };
  return (
    // TODO: Equipment Step
    // TODO: Form needs to track RadioButton change
    <Layout>
      <Outlet />
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
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
          <Title style={{ color: "white" }}>Character Creation</Title>

          <Container
            style={{
              marginTop: "2%",
            }}
          >
            <MyStepper active={active} setActive={setActive} />
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
                    <GeneralInfo
                      formData={formData}
                      handleChange={handleChange}
                    />
                  ) : active === 1 ? (
                    <Stats formData={formData} handleChange={handleChange} />
                  ) : active === 2 ? (
                    <Skills
                      formData={formData}
                      // setTrained={setTrained}
                      handleSkillChange={handleSkillChange}
                      handleRadioSkillChange={handleRadioSkillChange}
                    />
                  ) : active === 3 ? (
                    <>
                      <Title color="white" align="center">
                        Defensive Stats
                        <Defense
                          formData={formData}
                          handleChange={handleChange}
                        />
                      </Title>
                    </>
                  ) : active === 4 ? (
                    <>
                      <Title color="white" align="center">
                        Offensive Stats
                        <Offense
                          formData={formData}
                          handleChange={handleChange}
                        />
                      </Title>
                    </>
                  ) : active === 5 ? (
                    <>
                      <Title color="white" align="center">
                        Feats and Traits
                      </Title>
                      <FeatsAndTraits />
                    </>
                  ) : active === 6 ? (
                    <>
                      <Title color="white" align="center">
                        Backstory
                      </Title>
                    </>
                  ) : active === 7 ? (
                    <>
                      <Title color="white" align="center">
                        Review
                      </Title>
                    </>
                  ) : null}
                  {active < 8 && (
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
                  {active < 8 && (
                    <Button type="submit" style={{ marginTop: "40%" }}>
                      Submit
                    </Button>
                  )}
                </Form>
              </Container>
            </Container>

            <Preview />
          </Container>
        </Container>
      </Container>
    </Layout>
  );
};

export default Creation;
