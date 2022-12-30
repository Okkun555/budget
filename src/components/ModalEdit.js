import React from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import useEntryDetails from "../hooks/useEntryDetails";
import { closeEditModal } from "../store/modals/actions";
import NewEntryForm from "./NewEntryForm";

const ModalEdit = ({ isOpen, description, value, isExpense, id }) => {
  const dispatch = useDispatch();
  const entryUpdate = useEntryDetails(description, value, isExpense);

  return (
    <Modal open={isOpen}>
      <Modal.Header>編集</Modal.Header>
      <Modal.Content>
        <NewEntryForm
          description={entryUpdate.description}
          setDescription={entryUpdate.setDescription}
          value={entryUpdate.value}
          setValue={entryUpdate.setValue}
          isExpense={entryUpdate.sExpense}
          setIsExpense={entryUpdate.setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
        <Button onClick={() => entryUpdate.updateEntry(id)} primary>
          OK
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
