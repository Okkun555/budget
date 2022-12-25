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
import { totalEntry } from "./utils/calculator";
import { createStore } from "redux";

const App = () => {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    const incomes = entries.filter((entry) => !entry.isExpense);
    const expenses = entries.filter((entry) => entry.isExpense);

    const totalIncomes = totalEntry(incomes);
    const totalExpenses = totalEntry(expenses);

    setIncomeTotal(totalIncomes);
    setExpenseTotal(totalExpenses);
    setTotal(totalIncomes - totalExpenses);
  }, [entries]);

  const store = createStore((state = initialEntries, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_ENTRY":
        return state.concat({ ...action.payload });
      case "REMOVE_ENTRY":
        return state.filter((entry) => entry.id !== action.payload.id);
      default:
        return state;
    }
  });
  store.subscribe(() => {
    console.log("store: ", store.getState());
  });

  const payload_add = {
    id: 5,
    description: "Hello from Redux",
    value: 100,
    isExpense: false,
  };

  const addEntryRedux = (payload) => {
    return { type: "ADD_ENTRY", payload };
  };

  const removeEntryRedux = (id) => {
    return { type: "REMOVE_ENTRY", payload: { id } };
  };

  store.dispatch(addEntryRedux(payload_add));
  store.dispatch(removeEntryRedux(1));

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

  const addEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
    resetEntry();
  };

  const resetEntry = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value={total} size="small" />

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

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
