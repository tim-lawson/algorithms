import React from "react";
import { Booleans, useBoolean, useBooleans } from "@/hooks/use-booleans";

export interface PageContext {
  groups: Booleans;
  learned: Booleans;
  open: Booleans;
}

const PageContext = React.createContext<PageContext | null>(null);

export function PageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // show/hide algorithm groups
  const groups = useBooleans("groups", true);

  // whether algorithms are learned
  const learned = useBooleans("learned", false);

  // expand/collapse algorithm cases
  const open = useBooleans("open", false);

  return (
    <PageContext.Provider value={{ groups, learned, open }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePageContext(): PageContext {
  const context = React.useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageProvider");
  }
  return context;
}

export function useGroup(id: string) {
  const { groups } = usePageContext();
  return useBoolean(id, groups);
}

export function useLearned(id: string) {
  const { learned } = usePageContext();
  return useBoolean(id, learned);
}

export function useOpen(id: string) {
  const { learned } = usePageContext();
  return useBoolean(id, learned);
}
