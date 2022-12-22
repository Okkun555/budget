import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

const EntryLines = ({ entries }) => (
  <Container>
    {entries.map((entry, index) => (
      <EntryLine
        description={entry.description}
        value={entry.value}
        isExpense={entry.isExpense}
        key={index}
      />
    ))}
  </Container>
);

export default EntryLines;
