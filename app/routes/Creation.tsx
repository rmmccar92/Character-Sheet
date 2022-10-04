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

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

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
    <div className="creation-container">
      <Outlet />
      <Title>Character Creation</Title>
      <Container className="stepper-container">
        <MyStepper active={active} setActive={setActive} />
      </Container>
      <div className="content-container">
        <Container className="form-container">
          {active > 0 && (
            <BiLeftArrow className="arrow" onClick={() => prevStep()} />
          )}
          <Form onSubmit={handleSubmit}>
            <Container className="fields-container">
              {active === 0 ? (
                <GeneralInfo formData={formData} handleChange={handleChange} />
              ) : active === 1 ? (
                <Stats formData={formData} handleChange={handleChange} />
              ) : active === 2 ? (
                <Skills
                  formData={formData}
                  handleSkillChange={handleSkillChange}
                  handleRadioSkillChange={handleRadioSkillChange}
                />
              ) : active === 3 ? (
                <Defense formData={formData} handleChange={handleChange} />
              ) : active === 4 ? (
                <Offense formData={formData} handleChange={handleChange} />
              ) : active === 5 ? (
                <FeatsAndTraits
                  formData={formData}
                  handleChange={handleFeatsAndTraitsChange}
                  handleSubmit={handleSubmit}
                />
              ) : active === 6 ? (
                <Title>Backstory</Title>
              ) : active === 7 ? (
                <Title>Review</Title>
              ) : null}
            </Container>
            {active === 8 && (
              <Button type="submit" className="submit-button">
                Submit
              </Button>
            )}
          </Form>
          {active < 8 && (
            <BiRightArrow className="arrow" onClick={() => nextStep()} />
          )}
        </Container>
        <Preview />
      </div>
    </div>
  );
};

export default Creation;
