import React from "react";
import { Button, Modal } from "semantic-ui-react";
import NewEntryForm from "./NewEntryForm";

const ModalEdit = ({ isOpen, setIsOpen }) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header>編集</Modal.Header>
      <Modal.Content>
        <NewEntryForm />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>閉じる</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
