import { Container } from "semantic-ui-react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import { useState } from "react";

const App = () => {
  const [entries, setEntries] = useState(initialEntries);

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value="2,550.53" size="small" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      {entries.map((entry, index) => (
        <EntryLine
          description={entry.description}
          value={entry.value}
          isExpense={entry.isExpense}
          key={index}
        />
      ))}

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
};

export default App;

const initialEntries = [
  { description: "Work income", value: 1000, isExpense: false },
  { description: "Water bill", value: 20, isExpense: true },
  { description: "Rent", value: 300, isExpense: true },
];
