import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalState";

export default function useModalState() {
  return useRecoilState(modalState);
}
