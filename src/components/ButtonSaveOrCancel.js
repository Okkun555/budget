import React from "react";
import { Button } from "semantic-ui-react";

const ButtonSaveOrCancel = ({ addEntry }) => (
  <Button.Group style={{ marginTop: "20px" }}>
    <Button>Cancel</Button>
    <Button.Or />
    <Button onClick={() => addEntry()} primary>
      OK
    </Button>
  </Button.Group>
);

export default ButtonSaveOrCancel;
