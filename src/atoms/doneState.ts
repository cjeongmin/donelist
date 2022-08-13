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
  default: [
    { key: 1, date: new Date(), content: "content1" },
    {
      key: 2,
      date: new Date(Date.now() + 1000 * 60 * 60),
      content: "content2",
    },
    {
      key: 3,
      date: new Date(Date.now() + 1000 * 60 * 60 * 2),
      content: "content3",
    },
    {
      key: 4,
      date: new Date(Date.now() + 1000 * 60 * 60 * 3),
      content: "content4",
    },
  ],
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
