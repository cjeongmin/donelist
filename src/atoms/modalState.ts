import { atom, DefaultValue, selector } from "recoil";

export interface ModalStateInterface {
  activated: boolean;
  content: string;
}

export const modalState = atom<ModalStateInterface>({
  key: "modalState",
  default: {
    activated: false,
    content: "",
  },
});

export const activatedSelector = selector({
  key: "activatedSelector",
  get: ({ get }) => {
    return get(modalState).activated;
  },
  set: ({ set }, newValue) => {
    set(modalState, (prev) => {
      if (newValue instanceof DefaultValue) return newValue;
      return { ...prev, activated: newValue };
    });
  },
});

export const contentSelector = selector({
  key: "contentSelector",
  get: ({ get }) => {
    return get(modalState).content;
  },
  set: ({ set }, newValue) => {
    set(modalState, (prev) => {
      if (newValue instanceof DefaultValue) return newValue;
      return { ...prev, content: newValue };
    });
  },
});
