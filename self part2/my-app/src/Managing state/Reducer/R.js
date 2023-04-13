export const r = (list, action) => {
    switch (action.type) {
      case "add":
        return [...list, { id: action.id, text: action.text }];
      case "edit":
        return list.map((z) => {
          if (z.id === action.id) {
            return { ...z, text: action.text };
          } else {
            return z;
          }
        });
      case "delete":
        return list.filter((p) => p.id !== action.id);
      default:
        return list;
    }
  };