import type { FC } from "react";
import { useState } from "react";
import { Button, Title } from "@mantine/core";
import Modal from "~/components/Modal";
import { FormField } from "~/components/form-field";

interface AddButtonProps {
  type: string;
}

const AddButton: FC<AddButtonProps> = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} type={type}>
          {type === "feat" ? (
            <>
              <Title>Add Feat</Title>
              <FormField
                htmlFor="featName"
                type="text"
                label="Feat Name"
                value={"feat"}
                style={{ width: "100%", margin: "2% 0 2% 0" }}
              />
              <FormField
                htmlFor="featDescription"
                type="text"
                label="Feat Description"
                value={"featD"}
                style={{ height: "15em", width: "100%" }}
              />
            </>
          ) : type === "trait" ? (
            <>
              <Title>Add Trait</Title>
              <FormField
                htmlFor="traitName"
                type="text"
                label="Trait Name"
                value={"trait"}
                style={{ width: "100%", margin: "2% 0 2% 0" }}
              />
              <FormField
                htmlFor="traitDescription"
                type="text"
                label="Trait Description"
                value={"traitD"}
                style={{ height: "15em", width: "100%" }}
              />
            </>
          ) : null}
        </Modal>
      )}
      <Button
        color="gray"
        variant="outline"
        style={{ margin: "1%" }}
        onClick={() => handleClick()}
      >
        Add {type}
      </Button>
    </>
  );
};
export default AddButton;
