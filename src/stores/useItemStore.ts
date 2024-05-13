// https://velog.io/@hyungeol94/TypeScript%EB%A1%9C-Zustand-Reducer%EB%A5%BC-%ED%83%80%EC%9D%B4%ED%95%91%ED%95%98%EA%B3%A0-%EC%82%AC%EC%9A%A9%ED%95%B4-%EB%B3%B4%EA%B8%B0
import { create } from "zustand";

type State = {
  items: any[];
  // addItem: (item: any) => void;
  // removeItem: (id: number) => voidx;
};

type ActionTypes = {
  setItems: "SET_ITEMS";
  registerItem: "REGISTER_ITEM";
  removeItem: "REMOVE_ITEM";
  editItem: "EDIT_ITEM";
};

type DispatchedAction = { type: keyof ActionTypes; payload: any };

type Action = {
  dispatch: (args: DispatchedAction) => void;
};

const itemReducer = (state: State, action: DispatchedAction) => {
  switch (action.type) {
    case "registerItem":
      return { ...state, items: [...state.items, action.payload] };
    case "removeItem":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case "editItem":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case "setItems":
      return {
        ...state,
        items: [...action.payload],
      };
    default:
      return state;
  }
};

export const useItemStore = create<State & Action>((set) => ({
  items: [],
  dispatch: (action) => set((state) => itemReducer(state, action)),
}));
