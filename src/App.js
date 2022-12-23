import { Container } from "semantic-ui-react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useState } from "react";
import EntryLines from "./components/EntryLines";

const App = () => {
  const [entries, setEntries] = useState(initialEntries);

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };

  const addEntry = (description, value) => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
    });
    setEntries(result);
  };

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value="2,550.53" size="small" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} deleteEntry={deleteEntry} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
};

export default App;

const initialEntries = [
  { id: 1, description: "Work income", value: 1000, isExpense: false },
  { id: 2, description: "Water bill", value: 20, isExpense: true },
  { id: 3, description: "Rent", value: 300, isExpense: true },
];
