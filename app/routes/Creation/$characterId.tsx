import { useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  Outlet,
  Form,
  useActionData,
  useSubmit,
  useLoaderData,
} from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { updateCharacter, getCharacter } from "~/utils/character.server";
import skillsData from "~/utils/data.js";
import { Container, Title, Button } from "@mantine/core";
import GeneralInfo from "~/components/Creation/GeneralInfo";
import Stats from "~/components/Creation/Stats";
import Defense from "~/components/Creation/Defense";
import Offense from "~/components/Creation/Offense";
import Skills from "~/components/Creation/Skills";
import MyStepper from "~/components/Creation/MyStepper";
import FeatsAndTraits from "~/components/Creation/FeatsAndTraits";
import ImageUploader from "~/components/Image-Uploader";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import styles from "~/styles/creation.css";
import type { CharacterForm } from "~/utils/types.server";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const loader: LoaderFunction = async ({ params }) => {
  const character = await getCharacter(params.characterId as string);
  if (character) {
    return json({ character });
  }
  return null;
};
export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();
  // Object to be submitted to the server created from values from the form
  const values = Object.fromEntries(form);

  // TODO error handling
  return await updateCharacter(
    // TODO: Not sure why this ts error is being thrown claims that stats and skills are missing from formdata/values
    // @ts-ignore
    {
      ...values,
    },
    params.characterId as string
  );
};

const Creation = () => {
  const { character } = useLoaderData();
  const [imageUrl, setImageUrl] = useState("");
  const actionData = useActionData();
  const [feats, setFeats] = useState(character.feats || []);
  const [traits, setTraits] = useState(character.traits || []);
  const [formData, setFormData] = useState({
    characterClass: actionData?.fields?.characterClass || "",
    alignment: actionData?.fields?.alignment || "N",
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
    stats: actionData?.fields?.stats || {},
    skills: actionData?.fields?.skills || {},
    ac: actionData?.fields?.ac || "",
    touch: actionData?.fields?.touch || "",
    flatFooted: actionData?.fields?.flatFooted || "",
    hp: actionData?.fields?.hp || "",
    dr: actionData?.fields?.dr || "",
    drType: actionData?.fields?.drType || "",
    sr: actionData?.fields?.sr || "",
    srType: actionData?.fields?.srType || "",
    fortitude: actionData?.fields?.fortitude || "",
    will: actionData?.fields?.will || "",
    reflex: actionData?.fields?.reflex || "",
    resistances: actionData?.fields?.resistances || "",
    immunities: actionData?.fields?.immunities || "",
    cmd: actionData?.fields?.cmd || "",
    initiative: actionData?.fields?.initiative || "",
    bab: actionData?.fields?.bab || "",
    cmb: actionData?.fields?.cmb || "",
    baseSpeed: actionData?.fields?.baseSpeed || "",
    speedArmorPenalty: actionData?.fields?.speedArmorPenalty || "",
    flySpeed: actionData?.fields?.flyeSpeed || "",
    swimSpeed: actionData?.fields?.swimSpeed || "",
    climbSpeed: actionData?.fields?.climbSpeed || "",
    burrowSpeed: actionData?.fields?.burrowSpeed || "",
    speedMiscMod: actionData?.fields?.speedMiscMod || "",
    feats: actionData?.fields?.feats || {},
    traits: actionData?.fields?.traits || {},
    image: "",
  });
  useMemo(() => {
    skillsData.forEach((skill) => {
      setFormData((prev) => ({
        ...prev,
        skills: {
          ...(prev.skills as any),
          [skill.name]: actionData?.fields?.skills[skill.name] || {
            // ...prev.skills[skill.name as any],
            ranks: actionData?.fields?.ranks || "0",
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
    formData.feats = JSON.stringify(feats);
    formData.traits = JSON.stringify(traits);
    formData.stats = JSON.stringify(formData.stats);
    console.log("formData", formData);
    submit(formData, { method: "post" });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setFormData((form) => ({
      ...form,
      [field]: e.target.value,
    }));
  };

  const handleStatChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    console.log("FORM", e.target.value, field);
    setFormData((form) => ({
      ...form,
      stats: {
        ...(form.stats as any),
        [field]: {
          // ...form.stats[field],
          value: e.target.value,
        },
      },
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
          ...form.skills[skill as keyof CharacterForm["skills"]],
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
          ...form.skills[skill as keyof CharacterForm["skills"]],
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

  // Feats and traits submit
  const submitFeatsAndTraits = async (type: "feats" | "traits") => {
    console.log("FEATS", feats, "TRAITS", traits);
    if (type === "feats") {
      return setFeats((prev: any) => [...prev, formData.feats]);
    }
    if (type === "traits") {
      return setTraits((prev: any) => [...prev, formData.traits]);
    }
  };

  // Image upload handler
  const handleUpload = async (file: File) => {
    let inputFormData = new FormData();
    inputFormData.append("character-portrait", file);
    const response = await fetch("/api/upload-image", {
      method: "POST",
      body: inputFormData,
    });
    const upload = await response.json();
    setImageUrl(upload);
    setFormData({
      ...formData,
      image: upload,
    });
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
        <div className="form-container">
          {active > 0 && (
            <BiLeftArrow
              className="arrow arrow-left"
              onClick={() => prevStep()}
            />
          )}
          <Form onSubmit={handleSubmit}>
            <div className="fields-container">
              {active === 0 ? (
                <GeneralInfo formData={formData} handleChange={handleChange} />
              ) : active === 1 ? (
                <Stats formData={formData} handleChange={handleStatChange} />
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
                  // handleSubmit={handleSubmit}
                  handleAdd={submitFeatsAndTraits}
                />
              ) : active === 6 ? (
                <Title>Backstory</Title>
              ) : active === 7 ? (
                <Title>Review</Title>
              ) : null}
            </div>
            {active === 8 && (
              <Button type="submit" className="submit-button">
                Submit
              </Button>
            )}
          </Form>
          {active < 8 && (
            <BiRightArrow
              className="arrow arrow-right"
              onClick={() => nextStep()}
            />
          )}
        </div>
        <ImageUploader onChange={handleUpload} imageUrl={imageUrl} />
      </div>
    </div>
  );
};

export default Creation;
