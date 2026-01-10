import { create } from "zustand";
interface ICharacterStore {
  position: {
    x: number;
    y: number;
    z: number;
  };
  setPosition: (position: { x: number; y: number; z: number }) => void;
}

export const createCharacter = create<ICharacterStore>((set) => ({
  position: {
    x: 0,
    y: 0,
    z: 0,
  },
  setPosition: (position: { x: number; y: number; z: number }) =>
    set({ position }),
}));
