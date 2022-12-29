export const addEntryRedux = (payload) => {
  return { type: "ADD_ENTRY", payload };
};

export const updateEntryRedux = (id, entry) => {
  return { type: "UPDATE_ENTRY", payload: { id, entry } };
};

export const removeEntryRedux = (id) => {
  return { type: "REMOVE_ENTRY", payload: { id } };
};
