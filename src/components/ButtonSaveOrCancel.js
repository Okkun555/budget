import React from "react";
import { Button } from "semantic-ui-react";

const ButtonSaveOrCancel = ({ addEntry, description, value, isExpense }) => (
  <Button.Group style={{ marginTop: "20px" }}>
    <Button>Cancel</Button>
    <Button.Or />
    <Button onClick={() => addEntry(description, value, isExpense)} primary>
      OK
    </Button>
  </Button.Group>
);

export default ButtonSaveOrCancel;
