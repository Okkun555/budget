import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

const EntryLines = ({ entries, deleteEntry, setIsOpen }) => (
  <Container>
    {entries.map((entry) => (
      <EntryLine
        key={entry.id}
        {...entry}
        deleteEntry={deleteEntry}
        setIsOpen={setIsOpen}
      />
    ))}
  </Container>
);

export default EntryLines;
