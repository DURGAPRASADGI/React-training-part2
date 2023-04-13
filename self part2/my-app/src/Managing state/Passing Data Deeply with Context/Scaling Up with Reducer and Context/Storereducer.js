export const intial = [];
export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { id: action.id, text: action.text }];
    case "delete":
      return state.filter((j) => j.id !== action.id);
    case "edit":
      return state.map((k) => {
        if (k.id === action.id) {
          return { ...k, text: action.text };
        } else {
          return k;
        }
      });
    default:
      return state;
  }
};
