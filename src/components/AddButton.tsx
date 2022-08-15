import { useRecoilState } from "recoil";
import styled from "styled-components";
import { activatedSelector } from "../atoms/modalState";

const Styles = {
  AddButton: styled.button`
    box-sizing: border-box;
    /* 스타일 */
    background-color: #333;
    border-style: none;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: "Farfetch Basis", "Helvetica Neue", Arial, sans-serif;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
    margin: 0;
    max-width: none;
    min-height: 44px;
    min-width: 10px;
    outline: none;
    overflow: hidden;
    padding: 9px 20px 8px;
    position: relative;
    text-align: center;
    text-transform: none;
    width: 100%;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    :hover {
      opacity: 0.75;
    }
  `,
};

export default function AddButton() {
  const [activated, setActivated] = useRecoilState(activatedSelector);
  const onClick = () => {
    setActivated(!activated);
  };
  return <Styles.AddButton onClick={onClick}>+</Styles.AddButton>;
}
