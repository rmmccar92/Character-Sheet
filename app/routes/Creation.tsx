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
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import styles from "../styles/creation.css";

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
    feats: actionData?.fields?.feats || {},
    traits: actionData?.fields?.traits || {},
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
    formData.feats = JSON.stringify(formData.feats);
    formData.traits = JSON.stringify(formData.traits);
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
  const handleFeatsAndTraitsChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "feats" | "traits",
    field: string
  ) => {
    setFormData((form) => ({
      ...form,
      [type]: {
        ...form[type],
        [field]: e.target.value,
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background:
          "radial-gradient(rgba(95, 0, 115, 0.15)30%, rgba(0, 0, 0, 0.65)68%), url(/images/book.png)",
        maskImage: 'url("/images/book.png")',
        maskMode: "alpha",
        // backgroundBlendMode: "multiply",
        // mixBlendMode: "saturation",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "2%",
        border: "1px solid white",
      }}
    >
      <Outlet />

      <Title style={{ color: "black" }}>Character Creation</Title>

      <Container
        style={{
          padding: "2%",
          border: "1px solid green",
        }}
      >
        <MyStepper active={active} setActive={setActive} />
      </Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: 0,
          margin: "2% 0 2% 0",
          width: "82%",
          maxHeight: "80vh",
          border: "1px solid orange",
        }}
      >
        <Container
          style={{
            margin: "1%",
            width: "50%",
            color: "black",
            border: "1px solid blue",
            display: "flex",
            // flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
          }}
        >
          {active > 0 && (
            <BiLeftArrow
              style={{ cursor: "pointer", height: "4em", width: "4em" }}
              onClick={() => prevStep()}
            />
          )}
          <Form onSubmit={handleSubmit}>
            <Container
              style={{
                border: "1px solid red",
                padding: "0",
                width: "80%",
              }}
            >
              {active === 0 ? (
                <GeneralInfo formData={formData} handleChange={handleChange} />
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
                  <Title color="black" align="center">
                    Defensive Stats
                    <Defense formData={formData} handleChange={handleChange} />
                  </Title>
                </>
              ) : active === 4 ? (
                <>
                  <Title color="black" align="center">
                    Offensive Stats
                    <Offense formData={formData} handleChange={handleChange} />
                  </Title>
                </>
              ) : active === 5 ? (
                <>
                  <Title color="black" align="center">
                    Feats and Traits
                  </Title>
                  <FeatsAndTraits
                    formData={formData}
                    handleChange={handleFeatsAndTraitsChange}
                    handleSubmit={handleSubmit}
                  />
                </>
              ) : active === 6 ? (
                <>
                  <Title color="black" align="center">
                    Backstory
                  </Title>
                </>
              ) : active === 7 ? (
                <>
                  <Title color="black" align="center">
                    Review
                  </Title>
                </>
              ) : null}
            </Container>

            {active === 8 && (
              <Button type="submit" style={{ marginTop: "40%" }}>
                Submit
              </Button>
            )}
          </Form>
          {active < 8 && (
            <BiRightArrow
              style={{ cursor: "pointer", height: "4em", width: "4em" }}
              onClick={() => nextStep()}
            />
          )}
        </Container>

        <Preview />
      </div>
    </div>
  );
};

export default Creation;
