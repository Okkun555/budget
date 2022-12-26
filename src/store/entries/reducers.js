const reducer = (state = initialEntries, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      return state.concat({ ...action.payload });
    case "REMOVE_ENTRY":
      return state.filter((entry) => entry.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;

const initialEntries = [
  { id: 1, description: "Work income", value: 1000, isExpense: false },
  { id: 2, description: "Water bill", value: 20, isExpense: true },
  { id: 3, description: "Rent", value: 300, isExpense: true },
];
