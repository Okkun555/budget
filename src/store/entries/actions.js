const types = {
  ADD_ENTRY: "ADD_ENTRY",
  UPDATE_ENTRY: "UPDATE_ENTRY",
  REMOVE_ENTRY: "REMOVE_ENTRY",
  GET_ENTRIES: "GET_ENTRIES",
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
