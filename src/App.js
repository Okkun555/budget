import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

const App = () => {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
    }
  }, [isOpen]);

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };

  const editEntry = (id) => {
    if (!id) return;
    const index = entries.findIndex((entry) => entry.id === id);
    const targetEntry = entries[index];

    setEntryId(id);
    setDescription(targetEntry.description);
    setValue(targetEntry.value);
    setIsExpense(targetEntry.isExpense);
    setIsOpen(true);
  };

  const addEntry = (description, value, isExpense) => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
  };

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value="2,550.53" size="small" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />

      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
};

export default App;

const initialEntries = [
  { id: 1, description: "Work income", value: 1000, isExpense: false },
  { id: 2, description: "Water bill", value: 20, isExpense: true },
  { id: 3, description: "Rent", value: 300, isExpense: true },
];
