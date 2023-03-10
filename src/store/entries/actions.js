const types = {
  ADD_ENTRY: "ADD_ENTRY",
  UPDATE_ENTRY: "UPDATE_ENTRY",
  REMOVE_ENTRY: "REMOVE_ENTRY",
  GET_ENTRIES: "GET_ENTRIES",
  GET_ENTRIES_SUCCESS: "GET_ENTRIES_SUCCESS",
  GET_ENTRY_DETAILS_SUCCESS: "GET_ENTRY_DETAILS_SUCCESS",
};

export default types;

export const addEntryRedux = (payload) => {
  return { type: types.ADD_ENTRY, payload };
};

export const updateEntryRedux = (id, entry) => {
  return { type: types.UPDATE_ENTRY, payload: { id, entry } };
};

export const removeEntryRedux = (id) => {
  return { type: types.REMOVE_ENTRY, payload: { id } };
};

export const getAllEntries = () => {
  return { type: types.GET_ENTRIES };
};

export const getAllEntriesSuccess = (entries) => {
  return { type: types.GET_ENTRIES_SUCCESS, payload: entries };
};

export const getEntryDetailsSuccess = (id, entry) => {
  return { type: types.GET_ENTRY_DETAILS_SUCCESS, payload: { id, entry } };
};
