import React from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { closeEditModal } from "../store/modals/actions";
import NewEntryForm from "./NewEntryForm";

const ModalEdit = ({
  isOpen,
  setIsOpen,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) => {
  const dispatch = useDispatch();

  return (
    <Modal open={isOpen}>
      <Modal.Header>編集</Modal.Header>
      <Modal.Content>
        <NewEntryForm
          description={description}
          setDescription={setDescription}
          value={value}
          setValue={setValue}
          isExpense={isExpense}
          setIsExpense={setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>閉じる</Button>
        <Button onClick={() => setIsOpen(false)} primary>
          編集
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
