import { atom, selector } from "recoil";

/**
 * DoneItem {
 *  key: 키값,
 *  date: 일을 마친 날,
 *  content: 내용
 * }
 */
export interface DoneItem {
  key: number;
  date: Date;
  content: string;
}

const doneState = atom<DoneItem[]>({
  key: "doneState",
  default: [],
});

/* 다음 추가될 항목의 키값을 반환한다. */
export const nextIdState = selector({
  key: "nextId",
  get: ({ get }) => {
    const doneList = get(doneState);
    const length = doneList.length;
    const nextId = length ? doneList[length - 1].key : 0;
    return nextId + 1;
  },
});

export default doneState;
