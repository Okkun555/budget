import entriesTypes from "./actions";

const reducer = (state = initialEntries, action) => {
  switch (action.type) {
    case entriesTypes.ADD_ENTRY:
      return state.concat({ ...action.payload });
    case entriesTypes.GET_ENTRY_DETAILS_SUCCESS:
    case entriesTypes.UPDATE_ENTRY: {
      const newEntries = [...state];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = { ...newEntries[index], ...action.payload.entry };
      return newEntries;
    }
    case entriesTypes.REMOVE_ENTRY:
      return state.filter((entry) => entry.id !== action.payload.id);
    case entriesTypes.GET_ENTRIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

const initialEntries = [];
