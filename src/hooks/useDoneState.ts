import { useRecoilValue } from "recoil";
import doneState from "../atoms/doneState";

export default function useDoneState() {
  return useRecoilValue(doneState);
}
