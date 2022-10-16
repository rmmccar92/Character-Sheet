import type { FC, ChangeEvent } from "react";
import { useState } from "react";
import { Button, Title } from "@mantine/core";
import Modal from "~/components/Modal";
import { FormField } from "~/components/form-field";

interface AddButtonProps {
  type: "feats" | "traits";
  formData: any;
  handleChange: (
    e: ChangeEvent<HTMLInputElement>,
    type: "feats" | "traits",
    field: string
  ) => any;
}

const AddButton: FC<AddButtonProps> = ({ type, handleChange, formData }) => {
  const [isOpen, setIsOpen] = useState(false);
  // TODO: setup tracking for multiple feats/traits
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen && (
        <Modal
          ariaLabel={`${type}-modal`}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          type={type}
        >
          <Title>{`Add ${type}`}</Title>
          {/* {type === "feat" ? ( */}
          <>
            <FormField
              htmlFor="name"
              type="text"
              label={`${
                type.charAt(0).toUpperCase() + type.substring(1).slice(0, -1)
              } Name`}
              value={formData[type].name}
              style={{ width: "100%", margin: "2% 0 2% 0" }}
              onChange={(e) => handleChange(e, `${type}`, "name")}
              className="add-input"
            />
            <FormField
              htmlFor="description"
              type="textarea"
              label={`${
                type.charAt(0).toUpperCase() + type.substring(1).slice(0, -1)
              } Description`}
              value={formData[type].description}
              style={{ height: "15em", width: "100%" }}
              onChange={(e) => handleChange(e, `${type}`, "description")}
              className="add-textarea"
            />
            <Button type="submit" style={{ marginTop: "40%" }}>
              Submit
            </Button>
          </>
          {/* ) : type === "trait" ? (
            <>
              <FormField
                htmlFor="name"
                type="text"
                label="Trait Name"
                value={formData.traits.name}
                style={{ width: "100%", margin: "2% 0 2% 0" }}
                onChange={(e) => handleChange(e, "traits", "name")}
                className="add-input"
              />
              <FormField
                htmlFor="description"
                type="textarea"
                label="Trait Description"
                value={formData.traits.description}
                style={{ height: "15em", width: "100%" }}
                onChange={(e) => handleChange(e, "traits", "description")}
                className="add-textarea"
              />
              <Button type="submit" style={{ marginTop: "40%" }}>
                Submit
              </Button>
            </>
          ) : null} */}
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
