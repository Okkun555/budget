const reducer = (state = { isOpen: false }, action) => {
  console.log(action);
  switch (action.type) {
    case "OPEN_EDIT_MODAL":
      return { ...state, isOpen: true, id: action.payload.id };
    case "CLOSE_EDIT_MODAL":
      return;
    default:
      return state;
  }
};

export default reducer;
