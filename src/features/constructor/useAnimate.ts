import {create} from "zustand";
import {AnimateStore} from "./types.ts";

const useAnimate = create<AnimateStore>((set) => ({
    blockIsOnTheTrash: null,
    setBlockOnTheTrash: (block) => set({blockIsOnTheTrash: block}),
}));

export default useAnimate;
