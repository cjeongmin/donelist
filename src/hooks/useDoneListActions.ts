import { useMemo } from "react";
import { useRecoilCallback, useSetRecoilState } from "recoil";
import doneState, { nextIdState } from "../atoms/doneState";

export default function useDoneListActions() {
  const set = useSetRecoilState(doneState);
  const add = useRecoilCallback(
    ({ snapshot }) =>
      async (date: Date, content: string) => {
        const nextId = await snapshot.getPromise(nextIdState);
        set((prev) =>
          prev.concat({
            date,
            content,
            key: nextId,
          })
        );
      },
    [set]
  );

  return useMemo(() => ({ add }), [add]);
}
