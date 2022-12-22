import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

const EntryLines = ({ entries }) => (
  <Container>
    {entries.map((entry, index) => (
      <EntryLine key={entry.id} entry={entry} />
    ))}
  </Container>
);

export default EntryLines;
