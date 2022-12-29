import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

const EntryLines = ({ entries, deleteEntry, editEntry }) => (
  <Container>
    {entries.map((entry) => (
      <EntryLine key={entry.id} {...entry} editEntry={editEntry} />
    ))}
  </Container>
);

export default EntryLines;
