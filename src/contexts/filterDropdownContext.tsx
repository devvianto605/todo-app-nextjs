"use client";

import React, {
  createContext,
  useState,
  useContext,
  type ReactNode,
} from "react";

export type FilterDropdownType = "all" | "done" | "undone";

type FilterDropdownContextType = {
  filter: FilterDropdownType;
  setFilter: (filter: FilterDropdownType) => void;
};

const FilterDropdownContext = createContext<
  FilterDropdownContextType | undefined
>(undefined);

export const useFilterDropdownContext = (): FilterDropdownContextType => {
  const context = useContext(FilterDropdownContext);

  if (!context) {
    throw new Error(
      "useFilterDropdownContext must be used within a FilterDropdownProvider",
    );
  }

  return context;
};

type FilterProviderProps = {
  children: ReactNode;
};
export const FilterDropdownProvider: React.FC<FilterProviderProps> = ({
  children,
}) => {
  const [filter, setFilter] = useState<FilterDropdownType>("all");

  const value = {
    filter,
    setFilter,
  };

  return (
    <FilterDropdownContext.Provider value={value}>
      {children}
    </FilterDropdownContext.Provider>
  );
};
