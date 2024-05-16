"use client";
import FilterOption from "@/app/(application)/main/_components/FilterOption";
import ItemContainer from "@/app/(application)/main/_components/ItemContainer";
import SearchBox from "@/app/(application)/main/_components/SearchBox";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type SearchState = {
  query: string;
};
type SearchDispatch = {
  changeQuery: (query: string) => () => void;
};

const SearchContext = createContext<SearchState & SearchDispatch>({
  query: "",
  changeQuery: (query: string) => () => {},
});

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
export default function ItemList({ children }: PropsWithChildren) {
  const [query, setQuery] = useState("");
  const changeQuery = (query: string) => () => setQuery(query);
  return (
    <SearchContext.Provider value={{ query, changeQuery }}>
      <SearchBox />
      <FilterOption />
      <ItemContainer />
    </SearchContext.Provider>
  );
}
