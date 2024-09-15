"use client";

import { createCounterStore, type CounterStore } from "@/stores/counterStore";
import { useStore } from "zustand";

import { createContext, useContext, useRef, type ReactNode } from "react";

export type CounterStoreApi = ReturnType<typeof createCounterStore>;
export const CounterStoreContext = createContext<CounterStoreApi | undefined>(undefined);

export const CounterStoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<CounterStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createCounterStore();
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>{children}</CounterStoreContext.Provider>
  );
};

export const useCounterStore = <T,>(selector: (store: CounterStore) => T): T => {
  const counterStoreContext = useContext(CounterStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};
