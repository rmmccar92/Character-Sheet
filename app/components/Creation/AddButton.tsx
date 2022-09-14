import type { FC, ChangeEvent } from "react";
import { useState } from "react";
import { Button, Title } from "@mantine/core";
import Modal from "~/components/Modal";
import { FormField } from "~/components/form-field";

interface AddButtonProps {
  type: string;
  formData: any;
  handleChange: (
    e: ChangeEvent<HTMLInputElement>,
    type: string,
    field: string
  ) => any;
}

const AddButton: FC<AddButtonProps> = ({ type, handleChange, formData }) => {
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
                htmlFor="name"
                type="text"
                label="Feat Name"
                value={formData.feats.name}
                style={{ width: "100%", margin: "2% 0 2% 0" }}
                onChange={(e) => handleChange(e, "feats", "name")}
              />
              <FormField
                htmlFor="description"
                type="text"
                label="Feat Description"
                value={formData.feats.description}
                style={{ height: "15em", width: "100%" }}
                onChange={(e) => handleChange(e, "feats", "description")}
              />
              <Button type="submit" style={{ marginTop: "40%" }}>
                Submit
              </Button>
            </>
          ) : type === "trait" ? (
            <>
              <Title>Add Trait</Title>
              <FormField
                htmlFor="name"
                type="text"
                label="Trait Name"
                value={formData.traits.name}
                style={{ width: "100%", margin: "2% 0 2% 0" }}
                onChange={(e) => handleChange(e, "traits", "name")}
              />
              <FormField
                htmlFor="description"
                type="text"
                label="Trait Description"
                value={formData.traits.description}
                style={{ height: "15em", width: "100%" }}
                onChange={(e) => handleChange(e, "traits", "description")}
              />
              <Button type="submit" style={{ marginTop: "40%" }}>
                Submit
              </Button>
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
