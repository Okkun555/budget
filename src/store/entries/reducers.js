import entriesTypes from "./actions";

const reducer = (state = initialEntries, action) => {
  switch (action.type) {
    case entriesTypes.ADD_ENTRY:
      return state.concat({ ...action.payload });
    case entriesTypes.UPDATE_ENTRY: {
      return state.map((entry) => {
        if (entry.id === action.payload.id) {
          return { ...action.payload.entry };
        }
        return entry;
      });
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
