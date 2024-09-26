"use client";

import { createModalsStore, type ModalsStore } from "@/stores/modalsStore";
import { useStore } from "zustand";

import { createContext, useContext, useRef, type ReactNode } from "react";

export type ModalsStoreApi = ReturnType<typeof createModalsStore>;
export const ModalsStoreContext = createContext<ModalsStoreApi | undefined>(undefined);

export const ModalsStoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<ModalsStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createModalsStore();
  }

  return (
    <ModalsStoreContext.Provider value={storeRef.current}>{children}</ModalsStoreContext.Provider>
  );
};

export const useModalsStore = <T,>(selector: (store: ModalsStore) => T): T => {
  const modalsStoreContext = useContext(ModalsStoreContext);

  if (!modalsStoreContext) {
    throw new Error(`useModalsStore must be used within ModalsStoreProvider`);
  }

  return useStore(modalsStoreContext, selector);
};
