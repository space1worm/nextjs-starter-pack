import { createStore } from "zustand/vanilla";

export type ModalsState = {
  authModalOpen: boolean;
};

export type ModalsActions = {
  authModelOpenChange: (open: boolean) => void;
};

export type ModalsStore = ModalsState & ModalsActions;

export const defaultInitState: ModalsState = {
  authModalOpen: false,
};

export const createModalsStore = (initState: ModalsState = defaultInitState) => {
  return createStore<ModalsStore>()((set) => ({
    ...initState,
    authModelOpenChange: (open) => set({ authModalOpen: open }),
  }));
};
