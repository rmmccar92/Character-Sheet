import type { FC } from "react";
import { FormField } from "~/components/form-field";
import type { ChangeEvent } from "react";
import { Container, Title, Text, Divider } from "@mantine/core";

interface OffenseProps {
  formData: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>, field: string) => any;
}

const Offense: FC<OffenseProps> = ({ formData, handleChange }) => {
  return (
    <>
      <Title>Offensive Stats</Title>
      <FormField
        htmlFor="initiative"
        label="Initiative"
        value={formData.initiative}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "initiative")}
      />
      <FormField
        htmlFor="bab"
        label="Base Attack Bonus"
        value={formData.bab}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "bab")}
      />
      <Container>
        <Text>
          <strong> Speed </strong>
        </Text>
        {/* <Divider size="md" color="purple" m="sm" /> */}
        <FormField
          htmlFor="speed"
          label="Base Speed"
          value={formData.speed}
          type="text"
          style={{ width: "100%" }}
          onChange={(e) => handleChange(e, "baseSpeed")}
        />
        <FormField
          htmlFor="speedArmorPenalty"
          label="Armor Penalty"
          value={formData.speedArmorPenalty}
          type="text"
          style={{ width: "100%" }}
          onChange={(e) => handleChange(e, "speedArmorPenalty")}
        />
        <FormField
          htmlFor="flySpeed"
          label="Fly Speed"
          value={formData.flySpeed}
          type="text"
          style={{ width: "100%" }}
          onChange={(e) => handleChange(e, "flySpeed")}
        />
        <FormField
          htmlFor="swimSpeed"
          label="Swim Speed"
          value={formData.swimSpeed}
          type="text"
          style={{ width: "100%" }}
          onChange={(e) => handleChange(e, "swimSpeed")}
        />
        <FormField
          htmlFor="climbSpeed"
          label="Climb Speed"
          value={formData.climbSpeed}
          type="text"
          style={{ width: "100%" }}
          onChange={(e) => handleChange(e, "climbSpeed")}
        />
        <FormField
          htmlFor="burrowSpeed"
          label="Burrow Speed"
          value={formData.burrowSpeed}
          type="text"
          style={{ width: "100%" }}
          onChange={(e) => handleChange(e, "burrowSpeed")}
        />
        <FormField
          htmlFor="speedMiscMod"
          label="Misc Mod"
          value={formData.speedMiscMod}
          type="text"
          style={{ width: "100%" }}
          onChange={(e) => handleChange(e, "speedMiscMod")}
        />
        {/* <Divider size="md" color="purple" m="sm" /> */}
      </Container>
      <FormField
        htmlFor="cmb"
        label="Combat Maneuver Bonus"
        value={formData.cmb}
        type="text"
        style={{ width: "100%" }}
        onChange={(e) => handleChange(e, "cmb")}
      />
    </>
  );
};
export default Offense;
