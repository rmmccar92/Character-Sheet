import type { FC } from "react";
import { Stepper } from "@mantine/core";

interface MyStepperProps {
  active: number;
  setActive: (step: number) => void;
}

const MyStepper: FC<MyStepperProps> = ({ active, setActive }) => {
  return (
    <Stepper size="xs" active={active} onStepClick={setActive} color="teal">
      <Stepper.Step label="Step 1" />
      <Stepper.Step label="Step 2" />
      <Stepper.Step label="Step 3" />
      <Stepper.Step label="Step 4" />
      <Stepper.Step label="Step 5" />
      <Stepper.Step label="Step 6" />
      <Stepper.Step label="Step 7" />
      <Stepper.Step label="Step 8" />
      <Stepper.Step label="Step 9" />
    </Stepper>
  );
};
export default MyStepper;
