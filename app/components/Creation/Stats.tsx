import type { FC } from "react";
import { Title, Container } from "@mantine/core";
import { FormField } from "~/components/form-field";
import type { ChangeEvent } from "react";

interface StatsProps {
  formData: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>, field: string) => any;
}

const Stats: FC<StatsProps> = ({ formData, handleChange }) => {
  return (
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
  );
};
export default Stats;
