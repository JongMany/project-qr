// https://velog.io/@hyungeol94/TypeScript%EB%A1%9C-Zustand-Reducer%EB%A5%BC-%ED%83%80%EC%9D%B4%ED%95%91%ED%95%98%EA%B3%A0-%EC%82%AC%EC%9A%A9%ED%95%B4-%EB%B3%B4%EA%B8%B0
import { Category, ItemEntity } from "@/entity/Item";
import { create } from "zustand";

const fakeItems: ItemEntity[] = [
  {
    id: "1",
    imageUrl: "https://via.placeholder.com/100",
    name: "요구르트",
    category: "식품(유제품)",
    expirationDate: "2024-5-10",
  },
  {
    id: "2",
    imageUrl: "https://via.placeholder.com/100",
    name: "라면",
    category: "식품(가공식품)",
    expirationDate: "2025-5-12",
  },
  {
    id: "3",
    imageUrl: "https://via.placeholder.com/100",
    name: "마요네즈",
    category: "식품(소스류)",
    expirationDate: "2024-12-31",
  },
  {
    id: "4",
    imageUrl: "https://via.placeholder.com/100",
    name: "마스카라",
    category: "화장품",
    expirationDate: "2026-12-31",
  },
  {
    id: "5",
    imageUrl: "https://via.placeholder.com/100",
    name: "마데카솔",
    category: "의약품",
    expirationDate: "2026-12-31",
  },
  {
    id: "6",
    imageUrl: "https://via.placeholder.com/100",
    name: "마데카솔",
    category: "의약품",
    expirationDate: "2026-12-31",
  },
];

type State = {
  items: ItemEntity[];
  expirationSortOption: "ascending" | "descending";
  categoryFilter:
    | "전체"
    | "식품(가공식품)"
    | "식품(유제품)"
    | "식품(소스류)"
    | "화장품"
    | "의약품";
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
  toggleExpirationSortOption: () => void;
  selectCategoryFilter: (category: Category | "전체") => void;
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
  items: [...fakeItems],
  expirationSortOption: "descending",
  categoryFilter: "전체",
  dispatch: (action) => set((state) => itemReducer(state, action)),
  toggleExpirationSortOption: () =>
    set((state) => ({
      expirationSortOption:
        state.expirationSortOption === "ascending" ? "descending" : "ascending",
    })),
  selectCategoryFilter: (category: Category | "전체") =>
    set({ categoryFilter: category }),
}));
