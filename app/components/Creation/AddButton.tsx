import type { FC, ChangeEvent } from "react";
import { useState } from "react";
import { Button, Title } from "@mantine/core";
import Modal from "~/components/Modal";
import { FormField } from "~/components/form-field";
import { Form } from "@remix-run/react";

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
          <div className="modal-inner">
            <Title className="add-title">{`Add ${type}`}</Title>
            <div className="modal-forms">
              <FormField
                htmlFor="name"
                type="text"
                label={`${
                  type.charAt(0).toUpperCase() + type.substring(1).slice(0, -1)
                } Name`}
                value={formData[type].name}
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
                onChange={(e) => handleChange(e, `${type}`, "description")}
                className="add-textarea"
              />
            </div>
            <Button onClick={(e) => handleSubmit(e, type, formData)}>
              Add
            </Button>
          </div>
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
