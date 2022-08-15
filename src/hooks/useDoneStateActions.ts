import { useCallback, useMemo } from "react";
import { useRecoilCallback, useRecoilState } from "recoil";
import doneState, { nextIdState } from "../atoms/doneState";

export default function useDoneStateActions() {
  const [doneList, setDoneList] = useRecoilState(doneState);

  /* doneState에 새로운 DoneItem 추가 */
  const add = useRecoilCallback(
    ({ snapshot }) =>
      async (date: Date, content: string) => {
        const nextId = await snapshot.getPromise(nextIdState);
        setDoneList((prev) =>
          prev.concat({
            date,
            content,
            key: nextId,
          })
        );
        localStorage.setItem(
          "donelist",
          JSON.stringify(
            doneList.concat({
              date,
              content,
              key: nextId,
            })
          )
        );
      },
    [setDoneList]
  );

  /* doneState에서 인자로 전달받은 date와 일치하는 날들을 반환 */
  const find = useCallback(
    (date: Date) => {
      return doneList.filter(
        (doneItem) => doneItem.date.getDate() === date.getDate()
      );
    },
    [doneList]
  );

  const remove = useCallback(
    (key: number) => {
      setDoneList(doneList.filter((doneItem) => doneItem.key !== key));
    },
    [doneList, setDoneList]
  );

  return useMemo(() => ({ add, find, remove }), [add, find, remove]);
}
