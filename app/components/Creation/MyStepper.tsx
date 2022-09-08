import type { FC } from "react";
import { Stepper } from "@mantine/core";

interface MyStepperProps {
  active: number;
  setActive: (step: number) => void;
}

const MyStepper: FC<MyStepperProps> = ({ active, setActive }) => {
  return (
    <Stepper size="xs" active={active} onStepClick={setActive} color="teal">
      <Stepper.Step label="Step 1" style={{ color: "white" }} />
      <Stepper.Step label="Step 2" style={{ color: "white" }} />
      <Stepper.Step label="Step 3" style={{ color: "white" }} />
      <Stepper.Step label="Step 4" style={{ color: "white" }} />
      <Stepper.Step label="Step 5" style={{ color: "white" }} />
      <Stepper.Step label="Step 6" style={{ color: "white" }} />
      <Stepper.Step label="Step 7" style={{ color: "white" }} />
      <Stepper.Step label="Step 8" style={{ color: "white" }} />
      <Stepper.Step label="Step 9" style={{ color: "white" }} />
    </Stepper>
  );
};
export default MyStepper;
