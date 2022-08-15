import styled from "styled-components";

const Styles = {
  Modal: styled.div<{ visible: boolean }>`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? "block" : "none")};

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000066;
  `,
};

export function Modal({ visible }: { visible: boolean }) {
  return <Styles.Modal visible={visible} />;
}
