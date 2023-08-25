export const initialState = {
  selectedId: 1,
  messages: {
    1: "Hello Alex",
    2: "Hello Bob",
    3: "Hello Tyler",
  },
};
export function chatReducer(state, actions) {
  switch (actions.type) {
    case "changed_selection":
      return {
        ...state,
        selectedId: actions.selectedId,
      };
    case "send_message":
      return {
        ...state,
        messages: { ...state.messages, [state.selectedId]: actions.message },
      };
    case 'change_message':
        return {
            ...state,
            messages: { ...state.messages, [state.selectedId]: actions.message },
          };
      default:
        throw Error('Unknown action: ' + actions.type)
  }
}
