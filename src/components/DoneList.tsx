import React from "react";
import styled from "styled-components";
import useDoneListActions from "../hooks/useDoneStateActions";

const Styles = {
  DoneList: styled.div`
    box-sizing: border-box;
    height: 90%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;

    :hover {
      overflow-y: auto;
    }

    .empty {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      color: #888888;
    }
  `,

  DoneItem: styled.div<{ marginBottom: boolean }>`
    box-sizing: border-box;
    width: 95%;
    height: 10%;
    min-height: 50px;

    padding: 0.5%;
    border-color: rgba(100, 100, 111, 0.2);
    border-style: solid;
    border-width: 1px;
    border-radius: 6px;

    margin-bottom: ${(props) => (props.marginBottom ? "0.5%" : "0%")};
    background-color: #fdfdfd;
    transition: transform 0.25s, margin-top 0.25s, margin-bottom 0.25s;

    :hover {
      margin-top: 1%;
      margin-bottom: 1%;
      transform: scale(1.01);
    }

    .date {
      color: #888888;
      font-size: 0.25rem;
      margin-bottom: 1%;
    }
    .content {
      font-size: 0.8rem;
    }
  `,
};

function DoneItem({
  date,
  content,
  marginBottom = true,
  onRemove,
}: {
  date: Date;
  content: string;
  marginBottom?: boolean;
  onRemove: (event: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <Styles.DoneItem marginBottom={marginBottom} onClick={onRemove}>
      <div className="date">{date.toLocaleString()}</div>
      <div className="content">{content}</div>
    </Styles.DoneItem>
  );
}

export default function DoneList({ date }: { date: Date }) {
  const { find, remove } = useDoneListActions();

  const doneList = find(date);

  return (
    <Styles.DoneList>
      {doneList.length ? (
        doneList.map((doneItem) => (
          <DoneItem
            date={doneItem.date}
            content={doneItem.content}
            key={doneItem.key}
            marginBottom={doneItem.key !== doneList[doneList.length - 1].key}
            onRemove={(event) => {
              remove(doneItem.key);
            }}
          />
        ))
      ) : (
        <div className="empty">완료한 일이 없습니다.</div>
      )}
    </Styles.DoneList>
  );
}
