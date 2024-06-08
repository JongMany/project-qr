import { categoryOptions } from "@/entity/Item";
import { StateCreator, create } from "zustand";
import { PersistOptions, persist } from "zustand/middleware";

const defaultCategory = categoryOptions;
type State = {
  category: { value: string; id: string }[];
};
type Action = {
  addCategory: (category: { value: string }) => void;
  deleteCategory: (category: { value: string; id: string }) => void;
  resetCategory: () => void;
};
// export const useCategoryStore = create<Action & State>((set) => ({
//   category: defaultCategory,
//   // setCategory: (category: { value: string }) => set({ category }),
//   addCategory: (category: { value: string }) =>
//     set((state) => ({
//       category: [
//         ...state.category,
//         { ...category, id: `custom-${category.value}` },
//       ],
//     })),

//   deleteCategory: (category: { value: string; id: string }) =>
//     set((state: { category: typeof categoryOptions }) => ({
//       category: state.category.filter((c) => c.id !== category.id),
//     })),
//   resetCategory: () => set({ category: defaultCategory }),
// }));

export const useCategoryStore = create<State & Action>(
  (
    persist as (
      config: StateCreator<State & Action>,
      options: PersistOptions<State & Action>
    ) => StateCreator<State & Action>
  )(
    (set, get) => ({
      category: defaultCategory,
      // setCategory: (category: { value: string }) => set({ category }),
      addCategory: (category: { value: string }) =>
        set((state) => ({
          category: [
            ...state.category,
            { ...category, id: `custom-${category.value}` },
          ],
        })),

      deleteCategory: (category: { value: string; id: string }) =>
        set((state: { category: typeof categoryOptions }) => ({
          category: state.category.filter((c) => c.id !== category.id),
        })),
      resetCategory: () => set({ category: defaultCategory }),
    }),
    {
      name: "category-storage", // name of the item in the storage (must be unique)
    }
  )
);
