"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterDropdownProvider } from "~/contexts/filterDropdownContext";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <FilterDropdownProvider>{children}</FilterDropdownProvider>
    </QueryClientProvider>
  );
}
