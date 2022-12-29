import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux } from "../store/entries/actions";
import { v4 as uuidv4 } from "uuid";

const useEntryDetails = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const addEntry = () => {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
    setDescription("");
    setValue("");
    setIsExpense(false);
  };

  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
  };
};

export default useEntryDetails;
