import type { FC } from "react";
import { useState } from "react";
import { Button } from "@mantine/core";
import Modal from "~/components/Modal";

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
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          {" "}
          <h1>{type}</h1>{" "}
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
