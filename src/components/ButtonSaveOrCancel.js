import React from "react";
import { Button } from "semantic-ui-react";

const ButtonSaveOrCancel = ({ addEntry, description, value }) => (
  <Button.Group style={{ marginTop: "20px" }}>
    <Button>Cancel</Button>
    <Button.Or />
    <Button onClick={() => addEntry(description, value)} primary>
      OK
    </Button>
  </Button.Group>
);

export default ButtonSaveOrCancel;
