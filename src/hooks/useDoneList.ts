import { useRecoilValue } from "recoil";
import doneState from "../atoms/doneState";

export default function useDoneList() {
  return useRecoilValue(doneState);
}

export function useDoneListFindByDate({ date }: { date: Date }) {}
