import {create} from "zustand";
import {ConstructorSettingsStore} from "./types.ts";

const useConstructorSettings = create<ConstructorSettingsStore>((set) => ({
    flyMode: false,
    setFlyMode: (value: boolean) => set({flyMode: value}),
    toggleFlyMode: () => set((state) => ({flyMode: !state.flyMode})),

    workzonePadding: 30,
    setWorkzonePadding: (value: number) => set({workzonePadding: value > 50 ? 50 : value < 0 ? 0 : value}),
}));

export default useConstructorSettings;
