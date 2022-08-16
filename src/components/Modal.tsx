import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { activatedSelector, contentSelector } from "../atoms/modalState";
import useDoneStateActions from "../hooks/useDoneStateActions";

const Styles = {
  Modal: styled.div<{ visible: boolean }>`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? "block" : "none")};
    z-index: 1;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000066;
  `,

  Body: styled.div`
    background-color: white;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 25%;
    max-width: 500px;
    transform: translate(-50%, -50%);

    @media (max-width: 500px) {
      height: 25%;
      width: 80%;
    }

    display: flex;
    flex-direction: column;
  `,

  Title: styled.div`
    flex-grow: 0;
    padding-top: 0.5rem;
    font-size: 1.25rem;
    text-align: center;
  `,

  Separator: styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 0.25%;
    background-color: rgba(100, 100, 111, 0.2);
    margin: 1% 0% 1% 0%;
  `,

  Input: styled.textarea`
    box-sizing: border-box;
    flex-grow: 2;
    border: none;
    resize: none;
    padding: 1rem;

    :focus {
      outline: none;
    }
  `,

  Buttons: styled.div`
    display: flex;
  `,

  Button: styled.button`
    flex-grow: 1;

    background-color: #ffffff;
    border-style: none;
    box-sizing: border-box;
    color: #333;
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

export function Modal() {
  const { add } = useDoneStateActions();
  const [activated, setActivated] = useRecoilState(activatedSelector);
  const [content, setContent] = useRecoilState(contentSelector);

  const onCancel = () => {
    setActivated(!activated);
    setContent("");
  };
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  const addDoneItem = () => {
    if (content !== "") {
      add(new Date(), content);
    }
    setActivated(!activated);
    setContent("");
  };

  return (
    <Styles.Modal visible={activated}>
      <Styles.Body>
        <Styles.Title>항목 추가하기</Styles.Title>
        <Styles.Separator />
        <Styles.Input
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={onChange}
        />
        <Styles.Separator />
        <Styles.Buttons>
          <Styles.Button onClick={addDoneItem}>확인</Styles.Button>
          <Styles.Button onClick={onCancel}>취소</Styles.Button>
        </Styles.Buttons>
      </Styles.Body>
    </Styles.Modal>
  );
}
