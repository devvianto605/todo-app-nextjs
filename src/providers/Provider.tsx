"use client";

import React from "react";
import { FilterDropdownProvider } from "~/contexts/filterDropdownContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FilterDropdownProvider>{children}</FilterDropdownProvider>
  );
}
