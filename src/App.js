import { Container } from "semantic-ui-react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value="2,550.53" size="small" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLine description="income" value="10.00" />
      <EntryLine description="expense" value="100.00" isExpense />
      <EntryLine description="income" value="20.00" />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
